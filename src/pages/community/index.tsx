import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Image } from '@tarojs/components'
import { IRootState } from '@/types'
import { goPage, routes } from '@/utils/router'
import Taro from '@tarojs/taro'
import { APIS, InlineResponse2002Result } from '@/services2'
import { withRequest } from '@/utils'
import BottomBar from './_components/bottom-bar'
// images
import newFnIcon from './res/new_fn_icon.png'
import touchMeIcon from './res/touch_me_icon.png'
import discoverIcon from './res/discover.png'
import './index.less'

type PropsFromState = ReturnType<typeof mapStateToProps>
type PropsFromDispatch = {
}

type PageOwnProps = {}

type PageState = {
  list: InlineResponse2002Result[]
}

type IProps = PropsFromState & PropsFromDispatch & PageOwnProps

class Discover extends Component<IProps, PageState> {
  state: PageState  = {
    list: [],
  }

  componentDidShow () {
  }

  async onLoad() {
    const waimaiPlugin = Taro.requirePlugin('waimai')
    waimaiPlugin.init('110804100128')

    const [err, res] = await withRequest(APIS.WallApi.apiWallListGet)({
      pageNum: '0',
      pageSize: '20'
    })

    if (err || !res) {
      Taro.showToast({
        title: err?.message || '获取失败',
        icon: 'error'
      })
      return
    }

    this.setState({
      list: res
    })

  }
  onShow() {
    // Taro.getCurrentInstance()?.page?.getTabBar?.()
    // Taro.getCurrentInstance()?.page?.getTabBar().setData({
    //   selected: 1,
    // })
  }


  render () {
    return (
      <View className="discover-container">
        <View className="info">
          更多功能敬请期待~11111
        </View>
        {
          this.state.list.map(item => {
            return <View key={item._id}>
              <View>
                @{item.to}
              </View>
              <View>
                {item.content}
              </View>
              <View>
                点赞：{item.isLike}
              </View>
              <View>
                收藏：{item.isCollect}
              </View>
              <View>
              {/* 评论：{item.} */}
              {
                item.photos?.map(photo => {
                    return <Image src={`http://testqiniu2.smackgg.cn/${photo.key}`}></Image>
                })
              }
            </View>
            <View>

            </View>
            </View>
          })
        }
        <BottomBar></BottomBar>
      </View>
    )
  }
}

const mapStateToProps = (state: IRootState) => ({
  user: state.user,
})

export default connect<PropsFromState, PropsFromDispatch, PageOwnProps>(mapStateToProps)(Discover)
