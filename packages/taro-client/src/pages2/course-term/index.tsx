import React, { Component } from 'react'
import { connect } from 'react-redux'
import Taro from '@tarojs/taro'
import { View, Picker, Image } from '@tarojs/components'
import { IRootState } from '@/types'
import { routes } from '@/utils/router'
import errorIcon from '@/assets/icon/error_icon.png'
import { Loading, CaptchaModal } from '@/components'
import { cError, showToast } from '@/utils'
import request from '@/utils/request'
import infoIcon from '@/assets/icon/icon_info.png'
import { setCurrentTerm } from '@/redux/actions/user'
import { Dispatch, bindActionCreators } from 'redux'

import checkIcon from './res/check.png'

// images
import './index.less'

type PropsFromState = ReturnType<typeof mapStateToProps>

type PropsFromDispatch = ReturnType<typeof mapDispatchToProps>

type PageOwnProps = {}

type PageState = {
  isShowCaptchaModal: boolean,
  captchaImage: string,
  hasCourseTerms: any[],
  loading: boolean,
  // choiceTerm: number,
}

type IProps = PropsFromState & PropsFromDispatch & PageOwnProps

class CourseTerm extends Component<IProps, PageState> {
  state: Readonly<PageState> = {
    isShowCaptchaModal: false,
    captchaImage: '',
    hasCourseTerms: [],
    loading: false,
    // choiceTerm: 0,
  }

  terms = [
    {id: 0, label: '大一第一学期'},
    {id: 1, label: '大一第二学期'},
    {id: 2, label: '大二第一学期'},
    {id: 3, label: '大二第二学期'},
    {id: 4, label: '大三第一学期'},
    {id: 5, label: '大三第二学期'},
    {id: 6, label: '大四第一学期'},
    {id: 7, label: '大四第二学期'},
    {id: 8, label: '大五第一学期'},
    {id: 9, label: '大五第二学期'}
  ]

  chooseTerm = 0

  termMap = ['大一', '大二', '大三', '大四']

  async onLoad(e) {
    // this.setState({
    //   choiceTerm: e.term,
    // })

    this.setLoading(true)
    await cError(this.getHasCourseTerms())
    this.setLoading(false)
  }

  setTerm = (e: TaroBaseEventOrig) => {
    this.props.setCurrentTerm(e.currentTarget.dataset.termid)
    Taro.navigateBack()
  }

  setLoading = (loading: boolean) => {
    this.setState({ loading })
  }


  changeTerm = async (event) => {
    this.chooseTerm = event.detail.value
    this.createNewTermHandler(event.detail.value)
  }

  createNewTermHandler = async (term: number, captcha = '') => {
    this.setLoading(true)

    const [createNewTermError] = await cError(this.createNewTerm(term, captcha))
    if (createNewTermError) {
      this.setLoading(false)
      return
    }

    const [getHasCourseTermsError] = await cError(this.getHasCourseTerms())
    this.setLoading(false)
    if (getHasCourseTermsError) return

    this.props.setCurrentTerm(term)

    this.setLoading(false)
    showToast({
      title: '成功创建学期',
      icon: 'success',
      complete: () => {
        Taro.navigateBack()
      }
    })

  }

  // 创建新学期
  createNewTerm = async (term: number, captcha = '') => {
    if (term === undefined) return
    const reqData = { term, captcha }

    const [err, res] = await cError(request({
      url: '/api/hrbust/updateCourse',
      data: reqData
    }))

    const { status } = res

    if (status === 404) {
      Taro.showToast({
        title: '课表为空',
        image: infoIcon,
        duration: 1000
      })
      return Promise.reject('课表为空')
    }

    // 用户名密码错误需要重新登录
    if (status === 400006) {
      Taro.showModal({
        title: '账号密码错误',
        content: '可能是您近期更改教务在线密码了，是否重新登录？',
        success(r) {
          if (r.confirm) {
            Taro.reLaunch({
              url: routes.login
            })
            // console.log('用户点击确定')
          } else if (r.cancel) {
            // console.log('用户点击取消')
            Taro.switchTab({
              url: routes.index
            })
          }
        }
      })
      return Promise.reject('账号密码错误')
    }

    // 登录失效，需要输入验证码
    if (res.status === 400005) {
      this.showCaptchaModal(res.data.captcha)
      return Promise.reject('登录失效，需要输入验证码')
    }

    // 错误验证码
    if (res.status === 400001) {
      showToast({
        title: '验证码输入错误，请重新输入',
        complete: () => {
          this.showCaptchaModal(res.data.captcha)
        }
      })
      return Promise.reject('验证码输入错误，请重新输入')
    }

    if (err) {
      Taro.showToast({
        title: '抓取课表失败',
        image: errorIcon,
        duration: 1000
      })
      return Promise.reject('抓取课表失败')
    }

    return Promise.resolve(res)
  }

  // setTerm (event) {
  //   this.methods.setTempTerm(event.currentTarget.dataset.termid)
  // }

  getHasCourseTerms = async () => {
    const [err, res] = await cError(request({
      url: '/api/hrbust/getHasCourseTerms'
    }))
    if (err) {
      this.setLoading(false)
      Taro.showToast({
        title: '获取学期列表失败',
        image: errorIcon,
        duration: 1000
      })
      return Promise.reject('获取学期列表失败')
    }

    this.setState({
      hasCourseTerms: res.data
    })
  }

  // 验证码弹窗确认
  onCaptchaModalSubmit = async (captcha: string) => {
    this.setState({
      isShowCaptchaModal: false,
    })
    await this.createNewTermHandler(this.chooseTerm, captcha)
    this.getHasCourseTerms()
  }

  // 同步课程表
  syncCourse = async (captcha = '') => {
    this.setLoading(true)

    const [createNewTermError] = await cError(this.createNewTerm(this.props.currentTerm, captcha))

    this.setLoading(false)
    if (createNewTermError) {
      return
    }
  }

  // 展示验证码弹窗
  showCaptchaModal = (captcha: string) => {
    this.setState({
      captchaImage: captcha,
      isShowCaptchaModal: true,
    })
  }

  render () {
    const { loading, hasCourseTerms, captchaImage, isShowCaptchaModal } = this.state
    const { currentTerm: choiceTerm } = this.props
    console.log(hasCourseTerms, 'hasCourseTerms')
    if (loading) {
      return <Loading loading />
    }
    return (
      <View className="course-term-page">
        <CaptchaModal captchaImage={captchaImage} onSubmit={this.onCaptchaModalSubmit} isOpened={isShowCaptchaModal}></CaptchaModal>
        <View className="container">
          {
            Object.keys(hasCourseTerms).map((index) => {
              const item = hasCourseTerms[index]
              return <View className="grade" key={index}>
                {
                  item.first == 1 && <View className="term-card" data-termid={+index * 2} onClick={this.setTerm}>
                    <View className="text">{this.termMap[index]}第1学期</View>
                    <View className="icon">
                      {
                        choiceTerm == +index * 2 && <Image className="check" src={checkIcon}></Image>
                      }
                    </View>
                  </View>
                }
                {
                  item.second == 1 && <View className="term-card" data-termid={+index * 2 + 1} onClick={this.setTerm}>
                    <View className="text">{this.termMap[index]}第2学期</View>
                    <View className="icon">
                      {
                        choiceTerm == +index * 2 + 1 && <Image className="check" src={checkIcon}></Image>
                      }
                    </View>
                  </View>
                }
              </View>
            })
          }
          <Picker mode="selector" rangeKey="label" value={this.chooseTerm} onChange={this.changeTerm} range={this.terms}>
            <View className="button">+ 创建新学期</View>
          </Picker>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state: IRootState) => ({
  user: state.user,
  currentTerm: state.user.currentTerm
})


const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ setCurrentTerm }, dispatch)

export default connect<PropsFromState, PropsFromDispatch, PageOwnProps>(mapStateToProps, mapDispatchToProps)(CourseTerm)
