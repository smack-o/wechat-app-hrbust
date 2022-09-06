import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { APIS } from '@/services2'
import { withRequest, copy, showToast } from '@/utils'
import { Image, View, Text, Ad } from '@tarojs/components'
import { AtButton, AtCard } from 'taro-ui'
import Taro from '@tarojs/taro'

import CommentIcon from '@/assets/community-imgs/comment.png'
import LikeIcon from '@/assets/community-imgs/like.png'
import LikeSelectedIcon from '@/assets/community-imgs/like_selected.png'
import PublisherTitle from '@/components/publisher-title'
import './ResourceItem.less'

interface IResourceProps {
  timeType?: 'relative' | 'absolute'
  data: GetApiResultType<typeof APIS.ResourceApi.apiResourceListGet>[0]
  onClick?: () => void
  showDelete?: boolean
  showHotComments?: boolean
  showDetail?: boolean
  onShowAd?: (callback: Function) => void
  showTop?: boolean
}

const prefix = 'resource-item'

export enum ResourceTag {
  /**
   * 电影、电视剧
   * Movie
   * Film
   */
  MOVIE = 'movie',
  /**
   * 游戏
   * Game
   */
  GAME = 'game',
  /**
   * 学习资源
   * Study
   */
  STUDY = 'study'
}

export const resourceInfo = {
  [ResourceTag.MOVIE]: {
    name: '电影'
  },
  [ResourceTag.GAME]: {
    name: '游戏'
  },
  [ResourceTag.STUDY]: {
    name: '学习'
  }
}

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
      downloadUrl,
      tag = [],
      viewCount,
      top
    } = {},
    timeType,
    onClick,
    // showDelete = false,
    showHotComments = false,
    showDetail = false,
    onShowAd,
    showTop = false
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

  // TODO: 举报投诉逻辑
  const onComplaint = () => {
    Taro.showModal({
      title: '投诉成功',
      content: '理工喵已收到投诉，会尽快在核实后进行处理。',
      success: function(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }

  return (
    <View className={prefix} onClick={onClick}>
      {!showDetail && tag.length > 0 && (
        <View className={`${prefix}-tags`}>
          {tag.map(item => (
            <View className={`${prefix}-tags__tag`} key={item}>
              {resourceInfo[item].name}
            </View>
          ))}
        </View>
      )}

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
          {tag.length > 0 && (
            <View className={`${prefix}-detail-tags`}>
              标签：
              {tag.map(item => resourceInfo[item].name).join('，')}
            </View>
          )}
          <View className="line"></View>
          {/* @ts-ignore */}
          <wemark md={description} link highlight type="wemark"></wemark>
          <AtCard className={`${prefix}__url-card`} title="免责声明">
            <View className="mianze-text">
              1、本站所有内容均为爱好者分享发布的网盘链接介绍展示帖子，本站不存储任何实质资源数据。
            </View>
            <View className="mianze-text">
              2、本站禁止发布分享爱奇艺、B站、优酷、腾讯视频等媒体平台收费热播独播影视作品；禁止分享正在热播或者上映不足
              3 个月影视作品。
            </View>
            <View className="mianze-text">
              3、本站不提供任何资源下载服务，不提供任何资源存储服务，不提供任何资源上传服务。
            </View>
            <View className="mianze-text">
              4、本文内所有链接指向的云盘网盘资源，其版权归版权方所有！其实际管理权为分享者所有，本站无法操作相关资源。
            </View>
            <View className="mianze-text">
              5、本站不对任何资源的合法性、真实性、有效性、安全性、准确性、完整性、可靠性、适用性、合法性、版权性等进行任何形式的保证。
            </View>
            <View className="mianze-text">
              6、本站不对任何资源的下载、使用、传播、复制、转载、分享等行为承担任何责任。
            </View>
            <View className="mianze-text">
              7、如您认为本站任何介绍帖侵犯了您的合法版权，请点击{' '}
              <Text className="complaint-btn" onClick={onComplaint}>
                版权投诉
              </Text>{' '}
              进行投诉，我们将在确认本文链接指向的资源存在侵权后，立即删除相关介绍帖子！
            </View>
          </AtCard>
          <View className="ad">
            {/* @ts-ignore */}
            <ad
              unit-id="adunit-a51bed72a19360d9"
              ad-type="video"
              ad-theme="white"
            >
              {/* @ts-ignore */}
            </ad>
          </View>

          {downloadUrl?.length === 0 ? (
            ''
          ) : showDownloadDetail ? (
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
        <View className={`${prefix}__footer-left`}>
          {showTop && top === 1 && '置顶'}
        </View>
        <View className={`${prefix}__footer-right`}>
          <View className={`${prefix}__footer-item`}>
            <Image src={CommentIcon} mode="widthFix"></Image>
            {viewCount}
          </View>
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
