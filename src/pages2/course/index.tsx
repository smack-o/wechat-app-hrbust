import React, { Component } from 'react'
import { connect } from 'react-redux'
import Taro from '@tarojs/taro'
import { View, Text, Button, Picker, Ad, Navigator } from '@tarojs/components'
import { IRootState } from '@/types'
import { routes } from '@/utils/router'
import request from '@/utils/request'
import { cError, showToast } from '@/utils'
import { Loading, CaptchaModal } from '@/components'
import { getWeekAndTerm } from '@/services/week'
import infoIcon from '@/assets/icon/icon_info.png'
import errorIcon from '@/assets/icon/error_icon.png'
import { setCurrentTerm } from '@/redux/actions/user'
import { Dispatch, bindActionCreators } from 'redux'

// images
import './index.less'

type PropsFromState = ReturnType<typeof mapStateToProps>

type PropsFromDispatch = ReturnType<typeof mapDispatchToProps>

type PageOwnProps = {}

type PageState = {
  loading: boolean
  slectedWeek: number
  thisWeek: number
  thisWeekNum: number
  nowDayIndex: number
  // termId: number,
  courseData: any[]
  // detailData: any[],
  unplanCourse: any[]
  // detailOpen: boolean,
  selectOpen: boolean
  // currentTerm: number,
  isShowCaptchaModal: boolean
  captchaImage: string
}

let thisWeekStorage = Taro.getStorageSync('course:week') || 3

type IProps = PropsFromState & PropsFromDispatch & PageOwnProps

let interstitialAd: Taro.InterstitialAd
class Course extends Component<IProps, PageState> {
  state: Readonly<PageState> = {
    loading: false,
    slectedWeek: thisWeekStorage ? thisWeekStorage - 1 : 0,
    thisWeek: thisWeekStorage || 1,
    thisWeekNum: thisWeekStorage || 1,
    nowDayIndex: new Date().getDay(),
    // termId: 0,
    courseData: [],
    unplanCourse: [],
    selectOpen: false,
    // currentTerm: 0,
    isShowCaptchaModal: false,
    captchaImage: '',
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentTerm !== nextProps.currentTerm) {
      this.getCourseHandel(nextProps.currentTerm)
    }
  }

  courseCardStyleMap = Array.from(new Array(14)).map((_, index) => {
    return 'class' + (index + 1)
  })

  // 周
  weeks = Array.from(new Array(25), (_, index) => index + 1)
  // 用户信息
  userInfo: any = {}
  // 学期
  terms = [
    '大一 第1学期',
    '大一 第2学期',
    '大二 第1学期',
    '大二 第2学期',
    '大三 第1学期',
    '大三 第2学期',
    '大四 第1学期',
    '大四 第2学期',
    '大五 第1学期',
    '大五 第2学期',
  ]
  dayNum = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  time = [
    ['1', '2'],
    ['3', '4'],
    ['5', '6'],
    ['7', '8'],
    ['9', '10'],
  ]
  month = new Date().getMonth() + 1
  unplanCourseTitle = [
    '课程名称',
    '任课教师',
    '合班',
    '上课周次',
    '上课时间',
    '上课地点',
  ]

  getTime = () => {
    const time = [
      ['1', '2'],
      ['3', '4'],
      ['5', '6'],
      ['7', '8'],
      ['9', '10'],
    ]
    if (this.state.courseData.length > 10) {
      time.push(['11', '12'])
      return time
    }
    return time
  }
  timeList = () => {
    const currentTerm = +this.props.currentTerm
    // 大一
    if (currentTerm === 0 || currentTerm === 1) {
      return [
        ['08:00', '09:25'],
        ['09:50', '11:15'],
        ['13:30', '14:55'],
        ['15:30', '16:55'],
        ['18:10', '19:35'],
        ['19:50', '21:15'],
      ]
    }

    // 大二
    if (currentTerm === 2 || currentTerm === 3) {
      return [
        ['08:05', '09:30'],
        ['10:10', '11:35'],
        ['13:35', '15:00'],
        ['15:45', '17:10'],
        ['18:15', '19:40'],
        ['19:55', '21:20'],
      ]
    }

    // 大三
    if (currentTerm === 4 || currentTerm === 5) {
      return [
        ['08:10', '09:35'],
        ['10:30', '11:55'],
        ['13:40', '15:05'],
        ['16:00', '17:25'],
        ['18:20', '19:45'],
        ['20:00', '21:25'],
      ]
    }

    return [
      ['08:15', '09:40'],
      ['10:50', '12:15'],
      ['13:45', '15:10'],
      ['16:15', '17:40'],
      ['18:25', '19:50'],
      ['20:05', '21:30'],
    ]
  }

  async onLoad() {
    // 在页面onLoad回调事件中创建插屏广告实例
    interstitialAd = Taro.createInterstitialAd({
      adUnitId: 'adunit-167f2a17e8f9ecc4',
    })
    interstitialAd.onLoad(() => {})
    interstitialAd.onError(() => {})
    interstitialAd.onClose(() => {})

    // 分享
    Taro.showShareMenu({
      withShareTicket: true,
    })

    const username = this.props.user.studentInfo.username
    //  || '1705030215'
    // 未登陆跳转
    if (!username) {
      return Taro.reLaunch({ url: routes.index })
    }

    // 获取storage数据
    const userInfo = Taro.getStorageSync(`course:${username}`)

    if (userInfo) {
      this.userInfo = userInfo || {}
      this.props.setCurrentTerm(this.userInfo.term)
    }

    this.setLoading(true)

    // 获取当前周数、以及学期数
    // TODO: 优化 优先本地取 term 和 week
    this.getWeekAndTerm()

    const course = this.userInfo.course
    const unplanCourse = this.userInfo.unplanCourse
    if (course) {
      // storage 存在课程数据，直接渲染
      this.setState({
        courseData: course,
        unplanCourse: unplanCourse,
      })
      this.setLoading(false)
    } else {
      // storage不存在课程数据，发送请求，重新获取，并存入storage
      this.getCourseHandel(this.props.currentTerm)
    }
  }

  onShow() {
    // 在适合的场景显示插屏广告
    if (interstitialAd) {
      interstitialAd.show().catch((err) => {
        console.log(err)
      })
    }
  }

  // 下拉同步课表
  async onPullDownRefresh() {
    this.syncCourse()
    Taro.stopPullDownRefresh()
  }

  // 同步课程表
  syncCourse = async (captcha = '') => {
    this.setLoading(true)
    // this.selectOpen = false
    this.setState({
      selectOpen: false,
    })

    const [createNewTermError] = await cError(
      this.createNewTerm(this.props.currentTerm, captcha)
    )

    this.setLoading(false)
    if (createNewTermError) {
      return
    }

    await this.getCourseHandel(this.props.currentTerm)
  }

  // 创建新学期
  createNewTerm = async (term: number, captcha = '') => {
    if (term === undefined) return
    const reqData = { term, captcha }

    const [err, res] = await cError(
      request({
        url: '/api/hrbust/updateCourse',
        data: reqData,
      })
    )

    const { status } = res

    if (status === 404) {
      Taro.showToast({
        title: '课表为空',
        image: infoIcon,
        duration: 1000,
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
              url: routes.login,
            })
            // console.log('用户点击确定')
          } else if (r.cancel) {
            // console.log('用户点击取消')
            Taro.switchTab({
              url: routes.index,
            })
          }
        },
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
        },
      })
      return Promise.reject('验证码输入错误，请重新输入')
    }

    if (err) {
      Taro.showToast({
        title: '抓取课表失败',
        image: errorIcon,
        duration: 1000,
      })
      return Promise.reject('抓取课表失败')
    }

    return Promise.resolve(res)
  }

  // 验证码弹窗确认
  onCaptchaModalSubmit = (captcha: string) => {
    this.setState({
      isShowCaptchaModal: false,
    })
    this.syncCourse(captcha)
  }

  // 展示验证码弹窗
  showCaptchaModal = (captcha: string) => {
    this.setState({
      captchaImage: captcha,
      isShowCaptchaModal: true,
    })
  }

  // 获取周、学期
  async getWeekAndTerm() {
    const [err, res] = await cError(getWeekAndTerm(this.userInfo.term))

    if (err) {
      Taro.showModal({
        content: '服务器故障，获取周数错误，请稍后重试。',
        showCancel: false,
        success: () => {
          Taro.reLaunch({ url: routes.index })
        },
      })
      return Promise.reject('获取周数错误')
    }

    const { week } = res

    // 设置当前周数，如果教务在线获取的周数超过25周，当前周数设置为25
    const MAX_WEEK_NUM = 25
    const isExceed = week > MAX_WEEK_NUM
    const thisWeek = isExceed ? MAX_WEEK_NUM : week
    const slectedWeek = isExceed ? MAX_WEEK_NUM - 1 : week - 1

    this.setState({
      thisWeek: thisWeek,
      thisWeekNum: thisWeek,
      slectedWeek: slectedWeek,
      // currentTerm: term,
    })

    Taro.setStorage({ key: 'course:week', data: thisWeek })
    Taro.setStorage({ key: 'course:week.timestamp', data: Date.now() })
    return Promise.resolve()
  }

  // 选择第几周
  changeWeek = (event: TaroBaseEventOrig) => {
    this.setState({
      slectedWeek: event.detail.value,
      thisWeek: parseInt(String(this.weeks[event.detail.value])),
      selectOpen: false,
    })
  }

  // 右上角加号，更新学期
  selectListSwitch = () => {
    this.setState({
      selectOpen: !this.state.selectOpen,
    })
  }

  setLoading = (loading: boolean) => {
    this.setState({ loading })
  }

  // 获取课表
  getCourseHandel = async (term) => {
    // console.log(term)
    this.setLoading(true)
    this.setState({
      selectOpen: false,
    })

    const [getCourseError] = await cError(this.getCourse(term))
    this.setLoading(false)
    if (getCourseError) {
      if (getCourseError.message === '课表为空') {
        Taro.showToast({
          title: '课表为空',
          image: infoIcon,
          duration: 1000,
        })
      }
      return
    }
  }

  // 获取课表接口处理
  getCourse = async (term) => {
    const [err, res] = await cError(
      request({
        url: '/api/hrbust/course',
        data: { term },
      })
    )

    if (err) {
      Taro.showToast({
        title: '获取课表失败',
        image: errorIcon,
        duration: 1000,
      })
      return Promise.reject('获取课表失败')
    }

    const { course: getCourseData, courseTermId, unplanCourse } = res.data
    this.setState({
      // termId: courseTermId,
      unplanCourse: unplanCourse || [],
    })
    // const getCourseData = res.data.data.course
    // 课表为空的话，提示
    if (!getCourseData && !unplanCourse) {
      Taro.showModal({
        content: '该学期未查询到课表，请创建该学期',
        showCancel: false,
        success: () => {
          Taro.navigateTo({ url: routes.courseTerm })
        },
      })

      return
    }

    // 处理返回数据
    let courseList: any[] = []
    let courseIdList = {}
    let courseCardStyleIndex = 0

    for (let i = 0; i < 10; i++) {
      courseList[i] = []
    }

    getCourseData.forEach((courseItem) => {
      if (!courseIdList[courseItem.courseId]) {
        let cardClassName = this.courseCardStyleMap[
          courseCardStyleIndex % this.courseCardStyleMap.length
        ]
        courseIdList[courseItem.courseId] = cardClassName
        courseItem.class = cardClassName
        courseCardStyleIndex++
      } else {
        courseItem.class = courseIdList[courseItem.courseId]
      }

      // 兼容 12 节课的情况
      if (!courseList[courseItem.sectionstart]) {
        courseList[courseItem.sectionstart] = []
      }
      courseList[courseItem.sectionstart].push(courseItem)
    })

    this.setState({
      courseData: courseList,
    })

    // 学期数、课程、未安排课程存入Storage
    const userInfo = { term, course: courseList, unplanCourse }
    this.userInfo = userInfo
    Taro.setStorage({
      key: `course:${this.props.user.studentInfo.username}`,
      data: userInfo,
    })

    Taro.showToast({ title: '获取课表成功', icon: 'success', duration: 1000 })
    return Promise.resolve()
  }

  // 课程详情
  detailHandler = (dayIndex, timeIndex) => {
    Taro.navigateTo({
      url: `${routes.courseDetail}?dayIndex=${dayIndex}&timeIndex=${timeIndex}&thisWeek=${this.state.thisWeek}`,
    })
  }

  currentWeekList() {
    let week
    const { thisWeekNum, slectedWeek } = this.state
    if (thisWeekNum === 25) {
      if (slectedWeek === 24) {
        week = 0
      } else {
        week = +slectedWeek + 1
      }
    } else {
      week = slectedWeek - thisWeekNum + 1
    }
    const aDayTimeStamp = 24 * 60 * 60 * 1000
    const aWeekTimeStamp = 7 * aDayTimeStamp
    const timeStamp = Date.now() + week * aWeekTimeStamp
    const currentDay = new Date(timeStamp).getDay()
    const month =
      new Date(
        timeStamp + ((aDayTimeStamp * (currentDay + 6)) % 7)
      ).getMonth() + 1

    const days = Array.from(new Array(7)).map((_, i) => {
      return new Date(
        timeStamp + aDayTimeStamp * (i - ((currentDay + 6) % 7))
      ).getDate()
    })

    return {
      days,
      month,
    }
  }

  currentPart() {
    const date = new Date()
    const hour = date.getHours()
    const minute =
      date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    const dateNum = parseInt('' + hour + minute)

    if (dateNum >= 600 && dateNum <= 950) {
      return 0
    } else if (dateNum > 950 && dateNum <= 1230) {
      return 1
    } else if (dateNum > 1230 && dateNum <= 1520) {
      return 2
    } else if (dateNum > 1520 && dateNum <= 1730) {
      return 3
    } else if (dateNum > 1730 && dateNum <= 1850) {
      return 4
    } else {
      return -1
    }
  }

  render() {
    const {
      slectedWeek,
      thisWeekNum,
      // currentTerm,
      selectOpen,
      nowDayIndex,
      unplanCourse,
      courseData,
      thisWeek,
      loading,
      isShowCaptchaModal,
      captchaImage,
    } = this.state

    const { currentTerm } = this.props

    const currentWeekList = this.currentWeekList()
    const currentPart = this.currentPart()
    const timeList = this.timeList()
    const time = this.getTime()

    if (loading) {
      return <Loading loading />
    }
    return (
      <View className="course-page">
        <CaptchaModal
          captchaImage={captchaImage}
          onSubmit={this.onCaptchaModalSubmit}
          isOpened={isShowCaptchaModal}
        ></CaptchaModal>
        <View className="wrap">
          <View className="refresh">更新课表请下拉刷新</View>
          <View className="picker-wrapper">
            <View className="wrapper-left"></View>
            <Picker
              mode="selector"
              onChange={this.changeWeek}
              value={slectedWeek}
              range={this.weeks}
            >
              <View>
                <View>
                  第
                  <text className="num">
                    {' '}
                    {this.weeks.length > 0 ? this.weeks[slectedWeek] : 0}{' '}
                  </text>
                  周{this.weeks[slectedWeek] == thisWeekNum && '(当前)'}
                </View>
                <View>{this.terms[currentTerm]}</View>
              </View>
            </Picker>
            <View
              className={`wrapper-right ${selectOpen ? 'rotate' : ''}`}
              onClick={this.selectListSwitch}
            >
              +
            </View>
          </View>
          <View className="tips">
            *每节课上课时间仅供参考，具体时间以不同年级实际情况为准
          </View>
          <View className="course-header">
            <View className="item">{currentWeekList.month}月</View>
            {this.dayNum.map((dayItem, dayIndex) => {
              return (
                <View
                  className={`item ${
                    dayIndex + 1 === nowDayIndex ? 'now-day' : ''
                  }`}
                  key={dayIndex}
                >
                  <View>{dayItem}</View>
                  <View>{currentWeekList.days[dayIndex]}日</View>
                </View>
              )
            })}
          </View>
          <View className="course-body">
            {time.map((timeItem, timeIndex) => {
              return (
                <View className="line-item" key={timeItem[0]}>
                  {[0, 1, 2, 3, 4, 5, 6, 7].map((_, dayIndex) => {
                    if (dayIndex === 0) {
                      // <!-- 左侧时间列表 -->
                      return (
                        <View
                          className={`time item ${
                            currentPart === timeIndex ? 'now-time' : ''
                          }`}
                          key={dayIndex}
                        >
                          <View className="time-item">
                            <View>
                              第{timeItem[0]}/{timeItem[1]}节
                            </View>
                          </View>
                          <View className="time-item-num">
                            <View>{timeList[timeIndex][0]}</View>
                            <View>~</View>
                            <View>{timeList[timeIndex][1]}</View>
                          </View>
                        </View>
                      )
                    }
                    // <!-- 课表内容 -->
                    return (
                      <View
                        className="item"
                        onClick={() =>
                          this.detailHandler(dayIndex, timeItem[0])
                        }
                        key={dayIndex}
                      >
                        <View className="item-content">
                          {courseData.length > 0 &&
                            courseData[timeItem[0]].map((item, index) => {
                              if (item.day != dayIndex) {
                                return null
                              }
                              if (+item.period[thisWeek] === 1) {
                                return (
                                  <View
                                    key={index}
                                    className={`this-week ${item.class} ${
                                      item.day === nowDayIndex &&
                                      (currentPart + 1) * 2 === item.sectionend
                                        ? 'use-border'
                                        : ''
                                    }`}
                                  >
                                    <Text>
                                      《{item.name}》@{item.locale}
                                    </Text>
                                  </View>
                                )
                              }

                              return (
                                <View className="no-this-week" key={index}>
                                  <text>
                                    《{item.name}》@{item.locale}
                                  </text>
                                </View>
                              )
                            })}
                        </View>
                      </View>
                    )
                  })}
                </View>
              )
            })}
          </View>

          {unplanCourse.length > 0 && (
            <View className="unplan-course">
              <View className="title">没有具体上课时间或地点的课程</View>
              <View className="content">
                <View className="content-header">
                  {this.unplanCourseTitle.map((item, index) => {
                    return <View key={index}>{item}</View>
                  })}
                </View>
                {unplanCourse.map((unplanCourseObj, i) => {
                  return (
                    <View className="unplan-item" key={i}>
                      {Object.keys(unplanCourseObj).map((key) => {
                        return (
                          <View key={key}>
                            <Text className="text">{unplanCourseObj[key]}</Text>
                          </View>
                        )
                      })}
                    </View>
                  )
                })}
              </View>
            </View>
          )}

          {/* <!-- SelectList --> */}
          {selectOpen && (
            <View className="select-list">
              <View
                className="empty-top"
                onClick={this.selectListSwitch}
              ></View>
              <View className="select-wrapper">
                <Navigator url={routes.courseTerm} className="select-item">
                  <View className="select-text">选择学期</View>
                  <View className="select-data">{this.terms[currentTerm]}</View>
                  <View className="select-arrow"></View>
                </Navigator>
                <Picker
                  mode="selector"
                  onChange={this.changeWeek}
                  value={slectedWeek}
                  range={this.weeks}
                >
                  <View className="select-item">
                    <View className="select-text">选择周数</View>
                    <View className="select-data">
                      第
                      <Text className="num">
                        {' '}
                        {this.weeks.length > 0
                          ? this.weeks[slectedWeek]
                          : 0}{' '}
                      </Text>
                      周{this.weeks[slectedWeek] == thisWeekNum && '(当前)'}
                    </View>
                    <View className="select-arrow"></View>
                  </View>
                </Picker>
                <Button type="primary" onClick={() => this.syncCourse()}>
                  同步教务在线课表
                </Button>
              </View>
              <View
                className="empty-bottom"
                onClick={this.selectListSwitch}
              ></View>
            </View>
          )}
          <Ad className="advertising" unitId="adunit-f1ef7db925a525a8"></Ad>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state: IRootState) => ({
  user: state.user,
  currentTerm: state.user.currentTerm,
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ setCurrentTerm }, dispatch)

export default connect<PropsFromState, PropsFromDispatch, PageOwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(Course)
