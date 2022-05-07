import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { IRootState } from '@/types'
import { APIS } from '@/services2'
import { withRequest } from '@/utils'

import Avatar, { NickName } from '@/components/Avatar'
import Time from '@/components/Time'
import BrickMessageList from '../_components/brick-message-list'
import MateMessageList from '../_components/mate-message-list'
import Tab from '../_components/tab'
import { ITabProps } from '../_components/tab/Tab'

import './index.less'

import bgIcon from '../imgs/account_bg.png'

type PropsFromState = ReturnType<typeof mapStateToProps>
type PropsFromDispatch = {}

type PageOwnProps = {}

type PageState = {
  brickList: GetApiResultType<typeof APIS.WallApi.apiWallListPublishGet>
  mateList: GetApiResultType<typeof APIS.SaleWallApi.apiSaleWallListPublishGet>
  hasNext: boolean
  user?: GetApiResultType<typeof APIS.UserApi.apiUserGet>
  activeTab: number
}

type IProps = PropsFromState & PropsFromDispatch & PageOwnProps

const prefix = 'other-account'

class OtherAccount extends Component<IProps, PageState> {
  state: PageState = {
    brickList: [],
    mateList: [],
    hasNext: true,
    activeTab: 0
  }

  id = ''
  pageNum = 0
  pageSize = 20
  fetching = false

  fetchBrickList = async (reset?: boolean) => {
    this.fetching = true
    const [err, res] = await withRequest(APIS.WallApi.apiWallListPublishGet)({
      pageNum: String(this.pageNum),
      pageSize: String(this.pageSize),
      id: this.id
    })

    this.fetching = false

    if (err || !res) {
      return Promise.reject()
    }

    this.setState({
      brickList: reset ? res : this.state.brickList.concat(res),
      hasNext: res.length === this.pageSize
    })
  }

  fetchMateList = async (reset?: boolean) => {
    this.fetching = true
    const [err, res] = await withRequest(
      APIS.SaleWallApi.apiSaleWallListPublishGet
    )({
      pageNum: String(this.pageNum),
      pageSize: String(this.pageSize),
      id: this.id
    })

    this.fetching = false

    if (err || !res) {
      return Promise.reject()
    }

    this.setState({
      mateList: reset ? res : this.state.mateList.concat(res),
      hasNext: res.length === this.pageSize
    })
  }

  tabList = [
    {
      key: 'brick',
      text: '他发布的表白墙',
      api: this.fetchBrickList
    },
    {
      key: 'mate',
      text: '他发布的卖舍友',
      api: this.fetchMateList
    }
  ]

  onLoad(e) {
    if (e.id) {
      this.id = e.id
      this.getUserInfo()
      this.init()
    }
  }

  getUserInfo = async () => {
    const [err, res] = await withRequest(APIS.UserApi.apiUserGet)({
      id: this.id
    })

    if (err) {
      return
    }

    this.setState({
      user: res
    })
  }

  init = async () => {
    this.pageNum = 0
    await this.tabList[this.state.activeTab].api(true)
  }

  onReachBottom = () => {
    if (!this.state.hasNext || this.fetching) {
      return
    }
    this.pageNum++
    this.tabList[this.state.activeTab].api().catch(() => {
      this.pageNum--
    })
  }

  onPullDownRefresh = async () => {
    await this.init()
    Taro.stopPullDownRefresh()
  }

  onTabChange: ITabProps['onChange'] = async index => {
    this.setState(
      {
        activeTab: index
      },
      () => {
        this.init()
      }
    )
  }

  render() {
    const { brickList, mateList, user, activeTab } = this.state

    return (
      <View className={prefix}>
        <Image className={`${prefix}-bg`} src={bgIcon} mode="widthFix"></Image>
        <View className={`${prefix}-info`}>
          <Avatar
            className={`${prefix}-info__avatar`}
            avatarSize="150rpx"
            customAvatarUrl={user?.userInfo?.customAvatarUrl}
            avatarUrl={user?.userInfo?.avatarUrl}
            onClickType="preview"
          ></Avatar>
          <View className={`${prefix}-info__other`}>
            <View className={`${prefix}-info__other-item`}>
              <View>获赞</View>
              <View>83</View>
            </View>
            <View className={`${prefix}-info__other-item`}>
              <View>关注</View>
              <View>暂未开放</View>
            </View>
            <View className={`${prefix}-info__other-item`}>
              <View>粉丝</View>
              <View>暂未开放</View>
            </View>
          </View>
        </View>
        <NickName
          className={`${prefix}-nickname`}
          customName={user?.userInfo?.customName}
          nickName={user?.userInfo?.nickName}
        ></NickName>
        <View className={`${prefix}-info-line`}>
          <View>用户加入时间：</View>
          <Time time={user?.createdAt} type="relative"></Time>
        </View>
        <View className={`${prefix}-info-line`}>
          <View>签名：</View>
          <View>暂未开放</View>
        </View>

        <View className={`${prefix}-border`}></View>

        <Tab
          currentIndex={activeTab}
          tabList={this.tabList}
          onChange={this.onTabChange}
        >
          {activeTab === 0 && (
            <BrickMessageList list={brickList}></BrickMessageList>
          )}
          {activeTab === 1 && (
            <MateMessageList list={mateList}></MateMessageList>
          )}
        </Tab>
      </View>
    )
  }
}

const mapStateToProps = (state: IRootState) => ({
  user: state.user
})

export default connect<PropsFromState, PropsFromDispatch, PageOwnProps>(
  mapStateToProps
)(OtherAccount)
