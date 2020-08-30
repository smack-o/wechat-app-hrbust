import React, { Component } from 'react'
import { connect } from 'react-redux'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { IRootState } from '@/types'
import { routes } from '@/utils/router'

// images
import './index.less'

type PropsFromState = ReturnType<typeof mapStateToProps>

type PropsFromDispatch = {}

type PageOwnProps = {}

type PageState = {
  detailData: any[]
  thisWeek: number
}

type IProps = PropsFromState & PropsFromDispatch & PageOwnProps

class CourseDetail extends Component<IProps, PageState> {
  state: Readonly<PageState> = {
    thisWeek: 1,
    detailData: []
  }

  componentDidShow () {
  }

  dayNum = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']

  async onLoad (e) {
    const { thisWeek, timeIndex, dayIndex } = e

    // 获取storage数据
    const userInfo = Taro.getStorageSync(`course:${this.props.user.studentInfo.username}`)

    // 未登陆跳转
    if (!this.props.user.studentInfo.username || !userInfo) {
      return Taro.reLaunch({url: routes.index})
    }

    const course = userInfo.course
    const detailData = course[timeIndex]
    if (!detailData) return

    if (detailData.length > 0) {
      let result: any[] = []
      detailData.forEach((item) => {
        if (item.day === +dayIndex) {
          result.push(item)
        }
      })
      if (result.length > 0) {
        // this.detailData = result
        this.setState({
          detailData: result,
          thisWeek
        })
      }
    }
  }

  render () {
    const { detailData, thisWeek } = this.state
    return (
      <View className="course-detail-page">
        <View className="detial">
          {
            detailData.map((item, index) => {
              return <View key={index} className={item.period[thisWeek] == 1 ? 'detial-current-week' : 'detail-not-current-week'}>
                <View className="course-name">《{item.name}》</View>
                <View>教室：{item.locale}</View>
                <View>周数：{item.week}</View>
                <View>节数：{this.dayNum[item.day - 1]}{item.sectionstart} ～ {item.sectionend}节</View>
                <View>教师：{item.teacher}</View>
              </View>
            })
          }
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state: IRootState) => ({
  user: state.user,
})

export default connect<PropsFromState, PropsFromDispatch, PageOwnProps>(mapStateToProps)(CourseDetail)
