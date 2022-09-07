import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import { View } from '@tarojs/components'
import { IRootState } from '@/types'
import Taro from '@tarojs/taro'
import { withShare } from '@/components'
import { routes } from '@/app.config'
import BottomBar, { barList } from './_components/bottom-bar'

import './index.less'
import { IBottomBarProps } from './_components/bottom-bar/BottomBar'

type PropsFromState = ReturnType<typeof mapStateToProps>
type PropsFromDispatch = {}

type PageOwnProps = {}

type PageState = {
  currentTab: number
}

type IProps = PropsFromState & PropsFromDispatch & PageOwnProps

class Discover extends Component<IProps, PageState> {
  state: PageState = {
    currentTab: 0
  }

  ref = createRef<any>()

  _shareOptions = {
    title: '分享了你理工喵社区，快来看看吧',
    path: routes.community
  }

  onShareAppMessage() {}
  onShareTimeline() {}

  onLoad(e) {
    if (e.currentTab !== undefined) {
      this.setState({
        currentTab: +e.currentTab
      })
    }
  }

  componentDidShow() {
    this.ref?.current?.onShow?.()
  }

  onBarChange: IBottomBarProps['onChange'] = index => {
    Taro.pageScrollTo({
      scrollTop: 0
    })
    this.setState({
      currentTab: index
    })

    this._shareOptions.path = `${routes.community}?currentTab=${index}`
  }

  // 下拉同步课表
  async onPullDownRefresh() {
    await this.ref?.current?.onPullDownRefresh?.()
    Taro.stopPullDownRefresh()
  }

  // 上拉加载
  onReachBottom() {
    this.ref?.current?.onReachBottom?.()
  }

  render() {
    const { currentTab } = this.state

    const Comp = barList[currentTab].component

    if (!Comp) {
      return
    }

    return (
      <View className="community-container">
        <Comp ref={this.ref} />
        <BottomBar current={currentTab} onChange={this.onBarChange}></BottomBar>
      </View>
    )
  }
}

const mapStateToProps = (state: IRootState) => ({
  user: state.user
})

export default connect<PropsFromState, PropsFromDispatch, PageOwnProps>(
  mapStateToProps
)(
  withShare({
    title: '分享了你理工喵社区，快来看看吧',
    path: routes.community
  })(Discover)
)
