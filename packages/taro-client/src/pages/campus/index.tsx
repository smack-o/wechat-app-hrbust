import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { IRootState } from '@/types'
import cn from 'classnames'
import { goPage, routes } from '@/utils/router'

// images
import courseIcon from '@/assets/icon/course.png'
import gradeIcon from '@/assets/icon/grade.png'
import afficheIcon from '@/assets/icon/affiche.png'
import examIcon from '@/assets/icon/exam_schedule.png'
import queryRoomIcon from '@/assets/icon/query_room.png'
import phoneBookIcon from '@/assets/icon/phone_book.png'
import newStudentIcon from '@/assets/icon/new_student.png'
import doNotTouchMeIcon from '@/assets/icon/do_not_touch_me.png'

import arrowRight from '@/assets/icon/arrow_right.png'
import anpaiIcon from './res/anpai.jpg'
import chidaoIcon from './res/chidao.png'

import './index.less'

type PropsFromState = ReturnType<typeof mapStateToProps>
type PropsFromDispatch = {}

type PageOwnProps = {}

type PageState = {}

type IProps = PropsFromState & PropsFromDispatch & PageOwnProps

const HOLIDAY_ARRANGE = `${routes.webview}?url=${encodeURIComponent(
  'https://mp.weixin.qq.com/s/Tzxzyuzmxbhrge5Fok70GA'
)}&title=放假安排`
const SCHOOL_BUSS_ARRANGE = `${routes.webview}?url=${encodeURIComponent(
  'https://mp.weixin.qq.com/s/4ccr5NujjKifXgZ1oTO4Kw'
)}&title=校车时间`

class Campus extends Component<IProps, PageState> {
  state = {}

  componentDidShow() {}

  onLoad() {}

  // 金刚位模块列表
  modules = [
    {
      image: courseIcon,
      text: '课表',
      url: routes.course,
      needLogin: true,
      shadowColor: 'box-shadow: 0px 10px 25px 0px rgba(243, 170, 66, 0.2);'
    },
    {
      image: gradeIcon,
      text: '成绩查询',
      url: routes.grade,
      needLogin: true,
      shadowColor: 'box-shadow: 0px 10px 25px 0px rgba(233, 96, 110, 0.2);'
    },
    {
      image: afficheIcon,
      text: '教务公告',
      url: routes.news,
      // needLogin: true,
      shadowColor: 'box-shadow: 0px 10px 25px 0px rgba(72, 98, 246, 0.2);'
    },
    {
      image: examIcon,
      text: '考试安排',
      url: routes.exam,
      needLogin: true,
      shadowColor: 'box-shadow: 0px 10px 25px 0px rgba(95, 205, 222, 0.2);'
    },
    {
      image: phoneBookIcon,
      text: '理工电邮',
      url: `${routes.webview}?url=${encodeURIComponent(
        'https://mp.weixin.qq.com/s/8Lsdsd7tMdjM6YgU2rGkbA'
      )}&title=理工电邮`,
      // needLogin: true,
      shadowColor: 'box-shadow: 0px 10px 25px 0px rgba(20, 235, 89, 0.2);'
    },
    {
      image: queryRoomIcon,
      text: '查空教室',
      url: routes.classroom,
      needLogin: true,
      shadowColor: 'box-shadow: 0px 10px 25px 0px rgba(255, 0, 220, 0.2);'
    },
    {
      image: newStudentIcon,
      text: '新生速查',
      url: routes.yingxin,
      needLogin: false,
      shadowColor: 'box-shadow: 0px 10px 25px 0px rgba(72, 98, 246, 0.2);'
    },
    {
      image: doNotTouchMeIcon,
      text: '别点我',
      url: routes.aboutme,
      needLogin: false,
      shadowColor: 'box-shadow: 0px 10px 25px 0px rgba(72, 98, 246, 0.2);'
    }
    // {
    //   image: '../assets/icon/cetlogo.png',
    //   text: '四六级预约',
    //   url: './cetGrade',
    //   loginShow: true,
    //   needLogin: true,
    //   shadowColor: 'box-shadow: 0px 10px 25px 0px rgba(183, 98, 237, 0.2);'
    // }, {
    //   image: '../assets/icon/cetlogo.png',
    //   text: '无证查询',
    //   url: './page4',
    //   needLogin: true,
    //   loginShow: true,
    //   shadowColor: 'box-shadow: 0px 10px 25px 0px rgba(183, 98, 237, 0.2);'
    // }
    // {
    //   image: '../assets/icon/cetlogo.png',
    //   text: '帽子',
    //   url: './christmas/christmasIndex',
    //   needLogin: true,
    //   shadowColor: 'box-shadow: 0px 10px 25px 0px rgba(183, 98, 237, 0.2);'
    // }
  ]

  goPage = (index: number) => {
    const {
      user: { isLogin }
    } = this.props
    const { needLogin, url } = this.modules[index]
    if (!isLogin && needLogin) {
      Taro.showToast({
        title: '该功能需要登录~请先登录！',
        icon: 'none'
      })
      return
    }

    goPage(url)
  }

  render() {
    const {
      user: { isLogin }
    } = this.props

    return (
      <View className="campus-container">
        <View className="modules">
          {this.modules.map((item, index) => {
            return (
              <View
                key={index}
                className={cn('module', {
                  disabled: !(isLogin || !item.needLogin)
                })}
                onClick={() => this.goPage(index)}
              >
                <Image
                  className="modules_image"
                  style={item.shadowColor}
                  src={item.image}
                  mode="widthFix"
                />
                <Text className="modules_text">{item.text}</Text>
              </View>
            )
          })}
        </View>
        <View className="info-title">
          <View className="title">
            校园精选
            <View className="line"></View>
          </View>
        </View>
        <View className="info-content">
          <View className="item" onClick={() => goPage(HOLIDAY_ARRANGE)}>
            <Image className="image" src={anpaiIcon} mode="widthFix" />
            <View className="text">
              <View className="title">哈理工本学期放假安排</View>
              <View className="date">发布日期: 2019-8-28</View>
            </View>
            <Image className="arrow-right" src={arrowRight} />
          </View>
          <View className="item" onClick={() => goPage(SCHOOL_BUSS_ARRANGE)}>
            <Image className="image" src={chidaoIcon} mode="widthFix" />
            <View className="text">
              <View className="title">哈理工上课时间&校车时间安排</View>
              <View className="date">发布日期: 2019-8-28</View>
            </View>
            <Image className="arrow-right" src={arrowRight} />
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state: IRootState) => ({
  user: state.user
})

export default connect<PropsFromState, PropsFromDispatch, PageOwnProps>(
  mapStateToProps
)(Campus)
