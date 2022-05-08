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
  loading: boolean
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
    hasNext: true,
    loading: true
  }

  async componentDidMount() {
    await this.init()
    this.setState({
      loading: false
    })
  }

  init = async () => {
    this.pageNum = 0
    await this.fetchList(true)
  }

  fetchList = async (reset?: boolean) => {
    this.fetching = true
    const api = this.tabList[this.state.activeTab].api
    const [err, res] = await withRequest(api)({
      pageNum: String(this.pageNum),
      pageSize: String(this.pageSize)
    })

    this.fetching = false

    if (err || !res) {
      return Promise.reject()
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
    return this.fetchList().catch(() => {
      this.pageNum--
    })
  }

  onPullDownRefresh = async () => this.init()

  onAddWallClick = () => {
    navigateTo({
      url: routes.createWall
    })
  }

  onItemClick = () => {}

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
            list.map(item => {
              return (
                <WallItem
                  showHotComments
                  data={item}
                  key={item._id}
                  onClick={() => goPage(`${routes.wallDetail}?id=${item._id}`)}
                ></WallItem>
              )
            })
          )}
        </Tab>
        <View className="wall__add-wall" onClick={this.onAddWallClick}>
          <Image src={AddWallIcon} mode="widthFix"></Image>
        </View>
        {/* {!hasNext && <View>到底了~</View>} */}
      </View>
    )
  }
}
