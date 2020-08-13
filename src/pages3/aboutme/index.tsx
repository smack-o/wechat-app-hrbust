import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, ScrollView, Text, OpenData, Image, Button, Audio } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { IRootState } from '@/types'
import { UserState } from '@/redux/reducers/user'
import appAvatar from '@/assets/icon/app_avatar.png'
import { routes } from '@/app.config'
import bottomIcon from './res/wechat_bottom.jpg'
// import aboutIcon from './res/hrbust_about.jpg'
// import paymentIcon from './res/payment.jpg'

import './index.less'


type PropsFromState = {
  user: UserState
}

type PropsFromDispatch = {
}

type PageOwnProps = {}

type PageState = {
  scrollTop: number
  count: number
}

type IProps = PropsFromState & PropsFromDispatch & PageOwnProps

const CONFIG = [
  {
    position: 'left',
    text: '你好。'
  },
  {
    position: 'right',
    text: '谁开发的这么烂的小程序？'
  },
  {
    position: 'left',
    text: '我们都是理工毕业的学长。 '
  },
  {
    position: 'left',
    type: 'image',
    // src: aboutIcon,
    // viewUrl: aboutIcon
    src: `http://my-home-static.smackgg.cn/hrbust_about.jpg?imageView/1/w/150/h/225&timestamps=${Date.now()}`,
    viewUrl: `http://my-home-static.smackgg.cn/hrbust_about.jpg?timestamps=${Date.now()}`
  },
  {
    position: 'left',
    text: '话说这小程序真的很烂嘛？😫 '
  },
  {
    position: 'right',
    text: '这小程序都有什么功能？'
  },
  {
    position: 'left',
    text: '1.主要是查询教务在线的信息。2.个人课表、成绩、考试信息等可分享给好友（右上角分享）。3.支持多账号登陆。4.图书馆可以查询图书在馆还是借出。5.数据展示页面下拉刷新上拉加载。'
  },
  {
    position: 'left',
    text: '大概就这些。当然，如果你有很好的建议，我们会考虑加更多的功能。'
  },
  {
    position: 'right',
    text: '现在的功能和体验好差啊！'
  },
  {
    position: 'left',
    text: '如果你有任何建议，欢迎联系我！😎 '
  },
  {
    position: 'right',
    text: '好了，你可以退下了！💩'
  },
  {
    position: 'left',
    text: '如果觉得这个小程序还不错，可以保存下方图片，识别二维码给我们一点点打赏。毕竟服务器以及程序的后期维护也都需要费用。1分也是爱🤑 。'
  },
  {
    position: 'left',
    type: 'image',
    // src: paymentIcon
    src: 'http://my-home-static.smackgg.cn/payment.jpeg'
  },
  {
    position: 'right',
    text: '死开 🙄 ，1分钱也不给 😤'
  }
]

class AboutMe extends Component<IProps, PageState> {
  state: Readonly<PageState> = {
    scrollTop: 0,
    count: -1,
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  audioCtx: Taro.InnerAudioContext
  timer: any

  onLoad() {
    Taro.showShareMenu({
      withShareTicket: true
    })

    const audioCtx = this.audioCtx = Taro.createInnerAudioContext()

    audioCtx.autoplay = false
    audioCtx.src = 'http://my-home-static.smackgg.cn/weixin.mp3'
    // audioCtx.onPlay(() => {
    //   console.log('开始播放')
    // })
    // audioCtx.onError((res) => {
    //   // console.log(res.errMsg)
    //   // console.log(res.errCode)
    // })

    // this.handler()
    this.timer = setInterval(() => {
      this.handler()
    }, 2000)
  }

  handler = () => {
    let { count, scrollTop } = this.state
    count += 1

    if (count > CONFIG.length - 1) {
      clearInterval(this.timer)
      return
    }

    // 音频
    if (CONFIG[count].position === 'left') {
      console.log('---------', count)
      this.audioCtx.seek(0)
      this.audioCtx.play()
    }

    this.setState({
      count,
      scrollTop: scrollTop += 2000
    })
  }

  onShareAppMessage() {
    return {
      title: '哈理工专属小程序理工喵, 快来撩我呀。',
      path: routes.aboutme
    }
  }

  // 点击图片展示
  viewImage = (src: string) => {
    console.log(src)
    Taro.previewImage({
      current: src,
      urls: [src],
      fail() {
        console.error('fail')
      }
    })
  }

  render () {
    const { count, scrollTop } = this.state
    console.log(count, scrollTop)
    return (
      <View className="aboutme-page">
        <ScrollView className="list-wrapper" scrollY scrollTop={scrollTop}>
          {/* <View className="time">{time}</View> */}
          <View className="list">
            {
              CONFIG.slice(0, count + 1).map((item, index) => {
                return <View key="wechat" id={item.text}>
                  <View className={`wechat animation ${item.position}`}>
                    <View className="avatar">
                      {
                        item.position === 'left'
                          ? <Image className="avatar__image" src={appAvatar} />
                          : <OpenData className="avatar__image" type="userAvatarUrl" lang="zh_CN"></OpenData>
                      }
                    </View>
                    {
                      item.type === 'image' && <View className="content content-image" onClick={() => this.viewImage(item.viewUrl || item.src)}>
                        <View className="picture">
                          <Image className="content__image" src={item.src} mode="widthFix" />
                        </View>
                      </View>
                    }
                    {
                      item.type !== 'image' && <View className="content content-text">
                        <View className="plain">
                          <Text>{item.text}<OpenData type="userNickName" lang="zh_CN"></OpenData></Text>
                        </View>
                      </View>
                    }
                  </View>
                </View>
              })
            }
          </View>
          <View className="block"></View>
        </ScrollView>

        <Button className="bottom" open-type="contact">
          <Image className="bottom__image" src={bottomIcon} />
        </Button>
        <Audio src="http://my-home-static.smackgg.cn/weixin.mp3" id="myAudio"></Audio>
      </View>
    )
  }
}

const mapStateToProps = (state: IRootState) => ({
  user: state.user,
})

export default connect<PropsFromState, PropsFromDispatch, PageOwnProps>(mapStateToProps)(AboutMe)
