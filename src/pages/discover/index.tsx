import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Image, Navigator } from '@tarojs/components'
import { IRootState } from '@/types'
import { goPage, routes } from '@/utils/router'
import { UserState } from '@/redux/reducers/user'
import Taro from '@tarojs/taro'
// images
import newFnIcon from './res/new_fn_icon.png'
import touchMeIcon from './res/touch_me_icon.png'
import discoverIcon from './res/discover.png'
import './index.less'

type PropsFromState = {
  user: UserState
}
type PropsFromDispatch = {
}

type PageOwnProps = {}

type PageState = {
}

type IProps = PropsFromState & PropsFromDispatch & PageOwnProps

class Discover extends Component<IProps, PageState> {
  state = {
  }

  componentDidShow () {
  }

  onLoad() {
    const waimaiPlugin = Taro.requirePlugin('waimai')
    waimaiPlugin.init('110804100128')
  }

  render () {
    return (
      <View className="discover-container">
        <View className="fn-wrapper">
          <View className="content" onClick={() => goPage(routes.yingxin)}>
            <Image className="image" src={newFnIcon} mode="widthFix" />
            <View className="text">新生速查</View>
          </View>
          <View className="content" onClick={() => goPage(routes.aboutme)}>
            <Image className="image" src={touchMeIcon} mode="widthFix" />
            <View className="text">别点我</View>
          </View>
        </View>
        {/* @ts-ignore */}
        <cards />
        <View className="info">
          更多功能敬请期待~
        </View>
        <Image className="discover-image" src={discoverIcon} mode="widthFix" />
      </View>
    )
  }
}

const mapStateToProps = (state: IRootState) => ({
  user: state.user,
})

export default connect<PropsFromState, PropsFromDispatch, PageOwnProps>(mapStateToProps)(Discover)
