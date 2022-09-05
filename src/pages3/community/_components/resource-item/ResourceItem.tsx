import React, { useCallback, useEffect, useState } from 'react'
import { APIS } from '@/services2'
import { withRequest } from '@/utils'
import { Image, View, Text } from '@tarojs/components'

import CommentIcon from '../../imgs/comment.png'
import LikeIcon from '../../imgs/like.png'
import LikeSelectedIcon from '../../imgs/like_selected.png'
import PublisherTitle from '../publisher-title'
import './ResourceItem.less'

interface IResourceProps {
  timeType?: 'relative' | 'absolute'
  data: GetApiResultType<typeof APIS.ResourceApi.apiResourceListGet>[0]
  onClick?: () => void
  showDelete?: boolean
  showHotComments?: boolean
  showDetail?: boolean
}

const prefix = 'resource-item'

export default function Resource(props: IResourceProps) {
  const {
    data: {
      // photos = [],
      // to,
      publisher,
      // content,
      likeCount,
      isLike,
      _id,
      createdAt,
      commentCount,
      // isPublisher,
      name,
      nameEn,
      description,
      hotComments = []
    } = {},
    timeType,
    onClick,
    showDelete = false,
    showHotComments = false,
    showDetail = false
  } = props

  const [localIsLike, setLocalIsLike] = useState(isLike)
  const [localIsLikeCount, setLocalIsLikeCount] = useState(likeCount || 0)

  useEffect(() => {
    setLocalIsLike(isLike)
    setLocalIsLikeCount(likeCount || 0)
  }, [isLike, likeCount])

  // const onImageClick = useCallback((index: number, e) => {
  //   e.stopPropagation()
  //   // @ts-ignore
  //   wx.previewMedia({
  //     current: index,
  //     sources: photos.map(item => ({
  //       url: getCdnUrl(item),
  //       type: 'image'
  //     })),
  //     showmenu: true
  //   })
  // }, [])

  const onLikeClick = useCallback(
    async e => {
      e.stopPropagation()
      if (!_id) {
        return
      }

      const [err] = await withRequest(APIS.ResourceApi.apiResourceLikeIdPut)({
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

  // const onDelete = useCallback(() => {
  //   Taro.showModal({
  //     title: '确认删除这条动态？',
  //     content: '删除后无法找回，请谨慎操作。',
  //     success: async res => {
  //       if (res.confirm) {
  //         const [err] = await withRequest(APIS.WallApi.apiWallIdDelete)({
  //           id: _id || ''
  //         })
  //         if (!err) {
  //           showToast({
  //             title: '删除成功',
  //             icon: 'success',
  //             finished: () => {
  //               Taro.navigateBack()
  //             }
  //           })
  //         }
  //       }
  //     }
  //   })
  // }, [_id])

  return (
    <View className={prefix} onClick={onClick}>
      <PublisherTitle
        time={createdAt}
        publisher={publisher}
        timeType={timeType}
        isPublisher={false}
      ></PublisherTitle>
      {/* <View
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
      </View> */}
      <Text user-select className={`${prefix}__content`}>
        {name}
        {nameEn ? `(${nameEn})` : ''}
      </Text>
      {showDetail && (
        // @ts-ignore
        <wemark md={description} link highlight type="wemark"></wemark>
      )}
      <View className={`${prefix}__footer`}>
        {/* {showDelete && false && (
          <View
            className={`${prefix}__footer-delete blue-text`}
            onClick={onDelete}
          >
            删除
          </View>
        )} */}
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
