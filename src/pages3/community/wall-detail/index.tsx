import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { IRootState } from '@/types'
import { APIS } from '@/services2'
import { withRequest } from '@/utils'
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
class CreateWall extends Component<IProps, PageState> {
  state: PageState = {
    data: undefined,
    commentList: [],
    hasNext: true
  }

  id: string
  pageNum = 0
  pageSize = 20
  fetching = false

  onLoad(e) {
    if (e.id) {
      this.id = e.id
      this.getData()
      this.getComment()
    }
  }

  getData = async () => {
    const [err, res] = await withRequest(APIS.WallApi.apiWallIdGet)({
      id: this.id
    })

    if (!err && res) {
      this.setState({
        data: res
      })
    }
  }

  getComment = async (reset?: boolean) => {
    if (this.fetching || !this.state.hasNext) {
      return
    }
    this.fetching = true
    const [err, res] = await withRequest(APIS.CommentApi.apiCommentBrickIdGet)({
      id: this.id,
      pageNum: String(this.pageNum),
      pageSize: String(this.pageSize)
    })

    // const [err, res] = await withRequest(
    //   APIS.CommentApi.apiCommentCommentIdGet
    // )({
    //   id: '62753edc74e331c8ce619cd3',
    //   pageNum: '' + this.pageNum,
    //   pageSize: '' + this.pageSize
    // })

    this.fetching = false

    if (err || !res) {
      return
    }

    this.setState({
      commentList: reset ? res : (this.state.commentList || []).concat(res),
      hasNext: res.length === this.pageSize
    })
  }

  // 评论
  onCommentSubmit = async (value: string, currentIndex?: number) => {
    const { data, commentList } = this.state
    console.log(value)
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
    if (currentIndex !== undefined && currentIndex >= 0) {
      params.to = commentList?.[currentIndex].from?._id
      params.type = CommentType.ReplyComment
      params.commentId = commentList?.[currentIndex]._id
    }
    const [err] = await withRequest(APIS.CommentApi.apiCommentPost)(params)

    if (err) {
      return Promise.reject()
    }
    Taro.showToast({
      title: '评论成功',
      icon: 'success'
    })
    this.getComment(true)
    this.getData()
  }

  render() {
    const { data, commentList = [] } = this.state

    if (!data) {
      return null
    }
    return (
      <View className={prefix}>
        <WallItem data={data} timeType="relative"></WallItem>
        <CommentList
          list={commentList}
          onCommentSubmit={this.onCommentSubmit}
        ></CommentList>
      </View>
    )
  }
}

const mapStateToProps = (state: IRootState) => ({
  user: state.user
})

export default connect<PropsFromState, PropsFromDispatch, PageOwnProps>(
  mapStateToProps
)(CreateWall)
