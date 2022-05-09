import React, { Component } from 'react'
import { connect } from 'react-redux'
import Taro from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image, Text } from '@tarojs/components'
import { IRootState } from '@/types'
import { APIS } from '@/services2'
import { getCdnUrl, loginModal, showToast, withRequest } from '@/utils'
import classNames from 'classnames'
import { routes } from '@/app.config'
import { withShare } from '@/components'
import PublisherTitle from '../_components/publisher-title'
import maleIcon from './imgs/male.png'
import femaleIcon from './imgs/female.png'
import locationIcon from './imgs/location.png'
import likeIcon from './imgs/like.png'

import './index.less'
import CommentList from '../_components/comment-list'
import { CommentType } from '../_components/comment-input'

type PropsFromState = ReturnType<typeof mapStateToProps>
type PropsFromDispatch = {}

type PageOwnProps = {}

type PageState = {
  data: GetApiResultType<typeof APIS.SaleWallApi.apiSaleWallIdGet>
  isLikeLocal: boolean
  likeCountLocal: number
  commentList: GetApiResultType<typeof APIS.CommentApi.apiCommentMateIdGet>
  hasNext: boolean
}

type IProps = PropsFromState & PropsFromDispatch & PageOwnProps

const prefix = 'sale-wall-detail'
class SaleWallDetail extends Component<IProps, PageState> {
  state: PageState = {
    data: undefined,
    isLikeLocal: false,
    likeCountLocal: 0,
    commentList: [],
    hasNext: true
  }

  id: string
  pageNum = 0
  pageSize = 20
  fetching = false

  genderMap = [
    {
      icon: maleIcon,
      text: '男'
    },
    {
      icon: femaleIcon,
      text: '女'
    }
  ]

  async onLoad(e) {
    await loginModal()

    if (e.id) {
      this.id = e.id
      this.getData()
      this.getComment()
    }
  }

  $shareOptions = {
    title: '分享了你一条卖舍友',
    imageUrl: '',
    path: routes.community
  }

  onShareAppMessage() {}
  onShareTimeline() {}

  onImageClick = (index: number) => {
    const photos = this.state.data?.photos || []
    // @ts-ignore
    wx.previewMedia({
      current: index,
      sources: photos.map(item => ({
        url: getCdnUrl(item.key),
        type: 'image'
      })),
      showmenu: true
    })
  }

  getData = async () => {
    const [err, res] = await withRequest(APIS.SaleWallApi.apiSaleWallIdGet)({
      id: this.id
    })

    if (!err && res) {
      if (!res._id) {
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
        data: res,
        isLikeLocal: res.isLike,
        likeCountLocal: res.likeCount
      })

      this.$shareOptions = {
        title: '分享你一条卖舍友',
        imageUrl: getCdnUrl(res?.photos?.[0]?.key),
        path: routes.saleWallDetail + '?id=' + res._id
      }
    }
  }

  onLikeClick = async () => {
    const { data, isLikeLocal, likeCountLocal } = this.state

    const [err, res] = await withRequest(APIS.SaleWallApi.apiSaleWallLikeIdPut)(
      {
        id: data?._id || ''
      }
    )

    if (err || !res) {
      return
    }

    this.setState({
      isLikeLocal: !isLikeLocal,
      likeCountLocal: isLikeLocal ? likeCountLocal - 1 : likeCountLocal + 1
    })
  }

  onDelete = async () => {
    const { data } = this.state
    Taro.showModal({
      title: '确认删除这条动态？',
      content: '删除后无法找回，请谨慎操作。',
      success: async res => {
        if (res.confirm) {
          const [err] = await withRequest(APIS.SaleWallApi.apiSaleWallIdDelete)(
            {
              id: data?._id || ''
            }
          )
          if (!err) {
            showToast({
              title: '删除成功',
              icon: 'success',
              finished: () => {
                Taro.navigateBack()
              }
            })
          }
        }
      }
    })
  }

  getComment = async (reset?: boolean) => {
    this.fetching = true
    const [err, res] = await withRequest(APIS.CommentApi.apiCommentMateIdGet)({
      id: this.id,
      pageNum: String(this.pageNum),
      pageSize: String(this.pageSize)
    })

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
  onCommentSubmit = async (value: string, to?: string, commentId?: string) => {
    const { data } = this.state

    if (!data) {
      return
    }

    const params: Parameters<typeof APIS.CommentApi.apiCommentPost>[0] = {
      mateId: data._id,
      content: value,
      to: data.publisher?._id,
      type: CommentType.MateComment
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
    this.getComment(true)
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
    const { data, isLikeLocal, likeCountLocal, commentList } = this.state
    if (!data) {
      return null
    }

    const {
      publisher,
      createdAt,
      photos,
      name,
      gender,
      content,
      description,
      major,
      isPublisher
    } = data
    return (
      <View className={prefix}>
        <PublisherTitle
          className={`${prefix}__title`}
          time={createdAt}
          publisher={publisher}
          timeType="relative"
          isPublisher={isPublisher}
        ></PublisherTitle>
        <Swiper
          circular
          indicatorDots
          autoplay
          className={`${prefix}__swiper`}
          // displayMultipleItems={photos?.length}
        >
          {photos?.map((photo, index) => (
            <SwiperItem key={photo.key}>
              <Image
                mode="aspectFill"
                src={getCdnUrl(photo.key)}
                className={`${prefix}__swiper-item`}
                onClick={() => this.onImageClick(index)}
              ></Image>
            </SwiperItem>
          ))}
        </Swiper>
        <View className={`${prefix}__name`}>{name}</View>
        <View className={`${prefix}__gender`}>
          <Image src={this.genderMap[gender].icon}></Image>
          {this.genderMap[gender].text}
          <Image src={locationIcon} className={`${prefix}__location`}></Image>
          暂无位置信息
        </View>
        <View className={`${prefix}__info`}>
          <View className={`${prefix}__info-item`}>
            <Text userSelect className={`${prefix}__info-item__title`}>
              专业：
            </Text>
            <Text userSelect className={`${prefix}__info-item__text`}>
              {major}
            </Text>
          </View>
          <View className={`${prefix}__info-item`}>
            <Text userSelect className={`${prefix}__info-item__title`}>
              喜欢TA：
            </Text>
            <Text userSelect className={`${prefix}__info-item__text`}>
              {content}
            </Text>
          </View>
          <View className={`${prefix}__info-item`}>
            <Text userSelect className={`${prefix}__info-item__title`}>
              舍友简介：
            </Text>
            <Text userSelect className={`${prefix}__info-item__text`}>
              {description}
            </Text>
          </View>
        </View>
        <View
          className={classNames(`${prefix}__like`, {
            liked: isLikeLocal
          })}
          onClick={this.onLikeClick}
        >
          <Image src={likeIcon}></Image>
          {likeCountLocal}
        </View>

        <View className={`${prefix}__like-tips`}>
          感兴趣的话就为TA点一颗小心心吧~~
        </View>
        {isPublisher && (
          <View
            className={`${prefix}__delete blue-text`}
            onClick={this.onDelete}
          >
            删除
          </View>
        )}
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
)(withShare({ title: '分享了你一条卖舍友' })(SaleWallDetail))
