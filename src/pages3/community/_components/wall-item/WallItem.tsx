import React, { useCallback, useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { APIS } from '@/services2'
import { getCdnUrl, showToast, withRequest } from '@/utils'
import { Image, View, Text } from '@tarojs/components'
import classNames from 'classnames'

import CommentIcon from '../../imgs/comment.png'
import LikeIcon from '../../imgs/like.png'
import LikeSelectedIcon from '../../imgs/like_selected.png'
import PublisherTitle from '../publisher-title'

import './WallItem.less'

interface IWallItemProps {
  timeType?: 'relative' | 'absolute'
  data:
    | GetApiResultType<typeof APIS.WallApi.apiWallListGet>[0]
    | GetApiResultType<typeof APIS.WallApi.apiWallIdGet>
  onClick?: () => void
  showDelete?: boolean
  showHotComments?: boolean
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
      createdAt,
      commentCount,
      isPublisher,
      hotComments = []
    } = {},
    timeType,
    onClick,
    showDelete = false,
    showHotComments = false
  } = props

  const [localIsLike, setLocalIsLike] = useState(isLike)
  const [localIsLikeCount, setLocalIsLikeCount] = useState(likeCount || 0)

  useEffect(() => {
    setLocalIsLike(isLike)
    setLocalIsLikeCount(likeCount || 0)
  }, [isLike, likeCount])

  const onImageClick = useCallback(
    (index: number, e) => {
      e.stopPropagation()
      // @ts-ignore
      wx.previewMedia({
        current: index,
        sources: photos.map(item => ({
          url: getCdnUrl(item),
          type: 'image'
        })),
        showmenu: true
      })
    },
    [photos]
  )

  const onLikeClick = useCallback(
    async e => {
      e.stopPropagation()
      if (!_id) {
        return
      }

      const [err] = await withRequest(APIS.WallApi.apiWallLikeIdPut)({
        id: _id
      })

      // 本地变更
      if (!err) {
        setLocalIsLike(!localIsLike)
        setLocalIsLikeCount(localIsLikeCount + (localIsLike ? -1 : 1))
      }
    },
    [_id, localIsLike, localIsLikeCount]
  )

  const onDelete = useCallback(() => {
    Taro.showModal({
      title: '确认删除这条动态？',
      content: '删除后无法找回，请谨慎操作。',
      success: async res => {
        if (res.confirm) {
          const [err] = await withRequest(APIS.WallApi.apiWallIdDelete)({
            id: _id || ''
          })
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
  }, [_id])

  return (
    <View className={prefix} onClick={onClick}>
      <PublisherTitle
        time={createdAt}
        publisher={publisher}
        timeType={timeType}
        isPublisher={isPublisher}
      ></PublisherTitle>
      <View
        className={classNames(
          `${prefix}__photos`,
          `col-${getPhotosCol(photos?.length)}`
        )}
      >
        {photos?.map((photo, index) => {
          return (
            <Image
              onClick={e => onImageClick(index, e)}
              className={`${prefix}__photos-item`}
              key={photo.key}
              mode={photos.length > 1 ? 'aspectFill' : 'widthFix'}
              src={getCdnUrl(photo)}
            ></Image>
          )
        })}
      </View>
      <View className={`${prefix}__content`}>
        {to && (
          <Text user-select className={`${prefix}__content-to`}>
            @{to}
          </Text>
        )}

        <Text className={`${prefix}__content-detail`} user-select>
          {content}
        </Text>
      </View>
      <View className={`${prefix}__footer`}>
        {showDelete && isPublisher && (
          <View
            className={`${prefix}__footer-delete blue-text`}
            onClick={onDelete}
          >
            删除
          </View>
        )}
        <View className={`${prefix}__footer-item`}>
          <Image src={CommentIcon} mode="widthFix"></Image>
          {commentCount}
        </View>
        <View className={`${prefix}__footer-item`} onClick={onLikeClick}>
          <Image
            src={localIsLike ? LikeSelectedIcon : LikeIcon}
            mode="widthFix"
          ></Image>
          <Text className={localIsLike ? 'red-text' : ''}>
            {localIsLikeCount}
          </Text>
        </View>
      </View>
      {showHotComments && hotComments.length > 0 && (
        <View className={`${prefix}__comment-list`}>
          {hotComments.map(item => {
            return (
              <View key={item._id} className={`${prefix}__comment-list__item`}>
                <Text className="blue-text">
                  @{item.from?.userInfo?.customName}:{' '}
                </Text>
                {item.content}
              </View>
            )
          })}
        </View>
      )}
    </View>
  )
}
