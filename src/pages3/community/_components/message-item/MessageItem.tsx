import React, { Fragment, useCallback, useMemo } from 'react'
import Avatar, { NickName } from '@/components/Avatar'
import { APIS } from '@/services2'
import { View, Image } from '@tarojs/components'
import { getCdnUrl } from '@/utils'
import Time from '@/components/Time'
import { goPage } from '@/utils/router'
import { routes } from '@/app.config'
import likeIcon from '../../imgs/like.png'
import './MessageItem.less'

type IProps = {
  data: GetApiResultType<typeof APIS.MessageApi.apiMessageListGet>[0]
}

export enum TypeEnum {
  /**
   * `BrickLike` 点赞表白墙
   */
  BrickLike = 'BrickLike' as any,
  /**
   * `MateLike` 点赞卖舍友
   */
  MateLike = 'MateLike' as any,
  /**
   * `Comment` 点赞评论
   */
  Comment = 'Comment' as any,
  /**
   * `Hot` 热门
   */
  Hot = 'Hot' as any
}

const prefix = 'message-item'
export default function MessageItem(props: IProps) {
  const {
    data: { from, ext, createdAt, type, isRead }
  } = props

  // TODO: 各种消息类型的展示逻辑
  const content = useMemo(() => {
    if (type === TypeEnum.BrickLike) {
      return (
        <View className={`${prefix}-center__content-detail`}>
          <Image className="icon" src={likeIcon}></Image>赞了这条表白墙动态
        </View>
      )
    } else if (type === TypeEnum.MateLike) {
      return (
        <View className={`${prefix}-center__content-detail`}>
          <Image className="icon" src={likeIcon}></Image>赞了这条卖舍友动态
        </View>
      )
    }
    return '您有一条新消息'
  }, [type])

  // TODO: 各种消息类型的跳转逻辑
  const onMessageClick = useCallback(() => {
    if (type === TypeEnum.BrickLike) {
      goPage(`${routes.wallDetail}?id=${ext?.brickId}`)
    } else if (type === TypeEnum.MateLike) {
      goPage(`${routes.saleWallDetail}?id=${ext?.mateId}`)
    } else if (type === TypeEnum.Comment) {
      // goPage(`${routes.mateDetail}?id=${ext?.mateId}`)
    } else if (type === TypeEnum.Hot) {
      // goPage(`${routes.mateDetail}?id=${ext?.mateId}`)
    }
  }, [ext, type])

  return (
    <View className={prefix} onClick={onMessageClick}>
      <Avatar
        className={`${prefix}-left`}
        avatarSize="70rpx"
        avatarUrl={from?.userInfo?.avatarUrl}
        customAvatarUrl={from?.userInfo?.customAvatarUrl}
      ></Avatar>
      <View className={`${prefix}-center`}>
        <View className={`${prefix}-center__title`}>
          {!isRead && <View className={`${prefix}-center__dot`}></View>}
          <NickName
            className={`${prefix}-center__name`}
            nickName={from?.userInfo?.nickName}
            customName={from?.userInfo?.customName}
          ></NickName>
        </View>
        <View className={`${prefix}-center__content`}>{content}</View>
        <Time
          className={`${prefix}-center__time`}
          type="relative"
          time={createdAt}
        ></Time>
      </View>
      {ext?.photo ? (
        <Image
          className={`${prefix}-right`}
          mode="aspectFill"
          src={getCdnUrl(ext.photo.key)}
        ></Image>
      ) : (
        <View className={`${prefix}-right`}></View>
      )}
    </View>
  )
}
