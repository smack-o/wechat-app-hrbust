import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { IRootState } from '@/types'
import { APIS } from '@/services2'
import { withRequest, showToast, loginModal, getCdnUrl } from '@/utils'
import { routes } from '@/app.config'
import { withShare } from '@/components'
import './index.less'
import WallItem from '../_components/wall-item'
import { CommentType } from '../_components/comment-input'
import CommentList from '../_components/comment-list'

type PropsFromState = ReturnType<typeof mapStateToProps>
type PropsFromDispatch = {}

type PageOwnProps = {}

type PageState = {
  data: GetApiResultType<typeof APIS.WallApi.apiWallIdGet>
  commentList: GetApiResultType<typeof APIS.CommentApi.apiCommentBrickIdGet>
  hasNext: boolean
}

type IProps = PropsFromState & PropsFromDispatch & PageOwnProps

const prefix = 'wall-detail'

// @withShare({ title: '分享' })

class WallDetail extends Component<IProps, PageState> {
  state: PageState = {
    data: undefined,
    commentList: [],
    hasNext: true
  }

  id: string
  pageNum = 0
  pageSize = 20
  fetching = false

  async onLoad(e) {
    await loginModal()
    if (e.id) {
      this.id = e.id
      this.getData()
      this.getComment()
    }
  }

  _shareOptions = {
    title: '分享了你一条表白墙',
    imageUrl: '',
    path: routes.community
  }

  onShareAppMessage() {}
  onShareTimeline() {}

  getData = async () => {
    const [err, res] = await withRequest(APIS.WallApi.apiWallIdGet)({
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
        title: '分享你一条表白墙',
        imageUrl: getCdnUrl(res?.photos?.[0]),
        path: routes.wallDetail + '?id=' + res._id
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

    const [err, res] = await withRequest(APIS.CommentApi.apiCommentBrickIdGet)({
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
      brickId: data._id,
      content: value,
      to: data.publisher?._id,
      type: CommentType.BrickComment
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
        <WallItem data={data} timeType="relative" showDelete></WallItem>
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
)(withShare({ title: '分享了你一条表白墙' })(WallDetail))
