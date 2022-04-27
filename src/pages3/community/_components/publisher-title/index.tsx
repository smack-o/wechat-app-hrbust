import React from 'react'
import { View, Image } from '@tarojs/components'
import dayjs from 'dayjs'
import cn from 'classnames'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'
import './index.less'

dayjs.locale('zh-cn') // 全局使用

dayjs.extend(relativeTime)

const prefix = 'wall'

type UserInfo = {
  avatarUrl: string
  nickName: string
}
type Props = {
  publisher?: {
    userInfo?: UserInfo
    _id: string
  }
  time?: string | number
  className?: string
}

export function Avatar(
  props: UserInfo & {
    className?: string
  }
) {
  const { avatarUrl, nickName, className } = props
  return (
    <View className={cn(`${prefix}__publisher-left`, className)}>
      <Image className={`${prefix}__publisher-avatar`} src={avatarUrl}></Image>
      <View className={`${prefix}__publisher-name`}>{nickName}</View>
    </View>
  )
}

export function Time(props: { time?: string | number; className?: string }) {
  const { time, className } = props
  if (!time) {
    return null
  }
  return (
    <View className={cn(`${prefix}__publisher-name`, className)}>
      <View className={`${prefix}__publisher-time`}>
        {dayjs(time).fromNow()}
      </View>
    </View>
  )
}

export default function PublisherTitle(props: Props) {
  const { publisher, time, className } = props
  return (
    <View className={cn(`${prefix}__publisher`, className)}>
      <Avatar
        avatarUrl={publisher?.userInfo?.avatarUrl || ''}
        nickName={publisher?.userInfo?.nickName || ''}
      ></Avatar>

      <Time time={time}></Time>
    </View>
  )
}
