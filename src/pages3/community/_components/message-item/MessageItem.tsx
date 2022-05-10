import React, { useCallback, useMemo } from 'react'
import { APIS } from '@/services2'
import { View, Image, Text } from '@tarojs/components'
import { goPage } from '@/utils/router'
import { routes } from '@/app.config'
import likeIcon from '../../imgs/like.png'
import './MessageItem.less'
import ListItem from '../list-item'

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
   * 点赞评论
   */
  CommentLike = 'CommentLike' as any,
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
    data: { from, ext, createdAt, type, isRead, content: contentText }
  } = props

  // TODO: 各种消息类型的展示逻辑
  const content = useMemo(() => {
    if (type === TypeEnum.BrickLike) {
      return (
        <Text user-select className={`${prefix}-center__content-detail`}>
          <Image className="star-icon" src={likeIcon}></Image>赞了你发布的表白墙
        </Text>
      )
    } else if (type === TypeEnum.MateLike) {
      return (
        <Text user-select className={`${prefix}-center__content-detail`}>
          <Image className="star-icon" src={likeIcon}></Image>赞了你发布的卖舍友
        </Text>
      )
    } else if (type === TypeEnum.Comment) {
      return (
        <Text user-select className={`${prefix}-center__content-detail`}>
          {contentText}
        </Text>
      )
    } else if (type === TypeEnum.CommentLike) {
      return (
        <Text user-select className={`${prefix}-center__content-detail`}>
          <Image className="star-icon" src={likeIcon}></Image>赞了你的评论:{' '}
          {contentText}
        </Text>
      )
    }
    return '您有一条新消息'
  }, [contentText, type])

  // TODO: 各种消息类型的跳转逻辑
  const onMessageClick = useCallback(() => {
    if (type === TypeEnum.BrickLike) {
      goPage(`${routes.wallDetail}?id=${ext?.brickId}`)
    } else if (type === TypeEnum.MateLike) {
      goPage(`${routes.saleWallDetail}?id=${ext?.mateId}`)
    } else if (type === TypeEnum.Comment || type === TypeEnum.CommentLike) {
      if (ext?.brickId) {
        goPage(`${routes.wallDetail}?id=${ext?.brickId}`)
      } else if (ext?.mateId) {
        goPage(`${routes.saleWallDetail}?id=${ext?.mateId}`)
      }
    } else if (type === TypeEnum.Hot) {
      // goPage(`${routes.mateDetail}?id=${ext?.mateId}`)
    }
  }, [ext, type])

  return (
    <ListItem
      showDot={!isRead}
      onClick={onMessageClick}
      userInfo={from?.userInfo}
      photo={ext?.photo}
      content={content}
      time={createdAt}
      userId={from?._id}
    ></ListItem>
  )
}
