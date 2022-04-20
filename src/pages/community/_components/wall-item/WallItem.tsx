import { APIS, InlineResponse2002Result } from '@/services2'
import { getCdnUrl, withRequest } from '@/utils'
import { Image, View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import classNames from 'classnames'
import React, { useCallback, useState } from 'react'
import CommentIcon from '../../imgs/comment.png'
import LikeIcon from '../../imgs/like.png'
import LikeSelectedIcon from '../../imgs/like_selected.png'

import './WallItem.less'

interface IWallItemProps {
  data: InlineResponse2002Result
}

const prefix = 'wall-item'

const getPhotosCol = (length = 0) => {
  if (length === 4) {
    return 2
  }
  if (length >= 3) {
    return 3
  }
  return length
}

export default function WallItem(props: IWallItemProps) {
  const {
    data: { photos = [], to, publisher, content, likeCount, isCollect, isLike, _id },
  } = props

  const [localIsLike, setLocalIsLike] = useState(isLike)
  const [localIsLikeCount, setLocalIsLikeCount] = useState(likeCount)

  const onImageClick = useCallback((index: number) => {
    // @ts-ignore
    wx.previewMedia({
      current: index,
      sources: photos.map(item => ({
        url:getCdnUrl(item.key),
        type: 'image'
      })),
      showmenu: true
    })
  }, [photos])

  const onLikeClick = useCallback(async () => {
    const [err, res] = await withRequest(APIS.WallApi.apiWallLikePut)({
      brickId: _id
    })

    if (!err) {
      setLocalIsLike(!localIsLike)
      setLocalIsLikeCount(localIsLikeCount + (localIsLike ? -1 : 1))
    }
  }, [_id, localIsLike, localIsLikeCount])

  return (
    <View className={prefix}>
      <View className={`${prefix}__publisher`}>
        <Image
          className={`${prefix}__publisher-avatar`}
          src={publisher?.userInfo?.avatarUrl || ''}
        ></Image>
        <View className={`${prefix}__publisher-name`}>
          {publisher?.userInfo?.nickName}
        </View>
      </View>
      <View
        className={classNames(
          `${prefix}__photos`,
          `col-${getPhotosCol(photos?.length)}`
        )}
      >
        {photos?.map((photo, index) => {
          return (
            <Image
              onClick={() => onImageClick(index)}
              className={`${prefix}__photos-item`}
              key={photo.key}
              mode={photos.length > 1 ? 'aspectFill' : 'widthFix'}
              src={getCdnUrl(photo.key)}
            ></Image>
          )
        })}
      </View>
      <View className={`${prefix}__content`}>
        <Text className={`${prefix}__content-to`}>@{to}</Text>
        <Text className={`${prefix}__content-detail`}>{content}</Text>
      </View>
      <View className={`${prefix}__footer`}>
        <View className={`${prefix}__footer-item`}>
          <Image src={CommentIcon} mode="widthFix"></Image>
          {likeCount}
        </View>
        <View className={`${prefix}__footer-item`} onClick={onLikeClick}>
          <Image src={localIsLike ? LikeSelectedIcon : LikeIcon} mode="widthFix"></Image>
          {localIsLikeCount}
        </View>
      </View>
      <View></View>
    </View>
  )
}
