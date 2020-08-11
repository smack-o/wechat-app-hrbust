import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { View, Ad } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { IRootState } from '@/types'
import { UserState } from '@/redux/reducers/user'
import cn from 'classnames'
import { Dispatch } from 'redux'
import { getExams } from '@/redux/actions/user'
import { Loading, CaptchaModal } from '@/components'
import { cError, showToast } from '@/utils'
import { routes } from '@/utils/router'

import './index.less'

type PropsFromState = {
  user: UserState
}

type PropsFromDispatch = {
  getExams: typeof getExams
}

type PageOwnProps = {
  changeLoading: (boolean) => void
}

type PageState = {
  loading: boolean
  captchaImage: string
  isShowCaptchaModal: boolean
}

type IProps = PropsFromState & PropsFromDispatch & PageOwnProps

class Exam extends Component<IProps, PageState> {
  pageNo = 1

  state: Readonly<PageState> = {
    loading: false,
    captchaImage: '',
    isShowCaptchaModal: false,
  }

  componentDidShow () {
  }

  async onLoad(e) {
    await this.getList()
    if (this.props.user.exams.length === 0) {
      Taro.showToast({
        title: '没有拉取到数据~请稍后重试',
        icon: 'none'
      })
    }
  }

  // 拉取数据、错误处理等
  getList = async (captcha = '') => {
    // this.loading = true
    this.setLoading(true)
    const [err, res] = await cError(this.props.getExams(this.pageNo, captcha))
    this.setLoading(false)

    // 登录失效，需要输入验证码
    if (res.status === 400005) {
      this.showCaptchaModal(res.data.captcha)
      return
    }

    // 错误验证码
    if (res.status === 400001) {
      showToast({
        title: '验证码输入错误，请重新输入',
        complete: () => {
          this.showCaptchaModal(res.data.captcha)
        }
      })
      return
    }
    // 用户名密码错误需要重新登录
    if (res.status === 400006) {
      Taro.showModal({
        title: '账号密码错误',
        content: '可能是您近期更改教务在线密码了，是否重新登录？',
        success (mRes) {
          if (mRes.confirm) {
            // console.log('用户点击确定')
            Taro.reLaunch({
              url: routes.login
            })
          } else if (res.cancel) {
            // console.log('用户点击取消')
            Taro.switchTab({
              url: routes.index
            })
          }
        }
      })
      return
    }

    if (this.pageNo > 1 && res.data.length === 0) {
      showToast({
        title: '喵，已经到底了~',
        icon: 'none',
        duration: 2000
      })
      this.pageNo -= 1
    }
  }

  // loading
  setLoading = (loading: boolean) => this.setState({ loading })

  // 上拉加载
  onReachBottom() {
    if (!this.state.loading) {
      this.pageNo += 1
      this.getList()
    }
  }

  // 展示验证码弹窗
  showCaptchaModal = (captcha: string) => {
    this.setState({
      captchaImage: captcha,
      isShowCaptchaModal: true,
    })
  }

  // 验证码弹窗确认
  onCaptchaModalSubmit = (captcha: string) => {
    this.setState({
      isShowCaptchaModal: false,
    })
    this.getList(captcha)
  }

  render () {
    const { user: { exams } } = this.props
    const { loading, captchaImage, isShowCaptchaModal } = this.state

    return (
      <Fragment>
        <CaptchaModal captchaImage={captchaImage} onSubmit={this.onCaptchaModalSubmit} isOpened={isShowCaptchaModal}></CaptchaModal>
        <Loading loading={loading}></Loading>
        <View className="exam-page">
          {
            exams.map((item, index) => {
              return <Fragment key={item.date + item.course}>
                {index > 0 && exams[index - 1].ending !== exams[index].ending
                  && <Ad className="advertising" unitId="adunit-20521f8411ad8419"></Ad>}
                <View className={cn('news-item', { ending: item.ending })}>
                  <View className="news-wrapper">
                    <View className="news-message">
                      <View className="flex-box">
                        <View className="date">{item.date}</View>
                        <View className="time">{item.time}</View>
                      </View>
                      <View className="flex-box">
                        <View className="course">{item.course}</View>
                        <View className="dateExtend">{item.dateExtend}</View>
                      </View>
                      <View className="flex-box align-right">
                        <View className="position">{item.position}</View>
                        <View className={cn('info', { 'text-red': item.info === '重考'})}>{item.info}</View>
                      </View>
                    </View>
                  </View>
                </View>
              </Fragment>
            })
          }
        </View>
      </Fragment>
    )
  }
}

const mapStateToProps = (state: IRootState) => ({
  user: state.user,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getExams: (...args) => dispatch(getExams(...args)),
})

export default connect<PropsFromState, PropsFromDispatch, PageOwnProps>(mapStateToProps, mapDispatchToProps)(Exam)
