import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'
import Taro from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import { getBanner } from '@/redux/actions/common'
import { IRootState } from '@/types'

import cn from 'classnames'
import { goPage, routes } from '@/utils/router'
import { Loading } from '@/components'

// images
import courseIcon from '@/assets/icon/course.png'
import examIcon from '@/assets/icon/exam_schedule.png'
import gradeIcon from '@/assets/icon/grade.png'
import shopIcon from '@/assets/icon/shop_selected.png'
import queryRoomIcon from '@/assets/icon/query_room.png'
import bgImg from './res/home-bg.png'
import SwiperChild from './components/SwiperChild'

import './index.less'

type PropsFromState = ReturnType<typeof mapStateToProps>

type PropsFromDispatch = ReturnType<typeof mapDispatchToProps>

type PageOwnProps = {}

type PageState = {
  cIndex: number
}

type IProps = PropsFromState & PropsFromDispatch & PageOwnProps

let interstitialAd: Taro.InterstitialAd

const SWIPER_MARGIN = '45rpx'
class Index extends Component<IProps, PageState> {
  state = {
    cIndex: 0,
  }

  componentDidShow () {
    // banner
    this.props.getBanner()

    // 在适合的场景显示插屏广告
    if (interstitialAd) {
      interstitialAd.show().catch((err) => {
        console.log(err)
      })
    }
  }

  onLoad() {
    // 在页面onLoad回调事件中创建插屏广告实例
    // 插屏广告
    if (Taro.createInterstitialAd) {
      interstitialAd = Taro.createInterstitialAd({
        adUnitId: 'adunit-167f2a17e8f9ecc4'
      })
      interstitialAd.onLoad(() => { console.log('adload') })
      interstitialAd.onError((error) => { console.log('aderror:', error) })
      interstitialAd.onClose(() => { console.log('adclose') })
    }
  }

  // 金刚位模块列表
  modules = [
    {
      image: courseIcon,
      text: '课表',
      url: routes.course,
      needLogin: true,
      shadowColor: 'box-shadow: 0px 5px 25px 0px rgba(243, 170, 66, 0.2);'
    }, {
      image: gradeIcon,
      text: '成绩查询',
      url: routes.grade,
      needLogin: true,
      shadowColor: 'box-shadow: 0px 5px 25px 0px rgba(233, 96, 110, 0.2);'
    },
    // {
    //   image: '../assets/icon/cetlogo.png',
    //   text: '无证查询',
    //   url: './cet4',
    //   needLogin: true,
    //   shadowColor: 'box-shadow: 0px 10px 25px 0px rgba(183, 98, 237, 0.2);'
    // },
    // {
    //   image: '../assets/icon/affiche.png',
    //   text: '教务公告',
    //   url: './news/news',
    //   needLogin: true,
    //   shadowColor: 'box-shadow: 0px 5px 25px 0px rgba(72, 98, 246, 0.2);'
    // },
    {
      image: queryRoomIcon,
      text: '查空教室',
      url: routes.classroom,
      needLogin: true,
      shadowColor: 'box-shadow: 0px 10px 25px 0px rgba(255, 0, 220, 0.2);'
    },
    {
      image: examIcon,
      text: '考试安排',
      url: routes.exam,
      needLogin: true,
      shadowColor: 'box-shadow: 0px 5px 25px 0px rgba(95, 205, 222, 0.2);'
    }
    // {
    //   image: '../assets/icon/news_icon.png',
    //   text: '教务公告',
    //   url: '.news'
    // }, {
    //   image: '../assets/icon/job_icon.png',
    //   text: '校招信息',
    //   url: './job'
    // },
    // {
    //   image: '../assets/icon/search_icon.png',
    //   text: '新生速查',
    //   url: './info'
    //   // image: '../assets/icon/search_icon.png',
    //   // text: '新生速查',
    //   // url: '../info/info',
    // }
  ]

  // 测试更改主题逻辑
  // change = () => {
  //   this.setState({
  //     style: "--bg-color2: blue;"
  //   })
  // }

  // 轮播图index变更
  slideChange = (e: TaroBaseEventOrig) => {
    this.setState({
      cIndex: e.detail.current
    })
  }

  goPage = (index: number) => {
    const { user: { isLogin } } = this.props
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

  render () {
    const { cIndex } = this.state
    const { banners, user: { isLogin }, loading } = this.props

    if (loading) {
      return <Loading loading></Loading>
    }

    return (
      <View className="index-container">
        <Swiper
          onChange={this.slideChange}
          className="slide-wrapper"
          indicatorDots={false}
          autoplay
          interval={5000}
          previousMargin={SWIPER_MARGIN}
          nextMargin={SWIPER_MARGIN}
          circular
          duration={400}
        >
          {
            banners.map((item, index) => {
              return <SwiperItem key={item._id}>
                <SwiperChild className="slide-item" item={item} active={cIndex === index} />
              </SwiperItem>
            })
          }
        </Swiper>

        <View className="modules">
          {
            this.modules.map((item, index) => {
              return <View key={index} className={cn('module', {
                'disabled': !(isLogin || !item.needLogin)
              })} onClick={() => this.goPage(index)}
              >
                <Image className="modules_image" style={item.shadowColor} src={item.image} mode="widthFix" />
                <Text className="modules_text">{item.text}</Text>
              </View>
            })
          }
        </View>
        <Image className="discover-image" src={bgImg} mode="widthFix" />
        {
          !isLogin && <View className="login-wrapper">
            <View className="login" onClick={() => goPage(routes.login)}>
              <Text className="login-text" style="color: #999999">校园功能仅对登录用户开放</Text>
              <View className="login-button">
                <Text className="login-text">立即登录</Text>
              </View>
            </View>
          </View>
        }

        <View className="shop-icon" onClick={() => Taro.switchTab({ url: routes.shop })}>
          <Image src={shopIcon} mode="widthFix" />
          <Text>寝室必备</Text>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state: IRootState) => ({
  user: state.user,
  banners: state.common.banners,
  loading: state.global.loading
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ getBanner }, dispatch)

export default connect<PropsFromState, PropsFromDispatch, PageOwnProps>(mapStateToProps, mapDispatchToProps)(Index)
