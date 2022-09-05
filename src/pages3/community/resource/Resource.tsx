import React, { Fragment } from 'react'
import { Image, View, Input, Ad } from '@tarojs/components'
import { loginModal, withRequest } from '@/utils'
import { APIS } from '@/services2'
import Taro, { navigateTo } from '@tarojs/taro'
import { goPage, routes } from '@/utils/router'
import Tab from '../_components/tab'
import { ITabProps } from '../_components/tab/Tab'
import ResourceItem from '../_components/resource-item'
// import AddWallIcon from '../../imgs/add_wall.png'
import SearchIcon from '../imgs/search.png'

import './Resource.less'

type ResourceState = {
  list: GetApiResultType<typeof APIS.ResourceApi.apiResourceListGet>
  activeTab: number
  hasNext: boolean
  loading: boolean
}

type ResourceProps = {}

export default class Resource extends React.Component<
  ResourceProps,
  ResourceState
> {
  tabList = [
    {
      key: 'all',
      text: '全部',
      api: APIS.ResourceApi.apiResourceListGet
    },
    {
      key: 'like',
      text: '喜欢',
      api: APIS.ResourceApi.apiResourceListLikeGet
    },
    {
      key: 'hot',
      text: '最热',
      api: APIS.ResourceApi.apiResourceListHotGet
    }
  ]

  pageNum = 0
  pageSize = 20
  fetching = false

  state: ResourceState = {
    list: [],
    activeTab: 0,
    hasNext: true,
    loading: true
  }

  // 重新进入页面时，需要重新获取数据
  onShow = () => {
    if (this.state.list.length === 0) {
      return
    }
    this.fetchList(false, true)
  }

  async componentDidMount() {
    try {
      Taro.showLoading({
        title: '加载中...'
      })
      await loginModal()
      await this.init()
      this.setState({
        loading: false
      })
      Taro.hideLoading()
    } catch (error) {
      Taro.hideLoading()
    }
  }

  init = async () => {
    this.pageNum = 0
    await this.fetchList(true)
  }

  fetchList = async (reset?: boolean, refresh?: boolean) => {
    this.fetching = true
    let pageNum = String(this.pageNum)
    let pageSize = String(this.pageSize)

    // 刷新当前数据
    if (refresh) {
      pageNum = '0'
      pageSize = String((this.pageNum + 1) * this.pageSize)
    }

    const api = this.tabList[this.state.activeTab].api
    const [err, res] = await withRequest(api)({
      pageNum,
      pageSize
    })

    this.fetching = false

    if (err || !res) {
      return Promise.reject()
    }

    this.setState({
      list: reset || refresh ? res : this.state.list.concat(res),
      hasNext: res.length >= this.pageSize
    })
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

  onReachBottom = () => {
    if (!this.state.hasNext || this.fetching) {
      return
    }
    this.pageNum++
    return this.fetchList().catch(() => {
      this.pageNum--
    })
  }

  onPullDownRefresh = async () => this.init()

  // onAddWallClick = () => {
  //   navigateTo({
  //     url: routes.createWall
  //   })
  // }

  render() {
    const { activeTab, loading, list = [] } = this.state

    if (loading) {
      return null
    }

    return (
      <View className="wall">
        <View
          className="wall-search"
          onClick={() => {
            goPage(routes.search)
          }}
        >
          <Image className="wall-search__icon" src={SearchIcon}></Image>
          <Input placeholder="搜索关键词" disabled></Input>
        </View>
        <Tab
          currentIndex={activeTab}
          tabList={this.tabList}
          onChange={this.onTabChange}
        >
          {list.length === 0 ? (
            <View className="community-no-data">暂无内容</View>
          ) : (
            list.map((item, index) => {
              return (
                <Fragment key={item._id}>
                  <ResourceItem
                    showHotComments
                    data={item}
                    onClick={() =>
                      goPage(`${routes.resourceDetail}?id=${item._id}`)
                    }
                  ></ResourceItem>
                  {index !== 0 && index % 5 === 0 && (
                    <View className="wall-ad">
                      {/* <Ad
                        className="advertising"
                        unitId="adunit-2d76930b51ac0dbe"
                      ></Ad> */}
                      {/* @ts-ignore */}
                      <c-ad></c-ad>
                    </View>
                  )}
                </Fragment>
              )
            })
          )}
        </Tab>
        <View className="wall__add-wall" onClick={this.onAddWallClick}></View>
        {/* {!hasNext && <View>到底了~</View>} */}
      </View>
    )
  }
}
