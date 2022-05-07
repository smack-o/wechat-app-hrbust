import React from 'react'
import { Image, View, Input } from '@tarojs/components'
import { withRequest } from '@/utils'
import { APIS } from '@/services2'
import { navigateTo } from '@tarojs/taro'
import { goPage, routes } from '@/utils/router'
import Tab from '../tab'
import { ITabProps } from '../tab/Tab'
import WallItem from '../wall-item'
import AddWallIcon from '../../imgs/add_wall.png'
import SearchIcon from '../../imgs/search.png'

import './Wall.less'

type WallState = {
  list: GetApiResultType<typeof APIS.WallApi.apiWallListGet>
  activeTab: number
  hasNext: boolean
}

type WallProps = {}

export default class Wall extends React.Component<WallProps, WallState> {
  tabList = [
    {
      key: 'all',
      text: '全部',
      api: APIS.WallApi.apiWallListGet
    },
    {
      key: 'like',
      text: '喜欢',
      api: APIS.WallApi.apiWallListLikeGet
    },
    {
      key: 'hot',
      text: '最热',
      api: APIS.WallApi.apiWallListHotGet
    }
  ]

  pageNum = 0
  pageSize = 20
  fetching = false

  state: WallState = {
    list: [],
    activeTab: 0,
    hasNext: true
  }

  componentDidMount() {
    this.init()
  }

  init = async () => {
    this.pageNum = 0
    await this.fetchList(true)
  }

  fetchList = async (reset?: boolean) => {
    this.fetching = true
    const api = this.tabList[this.state.activeTab].api
    const [err, res] = await withRequest(api)({
      pageNum: '' + this.pageNum,
      pageSize: '' + this.pageSize
    })

    this.fetching = false

    if (err || !res) {
      return
    }

    this.setState({
      list: reset ? res : this.state.list.concat(res),
      hasNext: res.length === this.pageSize
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
    return this.fetchList()
  }

  onPullDownRefresh = async () => this.init()

  onAddWallClick = () => {
    navigateTo({
      url: routes.createWall
    })
  }

  onInut = async e => {
    // APIS.WallApi.apiWallSearchGet({
    //   // keyword: e.target.value,
    //   pageNum: '0',
    //   pageSize: '5'
    // })
    this.fetching = true
    const [err, res] = await withRequest(APIS.WallApi.apiWallSearchGet)({
      pageNum: '' + this.pageNum,
      pageSize: '' + 20,
      keyword: e.target.value
    })

    this.fetching = false

    if (err || !res) {
      return
    }

    this.setState({
      list: true ? res : this.state.list.concat(res),
      hasNext: res.length === this.pageSize
    })
  }

  onItemClick = () => {}

  render() {
    const { activeTab, hasNext } = this.state
    return (
      <View className="wall">
        <View
          className="wall-search"
          onClick={() => {
            goPage(routes.search)
          }}
        >
          <Image className="wall-search__icon" src={SearchIcon}></Image>
          <Input
            onInput={this.onInut}
            placeholder="搜索关键词"
            disabled
          ></Input>
        </View>
        <Tab
          currentIndex={activeTab}
          tabList={this.tabList}
          onChange={this.onTabChange}
        >
          {this.state.list.map(item => {
            return (
              <WallItem
                data={item}
                key={item._id}
                onClick={() => goPage(`${routes.wallDetail}?id=${item._id}`)}
              ></WallItem>
            )
          })}
        </Tab>
        <View className="wall__add-wall" onClick={this.onAddWallClick}>
          <Image src={AddWallIcon} mode="widthFix"></Image>
        </View>
        {!hasNext && <View>到底了~</View>}
      </View>
    )
  }
}
