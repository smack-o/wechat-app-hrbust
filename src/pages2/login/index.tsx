import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { IRootState } from '@/types'
import { AtInput, AtButton, AtIcon } from 'taro-ui'
import { getCaptcha, login } from '@/services/user'
import { cError } from '@/utils'
import { routes } from '@/utils/router'
import { init } from '@/redux/actions/user'
import { Dispatch, bindActionCreators } from 'redux'

import './index.less'

type PropsFromState = ReturnType<typeof mapStateToProps>

type PropsFromDispatch = ReturnType<typeof mapDispatchToProps>

type PageOwnProps = {}

type PageState = {
  username: string
  password: string
  captcha: string
  captchaImage: string
  showPassword: boolean
}
type IProps = PropsFromState & PropsFromDispatch & PageOwnProps

class Login extends Component<IProps, PageState> {
  state = {
    username: '',
    password: '',
    captcha: '',
    captchaImage: '',
    showPassword: false
  }

  componentDidShow() {
    const loginInfo = JSON.parse(Taro.getStorageSync('user:loginInfo') || '{}')
    this.setState(loginInfo)
  }

  async onLoad() {
    const { user } = this.props
    await user.getUserInfoPromise
    // this.getCaptcha()
  }

  getCaptcha = async () => {
    Taro.showLoading({
      title: '加载中...'
    })
    const [err, res] = await cError(getCaptcha())
    Taro.hideLoading()
    if (err) {
      Taro.showToast({
        title: '服务暂时挂了呀~请退出稍后重试！',
        icon: 'none'
      })
    }
    this.setState({
      captchaImage: res.data.captcha
    })
  }

  onInputChange = (key: keyof PageState, value) => {
    const state = {
      [key]: value
    } as PageState
    this.setState(state)
  }

  onSubmit = async (e: TaroBaseEventOrig) => {
    Taro.showLoading({
      title: '登陆中...'
    })
    // 授权失败不允许登录
    if (/fail auth deny/.test(e.detail.errMsg)) {
      return
    }
    if (e.detail.userInfo) {
      Taro.setStorageSync('userInfo', e.detail.userInfo)
    }

    console.log(e.detail.userInfo)

    const { username, password, captcha } = this.state

    Taro.setStorageSync(
      'loginInfo',
      JSON.stringify({
        username,
        password
      })
    )

    const [err] = await cError(login({ username, password, captcha }))
    if (err) {
      Taro.showModal({
        content: err.message,
        showCancel: false
      })

      Taro.hideLoading()

      this.getCaptcha()
      return
    }

    await this.props.init()

    Taro.hideLoading()

    Taro.reLaunch({
      url: routes.index
    })
  }

  changePassWordType = () => {
    this.setState({
      showPassword: !this.state.showPassword
    })
  }

  render() {
    const {
      username,
      password,
      captcha,
      captchaImage,
      showPassword
    } = this.state

    return (
      <View className="login-page">
        <View className="title">账号学号</View>
        <View className="desc">
          学号可以暂时不绑定，未绑定学号理工喵部分服务不可用
        </View>
        <AtInput
          name="username"
          title="学号"
          type="number"
          placeholder="请输入学号"
          value={username}
          onChange={e => this.onInputChange('username', e)}
        />

        <AtInput
          name="password"
          title="密码"
          type={showPassword ? 'text' : 'password'}
          placeholder="请输入密码"
          value={password}
          onChange={e => this.onInputChange('password', e)}
        >
          <AtIcon
            value="eye"
            size="26"
            onClick={this.changePassWordType}
          ></AtIcon>
        </AtInput>
        <AtInput
          name="value"
          title="验证码"
          type="text"
          placeholder="请输入验证码"
          value={captcha}
          onChange={e => this.onInputChange('captcha', e)}
        >
          {!captchaImage ? (
            <AtButton className="captcha-btn" onClick={this.getCaptcha}>
              点击获取验证码
            </AtButton>
          ) : (
            <Image src={captchaImage} onClick={this.getCaptcha}></Image>
          )}
          {/* <Image src={captchaImage} onClick={this.getCaptcha} /> */}
        </AtInput>
        <View className="tips">
          <View className="item">
            *默认密码身份证号（如最后一位X，需要大写）
          </View>
          <View className="item">*点击验证码图片切换验证码</View>
          <View className="item">
            *登录学号将绑定到该微信，如需绑定其它账号，请先去个人中心解绑
          </View>
          <View className="item">
            *学号可以暂时不绑定，未绑定学号理工喵部分服务不可用
          </View>
          <View className="item orange">
            *理工喵账号密码均与哈理工教务在线同步，若登录失败请先查看教务在线是否修改过密码
          </View>
        </View>
        <AtButton
          className="login-button"
          disabled={!username || !password || !captcha}
          type="primary"
          openType="getUserInfo"
          onGetUserInfo={this.onSubmit}
        >
          登录
        </AtButton>
      </View>
    )
  }
}

const mapStateToProps = (state: IRootState) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ init }, dispatch)

export default connect<PropsFromState, PropsFromDispatch, PageOwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(Login)
