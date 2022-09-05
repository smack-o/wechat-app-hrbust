import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { APIS } from '@/services2'
import { withRequest, copy, showToast } from '@/utils'
import { Image, View, Text, Ad } from '@tarojs/components'
import { AtActionSheet, AtButton, AtActionSheetItem, AtCard } from 'taro-ui'

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
  onShowAd?: (callback: Function) => void
}

const prefix = 'resource-item'

export enum ResourceDownloadType {
  /**
   * 百度网盘
   */
  BAIDU,
  /**
   * 阿里网盘
   */
  ALIYUN,
  /**
   * 天翼网盘
   */
  TIANYI
}

const downLoadInfo = [
  {
    name: '百度网盘'
  },
  {
    name: '阿里网盘'
  },
  {
    name: '天翼网盘'
  }
]

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
      hotComments = [],
      downloadUrl
    } = {},
    timeType,
    onClick,
    // showDelete = false,
    showHotComments = false,
    showDetail = false,
    onShowAd
  } = props

  const [localIsLike, setLocalIsLike] = useState(isLike)
  const [localIsLikeCount, setLocalIsLikeCount] = useState(likeCount || 0)
  // const [showDownLoadUrlSheet, setShowDownLoadUrlSheet] = useState(false)
  const [showDownloadDetail, setShowDownloadDetail] = useState(false)
  // const [showDownLoadDetailModal, setDownLoadDetailModal] = useState(false)
  // const [modalContent, setModalContent] = useState<{
  //   url: string
  //   downloadType: ResourceDownloadType
  //   password?: string
  //   decompressionPassword?: string
  // }>()

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

  const onGetUrl = () => {
    onShowAd?.(onShowDownloadDetail)
  }

  // const toggleDownLoadUrlSheet = useCallback(() => {
  //   setShowDownLoadUrlSheet(!showDownLoadUrlSheet)
  // }, [showDownLoadUrlSheet])

  // const onDownLoadItemClick = (index: number) => {
  //   if (!downloadUrl) {
  //     return
  //   }
  //   copy(downloadUrl[index].url)
  //   showToast({
  //     title: '复制成功，请粘贴到浏览器打开'
  //   })
  //   onShowDownloadDetail()
  // }

  const onShowDownloadDetail = () => {
    setShowDownloadDetail(true)
    showToast({
      title: '获取成功'
    })
  }

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
        <Fragment>
          {/* @ts-ignore */}
          <wemark md={description} link highlight type="wemark"></wemark>
          {/* @ts-ignore */}
          <ad
            unit-id="adunit-a51bed72a19360d9"
            ad-type="video"
            ad-theme="white"
          >
            {/* @ts-ignore */}
          </ad>

          {showDownloadDetail ? (
            <View>
              {downloadUrl?.map((item, index) => {
                const { url, password, decompressionPassword } = item
                return (
                  <AtCard
                    className={`${prefix}__url-card`}
                    note="点击复制到浏览器打开"
                    extra={downLoadInfo[item.downloadType]?.name}
                    title={`下载链接${downloadUrl.length > 1 ? index + 1 : ''}`}
                    key={index}
                    onClick={() => {
                      copy(url)
                    }}
                  >
                    <Text
                      className={`${prefix}__url-card__text url`}
                      user-select
                    >
                      {url}
                    </Text>
                    {password && (
                      <Text className={`${prefix}__url-card__text`} user-select>
                        密码：{password}
                      </Text>
                    )}
                    {decompressionPassword && (
                      <Text className={`${prefix}__url-card__text`} user-select>
                        解压密码：{decompressionPassword}
                      </Text>
                    )}
                  </AtCard>
                )
              })}
            </View>
          ) : (
            <AtButton
              className={`${prefix}__get-url-btn`}
              type="primary"
              onClick={onGetUrl}
            >
              点击获取下载地址
            </AtButton>
          )}
        </Fragment>
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

      {/* <AtActionSheet
        isOpened={showDownLoadUrlSheet}
        onCancel={toggleDownLoadUrlSheet}
      >
        {downloadUrl?.map((item, index) => {
          return (
            <AtActionSheetItem
              key={index}
              onClick={() => onDownLoadItemClick(index)}
            >
              点击获取链接{index + 1} ({downLoadInfo[item.downloadType]?.name})
            </AtActionSheetItem>
          )
        })}
      </AtActionSheet> */}
    </View>
  )
}
