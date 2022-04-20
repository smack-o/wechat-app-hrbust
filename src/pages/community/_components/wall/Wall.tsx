import React from 'react'
import { View } from '@tarojs/components'
import { withRequest } from '@/utils'
import Taro from '@tarojs/taro'
import { APIS, InlineResponse2002Result } from '@/services2'
import Tab from '../tab'
import { ITabProps } from '../tab/Tab'
import WallItem from '../wall-item'

import './Wall.less'

type WallState = {
  list: InlineResponse2002Result[],
  activeKey?: string;
}

type WallProps = {}

export default class Wall extends React.Component<WallProps, WallState> {
  tabList = [{
    key: 'all',
    text: '全部'
  }, {
    key: 'collect',
    text: '收藏'
  }, {
    key: 'hot',
    text: '最热'
  }]

  state: WallState = {
    list: [],
    activeKey: this.tabList[0].key
  }


  componentDidMount() {
    this.init()
  }


  init = async () => {
    const [err, res] = await withRequest(APIS.WallApi.apiWallListGet)({
      pageNum: '0',
      pageSize: '20'
    })

    if (err || !res) {
      Taro.showToast({
        title: err?.message || '获取失败',
        icon: 'error'
      })
      return
    }

    this.setState({
      list: res
    })
  }

  onTabChange: ITabProps['onChange'] = (_, key) => {
    this.setState({
      activeKey: key
    })
  }

  render() {
    const { activeKey } = this.state
    return (
      <View className="wall">
        <Tab activeKey={activeKey} tabList={this.tabList} onChange={this.onTabChange}>
          {this.state.list.map(item => {
            return (
             <WallItem data={item} key={item._id}></WallItem>
            )
          })}
        </Tab>
      </View>
    )
  }
}
