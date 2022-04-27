import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import { IRootState } from '@/types'
import { APIS } from '@/services2'
import { getCdnUrl, withRequest } from '@/utils'
import classNames from 'classnames'
import PublisherTitle from '../community/_components/publisher-title'
import maleIcon from './imgs/male.png'
import femaleIcon from './imgs/female.png'
import locationIcon from './imgs/location.png'
import likeIcon from './imgs/like.png'

import './index.less'

type PropsFromState = ReturnType<typeof mapStateToProps>
type PropsFromDispatch = {}

type PageOwnProps = {}

type PageState = {
  data: GetApiResultType<typeof APIS.SaleWallApi.apiSaleWallIdGet>
  isLikeLocal: boolean
  likeCountLocal: number
}

type IProps = PropsFromState & PropsFromDispatch & PageOwnProps

const prefix = 'sale-wall-detail'
class CreateWall extends Component<IProps, PageState> {
  state: PageState = {
    data: undefined,
    isLikeLocal: false,
    likeCountLocal: 0
  }

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

  onLoad(e) {
    if (e.id) {
      this.getData(e.id)
    }
  }

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

  getData = async (id: string) => {
    const [err, res] = await withRequest(APIS.SaleWallApi.apiSaleWallIdGet)({
      id
    })

    if (!err && res) {
      this.setState({
        data: res,
        isLikeLocal: res.isLike,
        likeCountLocal: res.likeCount
      })
    }
  }

  onLikeClick = async () => {
    const { data, isLikeLocal, likeCountLocal } = this.state

    const [err, res] = await withRequest(APIS.SaleWallApi.apiSaleWallLikePut)({
      id: data?._id
    })

    if (err || !res) {
      return
    }

    this.setState({
      isLikeLocal: !isLikeLocal,
      likeCountLocal: isLikeLocal ? likeCountLocal - 1 : likeCountLocal + 1
    })
  }

  render() {
    const { data, isLikeLocal, likeCountLocal } = this.state
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
      major
    } = data
    return (
      <View className={prefix}>
        <PublisherTitle
          className={`${prefix}__title`}
          time={createdAt}
          publisher={publisher}
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
            <View className={`${prefix}__info-item__title`}>专业：</View>
            <View className={`${prefix}__info-item__text`}>{major}</View>
          </View>
          <View className={`${prefix}__info-item`}>
            <View className={`${prefix}__info-item__title`}>喜欢TA：</View>
            <View className={`${prefix}__info-item__text`}>{content}</View>
          </View>
          <View className={`${prefix}__info-item`}>
            <View className={`${prefix}__info-item__title`}>舍友简介：</View>
            <View className={`${prefix}__info-item__text`}>{description}</View>
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
