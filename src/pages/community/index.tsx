import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Image } from '@tarojs/components'
import { IRootState } from '@/types'
import { goPage, routes } from '@/utils/router'
import Taro from '@tarojs/taro'
import { APIS, InlineResponse2002Result } from '@/services2'
import { withRequest } from '@/utils'
import BottomBar from './_components/bottom-bar'
// images
import newFnIcon from './res/new_fn_icon.png'
import touchMeIcon from './res/touch_me_icon.png'
import discoverIcon from './res/discover.png'
import './index.less'
import { IBottomBarProps } from './_components/bottom-bar/BottomBar'
import Wall from './_components/wall'
import LoversFace from './_components/lovers-face'
import SellRoomie from './_components/sell-roomie'

type PropsFromState = ReturnType<typeof mapStateToProps>
type PropsFromDispatch = {
}

type PageOwnProps = {}

type PageState = {
  currentTab: number;
}

type IProps = PropsFromState & PropsFromDispatch & PageOwnProps

class Discover extends Component<IProps, PageState> {
  state: PageState  = {
    currentTab: 0
  }

  tabs = [{
    component: Wall
  },
  {
    component: LoversFace
  },
  {
    component: SellRoomie
  }]

  // componentDidShow () {
  // }

  // async onLoad() {

  // }
  // onShow() {
  //   // Taro.getCurrentInstance()?.page?.getTabBar?.()
  //   // Taro.getCurrentInstance()?.page?.getTabBar().setData({
  //   //   selected: 1,
  //   // })
  // }

  onBarChange: IBottomBarProps['onChange'] = (index, item) => {
    console.log(item)
    this.setState({
      currentTab: index
    })
  }


  render () {
    const { currentTab } = this.state

    const Comp = this.tabs[currentTab].component
    return (
      <View className="discover-container">
        <Comp />
        <BottomBar onChange={this.onBarChange}></BottomBar>
      </View>
    )
  }
}

const mapStateToProps = (state: IRootState) => ({
  user: state.user,
})

export default connect<PropsFromState, PropsFromDispatch, PageOwnProps>(mapStateToProps)(Discover)
