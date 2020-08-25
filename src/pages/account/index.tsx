import React, { Component } from 'react'
import { connect } from 'react-redux'
import Taro from '@tarojs/taro'
import { View, Image, OpenData, Button } from '@tarojs/components'
import { IRootState } from '@/types'
import { goPage, routes } from '@/utils/router'
import { UserState } from '@/redux/reducers/user'
import { logout } from '@/redux/actions/user'
import { Dispatch } from 'redux'

import arrowRight from '@/assets/icon/arrow_right.png'
import authIcon from './res/authentication.png'
import removeBindingIcon from './res/remove_binding.png'
import contactIcon from './res/contact.png'

// images
import './index.less'

type PropsFromState = {
  user: UserState
}

type PropsFromDispatch = {
  logout: typeof logout
}

type PageOwnProps = {}

type PageState = {
}

type IProps = PropsFromState & PropsFromDispatch & PageOwnProps

class Account extends Component<IProps, PageState> {
  state = {
  }

  componentDidShow () {
  }

  onLoad() {
  }

  // 登出
  logout = () => {
    Taro.showModal({
      title: '确定要解绑学号？',
      content: '解绑学号将删除当前学号的部分信息，需要重新绑定拉取~',
      success: (res) => {
        if (res.confirm) {
          this.props.logout().then(() => {
            Taro.reLaunch({
              url: routes.index
            })
          })
        }
      }
    })
  }

  render () {
    const { user: { isLogin, studentInfo } } = this.props

    return (
      <View className="account-container">
        <View className="user">
          <View className="avatar-wrapper">
            <OpenData className="avatar" type="userAvatarUrl" lang="zh_CN"></OpenData>
          </View>
          {!isLogin && <View className="button" onClick={() => goPage(routes.login)}>登录</View>}
          {isLogin && <View className="info">
            <View className="name"><OpenData type="userNickName" lang="zh_CN"></OpenData></View>
            <View className="student">
              <Image className="image" src={authIcon} />
              <View>{studentInfo.name}</View>
            </View>
          </View>}
        </View>

        <View className="other">
          {
            isLogin && <View className="item" onClick={this.logout}>
              <Image className="image" src={removeBindingIcon} />
              <View className="info">
                <View>解除绑定</View>
                <Image className="arrow-right" src={arrowRight} />
              </View>
            </View>
          }
          <Button className="item button" open-type="contact">
            <Image className="image" src={contactIcon} />
            <View className="info">
              <View>联系阿喵</View>
              <Image className="arrow-right" src={arrowRight} />
            </View>
          </Button>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state: IRootState) => ({
  user: state.user,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  logout: () => dispatch(logout()),
})


export default connect<PropsFromState, PropsFromDispatch, PageOwnProps>(mapStateToProps, mapDispatchToProps)(Account)
