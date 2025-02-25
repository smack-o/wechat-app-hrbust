import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { IRootState } from '@/types'
import { APIS } from '@/services2'
import { withRequest, showToast, loginModal, getCdnUrl } from '@/utils'
import { routes } from '@/app.config'
import { withShare } from '@/components'
import ResourceItem from '@/components/resource-item'
import './index.less'
import { CommentType } from '../_components/comment-input'
import CommentList from '../_components/comment-list'

type PropsFromState = ReturnType<typeof mapStateToProps>
type PropsFromDispatch = {}

type PageOwnProps = {}

type PageState = {
  data: GetApiResultType<typeof APIS.ResourceApi.apiResourceIdGet>
  commentList: GetApiResultType<typeof APIS.CommentApi.apiCommentResourceIdGet>
  hasNext: boolean
}

type IProps = PropsFromState & PropsFromDispatch & PageOwnProps

const prefix = 'resource-detail'

// @withShare({ title: '分享' })

class ResourceDetail extends Component<IProps, PageState> {
  state: PageState = {
    data: undefined,
    commentList: [],
    hasNext: true
  }

  id: string
  pageNum = 0
  pageSize = 20
  fetching = false

  // 在页面中定义激励视频广告
  videoAd: any = null
  loadAdError: boolean

  adCallback?: Function

  async onLoad(e) {
    await loginModal()
    if (e.id) {
      this.id = e.id
      this.getData()
      this.getComment()
    }

    // 在页面onLoad回调事件中创建激励视频广告实例
    if (wx.createRewardedVideoAd) {
      this.videoAd = wx.createRewardedVideoAd({
        adUnitId: 'adunit-3e946876c54cdba5'
      })
      this.videoAd.onLoad(() => {
        console.log('onLoad event emit')
      })
      this.videoAd.onError(err => {
        console.log('onError event emit', err)
        this.loadAdError = true
      })
      this.videoAd.onClose(res => {
        console.log('onClose event emit', res)
        // 用户点击了【关闭广告】按钮
        if (res && res.isEnded) {
          // 正常播放结束，可以下发游戏奖励
          this.adCallback?.()
        } else {
          // 播放中途退出，不下发游戏奖励
        }
      })
    }
  }

  _shareOptions = {
    title: '分享了你一条表白墙',
    imageUrl: '',
    path: routes.community
  }

  onShowAd = (callback: Function) => {
    this.adCallback = callback
    if (this.videoAd && !this.loadAdError) {
      Taro.showModal({
        title: '是否观看广告',
        content: '资源共享限时免费，但是资源收集不易，看个广告支持一下吧~',
        success: res => {
          if (res.confirm) {
            // 用户触发广告后，显示激励视频广告
            this.videoAd.show().catch(() => {
              // 失败重试
              this.videoAd
                .load()
                .then(() => this.videoAd.show())
                .catch(err => {
                  console.log(err)
                  // 失败重试一次
                  this.videoAd!.load()
                    .then(() => this.videoAd.show())
                    .catch(err => {
                      console.log(err)
                      callback()
                    })
                })
            })
          } else if (res.cancel) {
            // console.log('用户点击取消')
          }
        }
      })
      return
    } else {
      callback?.()
    }
  }

  onShareAppMessage() {}
  onShareTimeline() {}

  getData = async () => {
    const [err, res] = await withRequest(APIS.ResourceApi.apiResourceIdGet)({
      id: this.id
    })

    if (!err && res) {
      if (!res._id) {
        // Taro.navigateBack()
        showToast({
          title: '该内容不存在或已被删除',
          icon: 'none',
          finished: () => {
            Taro.navigateBack({
              fail() {
                Taro.switchTab({
                  url: routes.index
                })
              }
            })
          }
        })
        return
      }

      this.setState({
        data: res
      })
      this._shareOptions = {
        title: '分享你一个资源:' + res.name,
        // imageUrl: getCdnUrl(res?.photos?.[0]),
        imageUrl: '',
        path: routes.resourceDetail + '?id=' + res._id
      }
    }
  }

  /**
   *
   * @param reset 是否重置
   * @param refresh 是否刷新当前数据
   * @returns
   */
  getComment = async (reset?: boolean, refresh?: boolean) => {
    this.fetching = true
    let pageNum = String(this.pageNum)
    let pageSize = String(this.pageSize)

    // 刷新当前数据
    if (refresh) {
      pageNum = '0'
      pageSize = String((this.pageNum + 1) * this.pageSize)
    }

    const [err, res] = await withRequest(
      APIS.CommentApi.apiCommentResourceIdGet
    )({
      id: this.id,
      pageNum,
      pageSize
    })

    this.fetching = false

    if (err || !res) {
      return
    }

    this.setState({
      commentList:
        reset || refresh ? res : (this.state.commentList || []).concat(res),
      hasNext: res.length >= this.pageSize
    })
  }

  // 评论
  onCommentSubmit = async (value: string, to?: string, commentId?: string) => {
    const { data } = this.state

    if (!data) {
      return
    }

    const params: Parameters<typeof APIS.CommentApi.apiCommentPost>[0] = {
      resourceId: data._id,
      content: value,
      to: data.publisher?._id,
      type: CommentType.ResourceComment
    }
    // 回复评论
    if (commentId) {
      params.to = to
      params.type = CommentType.ReplyComment
      params.commentId = commentId
    }
    const [err] = await withRequest(APIS.CommentApi.apiCommentPost)(params)

    if (err) {
      return Promise.reject()
    }
    Taro.showToast({
      title: '评论成功',
      icon: 'success'
    })
    this.getComment(false, true)
    this.getData()
  }

  onReachBottom = () => {
    if (!this.state.hasNext || this.fetching) {
      return
    }
    this.pageNum++
    return this.getComment().catch(() => {
      this.pageNum--
    })
  }

  onPullDownRefresh = async () => {
    await this.getData()
    this.getComment(true)
    Taro.stopPullDownRefresh()
  }

  render() {
    const { data, commentList = [] } = this.state

    if (!data) {
      return null
    }
    return (
      <View className={prefix}>
        <ResourceItem
          showDetail
          data={data}
          timeType="relative"
          showDelete
          onShowAd={this.onShowAd}
        ></ResourceItem>
        <View className={`${prefix}__border-line`}></View>
        <View className={`${prefix}__comment-list`}>
          <CommentList
            hotList={data.hotComments}
            showInput
            list={commentList}
            onCommentSubmit={this.onCommentSubmit}
            commentCount={data.commentCount}
          ></CommentList>
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
)(withShare({ title: '分享了你一条表白墙' })(ResourceDetail))
