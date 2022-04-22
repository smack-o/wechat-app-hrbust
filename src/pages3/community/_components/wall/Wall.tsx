import React from 'react'
import { Image, View } from '@tarojs/components'
import { withRequest } from '@/utils'
import { APIS, InlineResponse2002Result } from '@/services2'
import { navigateTo } from '@tarojs/taro'
import { routes } from '@/app.config'
import Tab from '../tab'
import { ITabProps } from '../tab/Tab'
import WallItem from '../wall-item'
import AddWallIcon from '../../imgs/add_wall.png'

import './Wall.less'

type WallState = {
  list: InlineResponse2002Result[]
  activeKey?: string
  hasNext: boolean
}

type WallProps = {}

export default class Wall extends React.Component<WallProps, WallState> {
  tabList = [
    {
      key: 'all',
      text: '全部'
    },
    {
      key: 'collect',
      text: '收藏'
    },
    {
      key: 'hot',
      text: '最热'
    }
  ]

  pageNum = 0
  pageSize = 5
  fetching = false

  state: WallState = {
    list: [],
    activeKey: this.tabList[0].key,
    hasNext: true
  }

  componentDidMount() {
    this.init()
  }

  init = async () => {
    this.pageNum = 0
    this.setState({
      list: []
    })
    this.fetchList()
  }

  fetchList = async () => {
    this.fetching = true
    const [err, res] = await withRequest(APIS.WallApi.apiWallListGet)({
      pageNum: '' + this.pageNum,
      pageSize: '' + this.pageSize
    })

    this.fetching = false

    if (err || !res) {
      return
    }

    this.setState({
      list: this.state.list.concat(res),
      hasNext: res.length === this.pageSize
    })
  }

  onTabChange: ITabProps['onChange'] = (_, key) => {
    this.setState({
      activeKey: key
    })
  }

  onReachBottom = () => {
    if (!this.state.hasNext || this.fetching) {
      return
    }
    this.pageNum++
    this.fetchList()
  }

  onPullDownRefresh = async () => {
    this.pageNum = 0
    await this.fetchList()
  }

  onAddWallClick = () => {
    navigateTo({
      url: routes.createWall
    })
  }

  render() {
    const { activeKey, hasNext } = this.state
    return (
      <View className="wall">
        <Tab
          activeKey={activeKey}
          tabList={this.tabList}
          onChange={this.onTabChange}
        >
          {this.state.list.map(item => {
            return <WallItem data={item} key={item._id}></WallItem>
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
