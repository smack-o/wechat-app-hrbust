import React, { Component } from 'react'
import { connect } from 'react-redux'
import Taro from '@tarojs/taro'
import { View, Image, OpenData, Text, Button } from '@tarojs/components'
import { IRootState } from '@/types'
import { goPage, routes } from '@/utils/router'
import { logout, init } from '@/redux/actions/user'
import { Dispatch, bindActionCreators } from 'redux'
import { cError } from '@/utils'

import arrowRight from '@/assets/icon/arrow_right.png'
import authIcon from './res/authentication.png'
import removeBindingIcon from './res/remove_binding.png'
import contactIcon from './res/contact.png'

import './index.less'

type PropsFromState = ReturnType<typeof mapStateToProps>

type PropsFromDispatch = ReturnType<typeof mapDispatchToProps>

type PageOwnProps = {}

type PageState = {
  version: string
}

type IProps = PropsFromState & PropsFromDispatch & PageOwnProps

class Account extends Component<IProps, PageState> {
  state = {
    version: '1.0.0'
  }

  componentDidShow () {
    const { miniProgram } = Taro.getAccountInfoSync() || {}
    this.setState({
      version: miniProgram.version
    })
  }

  onLoad() {
  }

  // 登出
  logout = () => {
    Taro.showModal({
      title: '确定要解绑学号？',
      content: '解绑学号将删除当前学号的部分信息，需要重新绑定拉取~',
      success: async (res) => {
        if (res.confirm) {
          Taro.showLoading({
            title: '加载中...'
          })
          const [err] = await cError(this.props.logout())
          Taro.hideLoading()
          if (!err) {
            Taro.reLaunch({
              url: routes.index,
              success: () => {
                // 解绑 session 也会失效，需要重新登录
                // TODO 后续需要优化后端逻辑，此时不应该失效，只做解绑操作即可
                this.props.init()
              }
            })
          }
        }
      }
    })
  }

  render () {
    const { user: { isLogin, studentInfo } } = this.props
    const { version } = this.state

    console.log(version)

    return (
      <View className="account-container">
        <View className="user">
          <View className="avatar-wrapper">
            <OpenData className="avatar" type="userAvatarUrl" lang="zh_CN"></OpenData>
          </View>
          {!isLogin
            ? <View className="button" onClick={() => goPage(routes.login)}>登录</View>
            : <View className="info">
              <View className="name">
                <OpenData type="userNickName" lang="zh_CN"></OpenData>
                <Text selectable className="username">{studentInfo.username}</Text>
              </View>
              <View className="student">
                <Image className="image" src={authIcon} />
                <View>{studentInfo.name}</View>
              </View>
            </View>
          }
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

        { version && <View className="version">@理工喵 v{version}</View>}
      </View>
    )
  }
}

const mapStateToProps = (state: IRootState) => ({
  user: state.user,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ logout, init }, dispatch)

export default connect<PropsFromState, PropsFromDispatch, PageOwnProps>(mapStateToProps, mapDispatchToProps)(Account)
