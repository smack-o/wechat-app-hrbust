import { APIS } from '@/services2'
import { getCdnUrl, withRequest } from '@/utils'
import { Image, View, Text } from '@tarojs/components'
import classNames from 'classnames'
import React, { useCallback, useState } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'

import CommentIcon from '../../imgs/comment.png'
import LikeIcon from '../../imgs/like.png'
import LikeSelectedIcon from '../../imgs/like_selected.png'
import PublisherTitle from '../publisher-title'

import './WallItem.less'

dayjs.locale('zh-cn') // 全局使用

dayjs.extend(relativeTime)

interface IWallItemProps {
  data:
    | GetApiResultType<typeof APIS.WallApi.apiWallListGet>[0]
    | GetApiResultType<typeof APIS.WallApi.apiWallBrickIdGet>
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
    data: {
      photos = [],
      to,
      publisher,
      content,
      likeCount,
      isLike,
      _id,
      createdAt
    } = {}
  } = props

  const [localIsLike, setLocalIsLike] = useState(isLike)
  const [localIsLikeCount, setLocalIsLikeCount] = useState(likeCount || 0)

  const onImageClick = useCallback(
    (index: number) => {
      // @ts-ignore
      wx.previewMedia({
        current: index,
        sources: photos.map(item => ({
          url: getCdnUrl(item.key),
          type: 'image'
        })),
        showmenu: true
      })
    },
    [photos]
  )

  const onLikeClick = useCallback(async () => {
    const [err] = await withRequest(APIS.WallApi.apiWallLikePut)({
      brickId: _id
    })

    // 本地变更
    if (!err) {
      setLocalIsLike(!localIsLike)
      setLocalIsLikeCount(localIsLikeCount + (localIsLike ? -1 : 1))
    }
  }, [_id, localIsLike, localIsLikeCount])

  return (
    <View className={prefix}>
      <PublisherTitle time={createdAt} publisher={publisher}></PublisherTitle>
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
        {to !== undefined && (
          <Text className={`${prefix}__content-to`}>@{to}</Text>
        )}

        <Text className={`${prefix}__content-detail`}>{content}</Text>
      </View>
      <View className={`${prefix}__footer`}>
        <View className={`${prefix}__footer-item`}>
          <Image src={CommentIcon} mode="widthFix"></Image>
          {likeCount}
        </View>
        <View className={`${prefix}__footer-item`} onClick={onLikeClick}>
          <Image
            src={localIsLike ? LikeSelectedIcon : LikeIcon}
            mode="widthFix"
          ></Image>
          {localIsLikeCount}
        </View>
      </View>
      <View></View>
    </View>
  )
}
