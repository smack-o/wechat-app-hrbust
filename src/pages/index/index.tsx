import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'
import Taro from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import { getBanner } from '@/redux/actions/common'
import { IRootState } from '@/types'

import cn from 'classnames'
import { goPage, routes } from '@/utils/router'
import { Loading, withShare } from '@/components'
import { APIS } from '@/services2'

// images
import courseIcon from '@/assets/icon/course.png'
import examIcon from '@/assets/icon/exam_schedule.png'
import gradeIcon from '@/assets/icon/grade.png'
import shopIcon from '@/assets/icon/shop_selected.png'
import queryRoomIcon from '@/assets/icon/query_room.png'
import afficheIcon from '@/assets/icon/affiche.png'
import phoneBookIcon from '@/assets/icon/phone_book.png'
import newStudentIcon from '@/assets/icon/new_student.png'
import doNotTouchMeIcon from '@/assets/icon/do_not_touch_me.png'
import arrowRight from '@/assets/icon/arrow_right.png'
import CommentIcon from '@/assets/community-imgs/comment.png'
import LikeIcon from '@/assets/community-imgs/like.png'
import { getCdnUrl, toLogin, withRequest } from '@/utils'
import Time from '@/components/Time'

// import bgImg from './res/home-bg.png'
import SwiperChild from './components/SwiperChild'

import './index.less'

type PropsFromState = ReturnType<typeof mapStateToProps>

type PropsFromDispatch = ReturnType<typeof mapDispatchToProps>

type PageOwnProps = {}

type PageState = {
  cIndex: number
  resourceList: GetApiResultType<typeof APIS.ResourceApi.apiResourceListHotGet>
  wallList: GetApiResultType<typeof APIS.WallApi.apiWallListHotGet>
}

type IProps = PropsFromState & PropsFromDispatch & PageOwnProps

let interstitialAd: Taro.InterstitialAd

const SWIPER_MARGIN = '45rpx'
const prefix = 'index-container'
class Index extends Component<IProps, PageState> {
  state: PageState = {
    cIndex: 0,
    resourceList: [],
    wallList: []
  }
  config = {} as { [key: string]: any }

  componentDidShow() {
    this.handleShow()
  }

  handleShow = async () => {
    // banner
    // await this.getConfig()
    this.props.getBanner()

    // 在适合的场景显示插屏广告
    if (interstitialAd) {
      interstitialAd.show().catch(err => {
        console.log(err)
      })
    }

    await this.props.user.getUserInfoPromise

    if (this.props.user.config.global.showAllResource) {
      this.getResource()
      this.getWall()
    }
  }

  // getConfig = async () => {
  //   const [err, res] = await withRequest(APIS.ConfigApi.apiConfigGet)({
  //     key: 'global'
  //   })
  //   if (err) {
  //     return
  //   }
  //   this.config = res || {}
  // }

  getResource = async () => {
    const [err, res] = await withRequest(
      APIS.ResourceApi.apiResourceListHotGet
    )({
      pageNum: '0',
      pageSize: '4'
    })

    if (err) {
      return
    }
    this.setState({
      resourceList: res
    })
  }

  getWall = async () => {
    const [err, res] = await withRequest(APIS.WallApi.apiWallListHotGet)({
      pageNum: '0',
      pageSize: '4'
    })

    if (err) {
      return
    }
    this.setState({
      wallList: res
    })
  }

  onLoad() {
    // 在页面onLoad回调事件中创建插屏广告实例
    // 插屏广告
    // if (Taro.createInterstitialAd) {
    //   interstitialAd = Taro.createInterstitialAd({
    //     adUnitId: 'adunit-167f2a17e8f9ecc4'
    //   })
    //   interstitialAd.onLoad(() => { console.log('adload') })
    //   interstitialAd.onError((error) => { console.log('aderror:', error) })
    //   interstitialAd.onClose(() => { console.log('adclose') })
    // }
  }

  onShow() {
    // Taro.getCurrentInstance()?.page?.getTabBar?.()
    // Taro.getCurrentInstance()?.page?.getTabBar().setData({
    //   selected: 0,
    // })
  }

  // 金刚位模块列表
  modules = [
    // {
    //   image: courseIcon,
    //   text: '课表',
    //   url: routes.course,
    //   needLogin: true,
    //   shadowColor: 'box-shadow: 0px 5px 25px 0px rgba(243, 170, 66, 0.2);'
    // },
    // {
    //   image: gradeIcon,
    //   text: '成绩查询',
    //   url: routes.grade,
    //   needLogin: true,
    //   shadowColor: 'box-shadow: 0px 5px 25px 0px rgba(233, 96, 110, 0.2);'
    // },
    // // {
    // //   image: '../assets/icon/cetlogo.png',
    // //   text: '无证查询',
    // //   url: './cet4',
    // //   needLogin: true,
    // //   shadowColor: 'box-shadow: 0px 10px 25px 0px rgba(183, 98, 237, 0.2);'
    // // },
    // // {
    // //   image: '../assets/icon/affiche.png',
    // //   text: '教务公告',
    // //   url: './news/news',
    // //   needLogin: true,
    // //   shadowColor: 'box-shadow: 0px 5px 25px 0px rgba(72, 98, 246, 0.2);'
    // // },
    // {
    //   image: queryRoomIcon,
    //   text: '查空教室',
    //   url: routes.classroom,
    //   needLogin: true,
    //   shadowColor: 'box-shadow: 0px 10px 25px 0px rgba(255, 0, 220, 0.2);'
    // },
    // {
    //   image: examIcon,
    //   text: '考试安排',
    //   url: routes.exam,
    //   needLogin: true,
    //   shadowColor: 'box-shadow: 0px 5px 25px 0px rgba(95, 205, 222, 0.2);'
    // }
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
      shadowColor: 'box-shadow: 0px 10px 25px 0px rgba(95, 205, 222, 0.2);'
    },
    {
      image: afficheIcon,
      text: '教务公告',
      url: routes.news,
      // needLogin: true,
      shadowColor: 'box-shadow: 0px 10px 25px 0px rgba(72, 98, 246, 0.2);'
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
    const {
      user: { isLogin, isWechatLogin }
    } = this.props
    const { needLogin, url } = this.modules[index]
    if (!isLogin && needLogin) {
      // Taro.showToast({
      //   title: '该功能需要登录~请先登录！',
      //   icon: 'none'
      // })
      Taro.showModal({
        title: '提示',
        content: '该功能需要登录~请先登录！',
        confirmText: '去登录',
        success: function(res) {
          if (res.confirm) {
            toLogin(isWechatLogin, routes.login)
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
      return
    }

    goPage(url)
  }

  render() {
    const { cIndex, resourceList, wallList } = this.state
    const {
      banners,
      user: { isLogin, isWechatLogin },
      loading
    } = this.props

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
          {banners.map((item, index) => {
            return (
              <SwiperItem key={item._id}>
                <SwiperChild
                  className="slide-item"
                  item={item}
                  active={cIndex === index}
                />
              </SwiperItem>
            )
          })}
        </Swiper>

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

        {/* {isLogin && (
          <Image className="discover-image" src={bgImg} mode="widthFix" />
        )} */}

        {(!isWechatLogin || !isLogin) && (
          <View className="login-wrapper">
            <View
              className="login"
              onClick={() => toLogin(isWechatLogin, routes.login)}
            >
              <Text className="login-text" style="color: #999999">
                部分校园功能仅对绑定学号用户开放
              </Text>
              <View className="login-button">
                <Text className="login-text">
                  {isWechatLogin ? '绑定学号' : '立即登录'}
                </Text>
              </View>
            </View>
          </View>
        )}
        {/*
        {resourceList.length > 0 && (
          <View className="resource-wrapper">
            {resourceList.map((item, index) => {
              return (
                <Fragment key={item._id}>
                  <ResourceItem
                    showHotComments
                    data={item}
                    onClick={() =>
                      goPage(`${routes.resourceDetail}?id=${item._id}`)
                    }
                  ></ResourceItem>
                </Fragment>
              )
            })}
          </View>
        )} */}
        {wallList.length > 0 && (
          <Fragment>
            <View className="placeholder-block"></View>
            <View className="info">
              <View className="info-title">
                <View className="line"></View>
                <View className="title">热门表白墙</View>
              </View>
              <View className="info-content">
                {wallList.map(item => {
                  return (
                    <View
                      className="item-wrapper"
                      key={item._id}
                      onClick={() =>
                        goPage(`${routes.wallDetail}?id=${item._id}`)
                      }
                    >
                      <View className="item">
                        {item.photos && item.photos.length > 0 && (
                          <Image
                            className="image"
                            mode="widthFix"
                            src={getCdnUrl(item.photos[0])}
                          ></Image>
                        )}
                        {/* <Image className="image" src={item.images} mode="widthFix" /> */}
                        <View className="text">
                          <View className="title">{item.content}</View>
                          <View className="date">
                            发布日期：<Time time={item.createdAt}></Time>
                          </View>
                        </View>
                        <Image className="arrow-right" src={arrowRight} />
                      </View>
                      <View className={`${prefix}__footer`}>
                        <View className={`${prefix}__footer-right`}>
                          <View className={`${prefix}__footer-item`}>
                            <Image src={CommentIcon} mode="widthFix"></Image>
                            {item.viewCount}
                          </View>
                          <View className={`${prefix}__footer-item`}>
                            <Image src={CommentIcon} mode="widthFix"></Image>
                            {item.commentCount}
                          </View>
                          <View className={`${prefix}__footer-item`}>
                            <Image src={LikeIcon} mode="widthFix"></Image>
                            <Text>{item.likeCount}</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  )
                })}
              </View>
              <View
                className="load-more"
                onClick={() => {
                  Taro.navigateTo({
                    url: routes.community
                  })
                }}
              >
                查看更多
              </View>
            </View>
          </Fragment>
        )}

        {resourceList.length > 0 && (
          <Fragment>
            <View className="placeholder-block"></View>
            <View className="info">
              <View className="info-title">
                <View className="line"></View>
                <View className="title">热门资源</View>
              </View>
              <View className="info-content">
                {resourceList.map(item => {
                  return (
                    <View
                      className="item-wrapper"
                      key={item._id}
                      onClick={() =>
                        goPage(`${routes.resourceDetail}?id=${item._id}`)
                      }
                    >
                      <View className="item">
                        {/* <Image className="image" src={item.images} mode="widthFix" /> */}
                        <View className="text">
                          <View className="title">{item.name}</View>
                          <View className="date">
                            发布日期：<Time time={item.createdAt}></Time>
                          </View>
                        </View>
                        <Image className="arrow-right" src={arrowRight} />
                      </View>
                      <View className={`${prefix}__footer`}>
                        <View className={`${prefix}__footer-right`}>
                          <View className={`${prefix}__footer-item`}>
                            <Image src={CommentIcon} mode="widthFix"></Image>
                            {item.viewCount}
                          </View>
                          <View className={`${prefix}__footer-item`}>
                            <Image src={CommentIcon} mode="widthFix"></Image>
                            {item.commentCount}
                          </View>
                          <View className={`${prefix}__footer-item`}>
                            <Image src={LikeIcon} mode="widthFix"></Image>
                            <Text>{item.likeCount}</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  )
                })}
              </View>
              <View
                className="load-more"
                onClick={() => {
                  Taro.switchTab({
                    url: routes.resource
                  })
                }}
              >
                查看更多
              </View>
            </View>
          </Fragment>
        )}

        <View
          className="shop-icon"
          onClick={() => Taro.switchTab({ url: routes.shop })}
        >
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

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ getBanner }, dispatch)

export default connect<PropsFromState, PropsFromDispatch, PageOwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(
  withShare({
    title: '理工喵儿，理工人专属小程序'
  })(Index)
)
