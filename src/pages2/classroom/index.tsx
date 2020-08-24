import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { View, Text, Picker } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { IRootState } from '@/types'
import { UserState } from '@/redux/reducers/user'
import { Dispatch } from 'redux'
import { updateClassrooms } from '@/redux/actions/common'
import { Loading, CaptchaModal } from '@/components'
import { cError, showToast } from '@/utils'
import request from '@/utils/request'
import { routes } from '@/utils/router'

import './index.less'

type PropsFromState = {
  user: UserState
}

type PropsFromDispatch = {
  updateClassrooms: typeof updateClassrooms
}

type PageOwnProps = {
  changeLoading: (boolean) => void
}

type PageState = {
  loading: boolean
  captchaImage: string
  isShowCaptchaModal: boolean
  aids: { id: string, label: string }[],
  buildingids: { id: string, label: string }[],
  rooms: { id: string, label: string }[],
  whichweeks: { id: string, label: string }[],
  weeks: { id: string, label: string }[],
  choiceAidsIndex: number,
  choiceBuildingidsIndex: number,
  choiceRoomsIndex: number,
  choiceWhichweeksIndex: number,
  choiceWeeksIndex: number,
}

type IProps = PropsFromState & PropsFromDispatch & PageOwnProps

class QueryClassroom extends Component<IProps, PageState> {
  state: Readonly<PageState> = {
    loading: false,
    captchaImage: '',
    isShowCaptchaModal: false,
    aids: [],
    buildingids: [],
    rooms: [],
    whichweeks: [],
    weeks: [],
    choiceAidsIndex: -1,
    choiceBuildingidsIndex: -1,
    choiceRoomsIndex: -1,
    choiceWhichweeksIndex: -1,
    choiceWeeksIndex: -1,
  }

  pageNo = 1

  videoAd?: Taro.RewardedVideoAd

  loadAdError: boolean

  thisDayTimestamp: number

  thisWeek: number

  thisWeekNum: number

  async onLoad() {
    const videoAd = Taro.createRewardedVideoAd({
      adUnitId: 'adunit-edbb9cf449e6b124'
    })
    videoAd.onLoad(() => {})
    videoAd.onError((err) => {
      console.log('loadAdError', err)
      this.loadAdError = true
    })
    videoAd.onClose((res) => {
      // 用户点击了【关闭广告】按钮
      if (res && res.isEnded) {
        Taro.setStorageSync('classroom:thisDayTimeData', JSON.stringify({
          timestamp: this.thisDayTimestamp,
          times: -1
        }))
        // 正常播放结束，可以下发游戏奖励
      } else {
        // 播放中途退出，不下发游戏奖励
      }
    })
    this.videoAd = videoAd

    this.thisDayTimestamp = new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1

    Taro.showShareMenu({
      withShareTicket: true
    })
    await this.getWeekAndTerm()
    await this.roomschedulequery()

    // 设置当前周几
    const day = (new Date()).getDay() - 1

    this.setState({
      // 设置学期周数
      choiceWhichweeksIndex: this.thisWeek - 1,
      choiceWeeksIndex: day === -1 ? 6 : day
    })
  }

  async getWeekAndTerm () {
    Taro.showLoading({
      title: '加载中',
      mask: true
    })
    const [err, res] = await cError(request({ url: '/api/hrbust/week' }))
    Taro.hideLoading()

    if (err) return Promise.reject('获取周数错误')

    const { week: onlineWeek } = res.data

    // 设置当前周数，如果教务在线获取的周数超过25周，当前周数设置为25
    const MAX_WEEK_NUM = 25
    const isExceed = onlineWeek > MAX_WEEK_NUM
    this.thisWeek = this.thisWeekNum = isExceed ? MAX_WEEK_NUM : onlineWeek

    return Promise.resolve()
  }

  // loading
  setLoading = (loading: boolean) => this.setState({ loading })

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
    this.roomschedulequery({ captcha })
  }

  onChange = (name: string, event: TaroBaseEventOrig) => {
    // const index = `choice${name.replace(/( |^)[a-z]/g, (L) => L.toUpperCase())}Index`;
    // this[`choice${name.replace(/( |^)[a-z]/g, (L) => L.toUpperCase())}Index`] = event.detail.value
    const nextState = {
      [`choice${name.replace(/( |^)[a-z]/g, (L) => L.toUpperCase())}Index`]: event.detail.value
    } as PageState

    this.setState(nextState)

    // console.log(this.aids[this.choiceAidsIndex].label)
    if (name === 'aids' || name === 'buildingids' || name === 'rooms') {
      switch (name) {
        case 'aids':
          this.setState({
            choiceBuildingidsIndex: -1,
            choiceRoomsIndex: -1,
          })
          break
        case 'buildingids':
          this.setState({
            choiceRoomsIndex: -1,
          })
          break
        default:
          break
      }

      const { aids, choiceAidsIndex, buildingids, choiceBuildingidsIndex, rooms, choiceRoomsIndex } = this.state
      this.roomschedulequery({
        aid: aids[choiceAidsIndex] ? aids[choiceAidsIndex].id : '-1',
        buildingid: buildingids[choiceBuildingidsIndex] ? buildingids[choiceBuildingidsIndex].id : '-1',
        room: rooms[choiceRoomsIndex] ? aids[choiceRoomsIndex].id : '-1'
      })
    }
  }

  roomschedulequery = async (data?: { aid?: string, buildingid?: string, room?: string, captcha?: string }) => {
    Taro.showLoading({
      title: '加载中',
      mask: true
    })
    const [err, res] = await cError(request({ url: '/api/hrbust/roomschedulequery', data }))
    Taro.hideLoading()

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

    if (!err) {
      const { aids, buildingids, rooms, whichweeks, weeks } = res.data
      // this.aids = aids
      // this.buildingids = buildingids
      // this.rooms = rooms
      // this.whichweeks = whichweeks.map(week => {
      //   if (+week.label === +this.thisWeek) {
      //     return {
      //       ...week,
      //       label: week.label + '(本周)'
      //     }
      //   }
      //   return week
      // })

      this.setState({
        aids,
        buildingids,
        rooms,
        whichweeks: whichweeks.map(week => {
          if (+week.label === +this.thisWeek) {
            return {
              ...week,
              label: week.label + '(本周)'
            }
          }
          return week
        }),
        weeks,
      })
    }
  }

  onSubmit = () => {
    this.roomschedule()
  }

  async roomschedule() {
    const { choiceAidsIndex, choiceBuildingidsIndex, choiceWhichweeksIndex, choiceWeeksIndex } = this.state
    if (choiceAidsIndex < 0) {
      Taro.showToast({
        title: '请选择校区',
        icon: 'none'
      })
      return
    }
    if (choiceBuildingidsIndex < 0) {
      Taro.showToast({
        title: '请选择教学楼',
        icon: 'none'
      })
      return
    }
    if (choiceWhichweeksIndex < 0) {
      Taro.showToast({
        title: '请选择周数',
        icon: 'none'
      })
      return
    }

    if (choiceWeeksIndex < 0) {
      Taro.showToast({
        title: '请选择日期',
        icon: 'none'
      })
      return
    }

    // 广告逻辑
    let thisDayTimeData = Taro.getStorageSync('classroom:thisDayTimeData')
    if (thisDayTimeData) {
      thisDayTimeData = JSON.parse(thisDayTimeData)

      // 如果缓存时间已经小于当前时间清空缓存
      if (thisDayTimeData.timestamp < this.thisDayTimestamp) {
        Taro.removeStorageSync('classroom:thisDayTimeData')
        thisDayTimeData = undefined
      }
    }

    // 用户触发广告后，显示激励视频广告
    // console.log(this.videoAd, this.loadAdError, thisDayTimeData, thisDayTimeData.times >= 2)
    // if (this.videoAd && !this.loadAdError && thisDayTimeData && thisDayTimeData.times >= 2) {
    //   Taro.showModal({
    //     title: '是否观看广告',
    //     content: '每日前两次免费查询，观看完广告今日不限次数查询。（理工喵已经没钱恰饭啦，大家理解下哈~）',
    //     success: (res) => {
    //       if (res.confirm && this.videoAd) {
    //         this.videoAd.show().catch(() => {
    //         // 失败重试
    //           this.videoAd!.load().then(() => this.videoAd!.show()).catch(() => {
    //             console.log('激励视频 广告显示失败')
    //           })
    //         })
    //       } else if (res.cancel) {
    //         // console.log('用户点击取消')
    //       }
    //     }
    //   })
    //   return
    // }

    const dataKeys = ['aid', 'buildingid', 'room', 'whichweek', 'week']

    const data = dataKeys.reduce((pre, key) => {
      const index = this.state[`choice${key.replace(/( |^)[a-z]/g, (L) => L.toUpperCase())}sIndex`]
      if (index >= 0 && this.state[`${key}s`][index]) {
        pre[key] = this.state[`${key}s`][index].id
      }
      return pre
    }, {})

    // return

    // const data = {
    //   aid: this.aids[this.choiceAidsIndex] ? this.aids[this.choiceAidsIndex].id : -1,
    //   buildingid: this.buildingids[this.choiceBuildingidsIndex] ? this.buildingids[this.choiceBuildingidsIndex].id : -1,
    //   room: this.rooms[this.choiceRoomsIndex] ? this.aids[this.choiceRoomsIndex].id : -1,
    // }

    Taro.showLoading({
      title: '查询中',
      mask: true
    })
    const [err, res] = await cError(request({ url: '/api/hrbust/roomschedule', data }))
    Taro.hideLoading()
    if (!err) {
      // 如果有计数数据
      if (thisDayTimeData) {
        if (thisDayTimeData.times !== -1) {
          Taro.setStorageSync('classroom:thisDayTimeData', JSON.stringify({
            timestamp: this.thisDayTimestamp,
            times: thisDayTimeData.times + 1
          }))
        }
      } else {
        Taro.setStorageSync('classroom:thisDayTimeData', JSON.stringify({
          timestamp: this.thisDayTimestamp,
          times: 1
        }))
      }

      console.log(res.data.list, 'res.data.list')
      // 更新 redux
      await this.props.updateClassrooms(res.data.list)

      Taro.navigateTo({
        url: routes.classroomList
      })
    }
  }

  render () {
    const { loading, captchaImage, isShowCaptchaModal, aids, choiceAidsIndex, choiceBuildingidsIndex, buildingids, whichweeks, choiceWhichweeksIndex, weeks, choiceWeeksIndex } = this.state
    return (
      <Fragment>
        <CaptchaModal captchaImage={captchaImage} onSubmit={this.onCaptchaModalSubmit} isOpened={isShowCaptchaModal}></CaptchaModal>
        <Loading loading={loading}></Loading>
        <View className="query-classroom">
          <Picker mode="selector" rangeKey="label" onChange={(e) => this.onChange('aids', e)} value={choiceAidsIndex} range={aids}>
            <View className="selector">
              <View className="label">选择校区<text className="color-red">*</text></View>
              <View className="selector-input">
                { aids[choiceAidsIndex] ? <View className="selector-content">{aids[choiceAidsIndex].label}</View> : <View className="selector-placeholder">请选择校区</View>}
              </View>
            </View>
          </Picker>
          <Picker mode="selector" rangeKey="label" onChange={(e) => this.onChange('buildingids', e)} value={choiceBuildingidsIndex} range={buildingids}>
            <View className="selector">
              <View className="label">选择教学楼<text className="color-red">*</text></View>
              <View className="selector-input">
                { buildingids[choiceBuildingidsIndex] ? <View className="selector-content">{buildingids[choiceBuildingidsIndex].label}</View> : <View className="selector-placeholder">请选择教学楼</View>}
              </View>
            </View>
          </Picker>
          <Picker mode="selector" rangeKey="label" onChange={(e) => this.onChange('whichweeks', e)} value={choiceWhichweeksIndex} range={whichweeks}>
            <View className="selector">
              <View className="label">选择周数<text className="color-red">*</text></View>
              <View className="selector-input">
                {whichweeks[choiceWhichweeksIndex] ? <View className="selector-content">{whichweeks[choiceWhichweeksIndex].label}</View> : <View className="selector-placeholder">请选择周数</View>}
              </View>
            </View>
          </Picker>
          <Picker mode="selector" rangeKey="label" onChange={(e) => this.onChange('weeks', e)} value={choiceWeeksIndex} range={weeks}>
            <View className="selector">
              <View className="label">选择日期<Text className="color-red">*</Text></View>
              <View className="selector-input">
                { weeks[choiceWeeksIndex] ? <View className="selector-content">{weeks[choiceWeeksIndex].label}</View> : <View className="selector-placeholder">请选择日期</View>}
              </View>
            </View>
          </Picker>
          <View className="button" onClick={this.onSubmit}>
            <Text className="button-text">查询空闲教室</Text>
          </View>

          <View className="infos">
            <View>*特别说明：</View>
            <View>1.标有“<Text className="color-red">*</Text>”的选项为必选项</View>
            <View>2.理工喵所有教室信息均来自教务在线，部分教室可能会有临时安排，查询结果仅供参考，请以教室实际占用情况为准</View>
            <View>3.如有其它问题请联系我们的客服哦~</View>
            <View>4.每天前两次免费使用，第三次开始需要观看广告，观看广告后本日不限次数（理解下哈大家，理工喵已经快没有猫粮了，喵~）~</View>
          </View>
        </View>
      </Fragment>
    )
  }
}

const mapStateToProps = (state: IRootState) => ({
  user: state.user,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateClassrooms: (list) => dispatch(updateClassrooms(list)),
})

export default connect<PropsFromState, PropsFromDispatch, PageOwnProps>(mapStateToProps, mapDispatchToProps)(QueryClassroom)
