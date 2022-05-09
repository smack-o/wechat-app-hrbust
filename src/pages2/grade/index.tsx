import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Ad,
  Image,
  Text,
  Picker,
  Button,
  ScrollView
} from '@tarojs/components'
import Taro from '@tarojs/taro'
import { IRootState } from '@/types'
import { Dispatch, bindActionCreators } from 'redux'
import { getGrades } from '@/redux/actions/user'
import { Loading, CaptchaModal } from '@/components'
import { cError, showToast, dateFormat } from '@/utils'
import { routes, goWebviewPage, goPage } from '@/utils/router'

import pingguImg from './res/pinggu.jpg'
import tipLogoIcon from './res/tip_logo.png'
import tipArrowIcon from './res/tip_arrow.png'
import tipButtonIcon from './res/tip_button_icon.png'

import './index.less'

type PropsFromState = ReturnType<typeof mapStateToProps>

type PropsFromDispatch = ReturnType<typeof mapDispatchToProps>

type PageOwnProps = {}

type PageState = {
  loading: boolean
  captchaImage: string
  isShowCaptchaModal: boolean
  year: number
  term: number
  showEmpty?: boolean
  needComments: boolean
  AVERAGE_GPA?: string
  AVERAGE_GRADE?: string
  OBLIGATORY_AVERAGE_GPA?: string
  showGDP?: boolean
  myGrades: any[]
  maxRemarkLength: number
  isFirstFull: boolean
}

type IProps = PropsFromState & PropsFromDispatch & PageOwnProps

const passSignStyle = {
  及格: '#cccccc',
  及格标志: '#999999',
  无成绩: '#e36363',
  不及格: '#e36363'
}

const getTerms = () => {
  let terms: string[] = []
  let date = new Date()
  for (let i = date.getFullYear(); i >= date.getFullYear() - 5; i -= 1) {
    terms.push(`${i} 秋`)
    terms.push(`${i} 春`)
  }
  return terms
}

const terms = getTerms()

class Grade extends Component<IProps, PageState> {
  state: Readonly<PageState> = {
    loading: false,
    captchaImage: '',
    isShowCaptchaModal: false,
    showEmpty: false,
    needComments: false,
    myGrades: [
      {
        gradeName: '课程',
        mark: '成绩',
        passSign: '及格标志',
        credit: '学分',
        gpa: 'GPA',
        courseAttribute: '选课属性',
        courseRemark: '备注',
        courseCharacter: '考试性质'
      }
    ],
    maxRemarkLength: 0,
    year: +dateFormat(new Date(), 'yyyy'),
    term: 1,
    isFirstFull: (() => {
      const hasFullGrade = Taro.getStorageSync('grade:hasFullGrade')
      if (!hasFullGrade) {
        Taro.setStorageSync('grade:hasFullGrade', true)
      }
      return !hasFullGrade
    })()
  }

  async onLoad() {
    let time = new Date()
    // time.setFullYear(2008,1,9);
    const natureYear = +dateFormat(time, 'yyyy')
    const computedDate = +dateFormat(time, 'Mdd')
    let year: number = natureYear
    let term: number = 1
    if (computedDate <= 220) {
      year = natureYear - 1
      term = 2
    } else if (computedDate > 220 && computedDate <= 820) {
      year = natureYear
      term = 1
    } else if (computedDate > 820) {
      year = natureYear
      term = 2
    }
    this.setState({
      year,
      term
    })

    await this.getList(year, term)
  }

  // 拉取数据、错误处理等
  getList = async (year: number, term: number, captcha = '') => {
    this.setLoading(true)
    const [err, res] = await cError(
      this.props.getGrades(year - 1980, term, captcha)
    )
    this.setLoading(false)
    if (err && err.status === 400) {
      this.setState({
        needComments: true
      })
      return
    }

    // 登录失效，需要输入验证码
    if (res.status === 400005) {
      this.showCaptchaModal(res.data.captcha)
      return
    }

    // 错误验证码
    if (res.status === 400001) {
      showToast({
        title: '验证码输入错误，请重新输入',
        icon: 'none',
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
        success(mRes) {
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

    if (!this.props.grades?.grades?.length) {
      this.setState({
        showEmpty: true
      })
    } else {
      this.setState({
        showEmpty: false
      })

      const {
        AVERAGE_GPA,
        AVERAGE_GRADE,
        OBLIGATORY_AVERAGE_GPA,
        grades
      } = this.props.grades
      let maxRemarkLength = 0
      const myGrades = grades.map(item => {
        let itemObj = {
          gradeName: item.courseName ? item.courseName : '--',
          mark: item.grade ? item.grade : '--',
          passSign: item.passFlag ? item.passFlag : '--',
          credit: item.credit ? item.credit : '--',
          gpa: item.gpa ? item.gpa : '--',
          courseAttribute: item.courseAttribute ? item.courseAttribute : '--',
          courseRemark: item.courseRemark ? item.courseRemark : '--',
          courseCharacter: item.courseCharacter ? item.courseCharacter : '--'
        }

        maxRemarkLength =
          itemObj.courseRemark.length > maxRemarkLength
            ? itemObj.courseRemark.length
            : maxRemarkLength
        return itemObj
      })

      myGrades.unshift({
        gradeName: '课程',
        mark: '成绩',
        passSign: '及格标志',
        credit: '学分',
        gpa: 'GPA',
        courseAttribute: '选课属性',
        courseRemark: '备注',
        courseCharacter: '考试性质'
      })

      const nextState: any = {
        AVERAGE_GPA: `${AVERAGE_GPA === 'NaN' ? '--' : AVERAGE_GPA}`,
        AVERAGE_GRADE: `${AVERAGE_GRADE === 'NaN' ? '--' : AVERAGE_GRADE}`,
        OBLIGATORY_AVERAGE_GPA: `${
          OBLIGATORY_AVERAGE_GPA === 'NaN' ? '--' : OBLIGATORY_AVERAGE_GPA
        }`,
        myGrades,
        maxRemarkLength
      }

      nextState.showGDP = !(
        nextState.AVERAGE_GPA === '--' &&
        nextState.AVERAGE_GRADE === '--' &&
        nextState.OBLIGATORY_AVERAGE_GPA === '--'
      )

      this.setState(nextState)
    }
  }

  // loading
  setLoading = (loading: boolean) => this.setState({ loading })

  // 展示验证码弹窗
  showCaptchaModal = (captcha: string) => {
    this.setState({
      captchaImage: captcha,
      isShowCaptchaModal: true
    })
  }

  // 验证码弹窗确认
  onCaptchaModalSubmit = (captcha: string) => {
    this.setState({
      isShowCaptchaModal: false
    })
    const { year, term } = this.state
    this.getList(year, term, captcha)
  }

  // 跳转到弹窗页面
  toPingGu = () => {
    goWebviewPage(
      'https://mp.weixin.qq.com/s?__biz=MzUwOTk3NTEzNg==&mid=2247483740&idx=1&sn=f65b45ddfe6e6429a54864f4f7074d4c&chksm=f90b4e53ce7cc7456f6ec8d3e8c8db309092001f62f51fe1df89610ef86ebbcac543c734ec50&token=2073460005&lang=zh_CN#rd',
      '去评教'
    )
  }

  // 切换学期
  changeTerm = e => {
    const value = terms[e.detail.value]
    const year = +value.split(' ')[0]
    const term = value.split(' ')[1] === '春' ? 1 : 2
    this.setState({
      year,
      term
    })
    this.getList(year, term)
  }

  // 关闭tip提示
  closeTipModal = () => {
    this.setState({
      isFirstFull: false
    })
  }

  // 成绩分享
  onGradeShare = () => {
    const { AVERAGE_GPA, myGrades } = this.state
    // TODO: change usl
    Taro.setStorageSync(
      'grade:data',
      JSON.stringify({
        grade: myGrades,
        gpa: AVERAGE_GPA
      })
    )
    goPage(routes.gradeShare)
  }

  render() {
    const {} = this.props
    const {
      loading,
      captchaImage,
      isShowCaptchaModal,
      needComments,
      myGrades = [],
      showEmpty,
      AVERAGE_GPA,
      AVERAGE_GRADE,
      OBLIGATORY_AVERAGE_GPA,
      showGDP,
      year,
      term = '',
      maxRemarkLength,
      isFirstFull
    } = this.state

    if (needComments) {
      return (
        <View className="grade-page">
          <View className="pinggu-wrapper">
            <View className="pinggu" onClick={this.toPingGu}>
              <Image className="pinggu_image" src={pingguImg} mode="widthFix" />
              <View className="color-blue">查看如何评教</View>
              <View>{needComments}</View>
              <Text userSelect className="pinggu__info">
                请您去教务在线官网进行评估课程
              </Text>
            </View>
            <View>
              <Text userSelect className="pinggu__info">
                教务在线地址：http://jwzx.hrbust.edu.cn
              </Text>
            </View>
          </View>
        </View>
      )
    }

    return (
      <View className="grade-page">
        <CaptchaModal
          captchaImage={captchaImage}
          onSubmit={this.onCaptchaModalSubmit}
          isOpened={isShowCaptchaModal}
        ></CaptchaModal>
        <Loading loading={loading}></Loading>

        <View className="container">
          <View className="selecter">
            {/* @ts-ignore */}
            <Picker
              className="picker-year"
              onChange={this.changeTerm}
              range={terms}
            >
              <View className="select-button">
                <Text className="select-text">
                  学期{year} {term === 1 ? '春' : '秋'}(点击切换)
                </Text>
              </View>
            </Picker>
            {AVERAGE_GPA &&
              AVERAGE_GPA !== '--' &&
              myGrades &&
              myGrades.length >= 1 && (
                <Button className="extra-button" onClick={this.onGradeShare}>
                  生成成绩单
                </Button>
              )}
          </View>
          {showEmpty && (
            <View className="empty">
              <Text className="select-text">还没有这学期的成绩</Text>
            </View>
          )}
          {!showEmpty && (
            <View className="grade-list">
              {showGDP && (
                <View className="total-wrapper">
                  <View className="total-item">
                    <Text className="num-text">{AVERAGE_GRADE}</Text>
                    <Text className="total-text">加权平均分</Text>
                  </View>
                  <View className="total-item">
                    <Text className="num-text">{AVERAGE_GPA}</Text>
                    <Text className="total-text">平均学分绩点GPA(全部)</Text>
                  </View>
                  <View className="total-item">
                    <Text className="num-text">{OBLIGATORY_AVERAGE_GPA}</Text>
                    <Text className="total-text">平均学分绩点GPA(仅必修)</Text>
                  </View>
                </View>
              )}
              <View className="grade-list-wrapper">
                <View className="grade-title-list">
                  {myGrades.map((item, index) => {
                    return (
                      <View
                        key={index}
                        className={`title-row ${
                          index % 2 === 0 ? 'list-row-even' : 'list-row-odd'
                        }`}
                        style={
                          index === 0
                            ? 'color: #999999; background-color: #fff; padding-top: 40rpx'
                            : 'color: #333333'
                        }
                      >
                        <View className="list-item gradeName">
                          <Text className="list-text">{item.gradeName}</Text>
                        </View>
                      </View>
                    )
                  })}
                </View>
                <ScrollView scroll-x="true" className="grade-list">
                  {myGrades.map((item, index) => {
                    return (
                      <View
                        key={index}
                        className={`list-row ${
                          index % 2 === 0 ? 'list-row-even' : 'list-row-odd'
                        }`}
                        style={`color: ${
                          index === 0 ? '#999999' : '#333333'
                        };background-color: ${index === 0 &&
                          '#fff'};padding-top:${index === 0 &&
                          '40rpx'};width: ${
                          maxRemarkLength > 8 ? '1700rpx' : '1450rpx'
                        };`}
                      >
                        <View
                          className={`list-item gradeName ${
                            index % 2 === 0 ? 'list-row-even' : 'list-row-odd'
                          }`}
                          style={index === 0 ? 'background-color: #fff' : ''}
                        >
                          <Text className="list-text">{item.gradeName}</Text>
                        </View>
                        <View className="list-item mark">
                          <Text className="list-text">{item.mark}</Text>
                        </View>
                        <View className="list-item passSign">
                          <Text
                            className="list-text"
                            style={`color:${passSignStyle[item.passSign]}`}
                          >
                            {item.passSign}
                          </Text>
                        </View>
                        <View className="list-item credit">
                          <Text className="list-text">{item.credit}</Text>
                        </View>
                        <View className="list-item gpa">
                          <Text className="list-text">{item.gpa}</Text>
                        </View>
                        <View className="list-item courseAttribute">
                          <Text className="list-text">
                            {item.courseAttribute}
                          </Text>
                        </View>
                        <View
                          className="list-item courseRemark"
                          style={
                            maxRemarkLength > 8
                              ? 'width: 360rpx; min-width: 360rpx'
                              : 'width: 110rpx; min-width: 110rpx'
                          }
                        >
                          <Text className="list-text">{item.courseRemark}</Text>
                        </View>
                        <View className="list-item courseCharacter">
                          <Text className="list-text">
                            {item.courseCharacter}
                          </Text>
                        </View>
                      </View>
                    )
                  })}
                </ScrollView>
              </View>
            </View>
          )}
        </View>

        {/* 新手引导 */}
        {isFirstFull && (
          <View className="tip-modal" onClick={this.closeTipModal}>
            <Image className="tip-logo" src={tipLogoIcon} mode="widthFix" />
            <Image className="tip-arrow" src={tipArrowIcon} mode="widthFix" />
            <Image className="tip-button" src={tipButtonIcon} mode="widthFix" />
          </View>
        )}
        <Ad className="advertising" unitId="adunit-764ee39c0d27492c"></Ad>
      </View>
    )
  }
}

const mapStateToProps = (state: IRootState) => ({
  grades: state.user.grades
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ getGrades }, dispatch)

export default connect<PropsFromState, PropsFromDispatch, PageOwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(Grade)
