import React from 'react'
import { View } from '@tarojs/components'
import dayjs from 'dayjs'
import cn from 'classnames'
import Avatar from '@/components/Avatar'
import Time from '@/components/Time'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'
import './index.less'

dayjs.locale('zh-cn') // 全局使用

dayjs.extend(relativeTime)

const prefix = 'wall'

type UserInfo = {
  avatarUrl?: string
  nickName?: string
}
type Props = {
  publisher?: {
    userInfo?: UserInfo
    _id?: string
  }
  isPublisher?: boolean
  time?: string | number
  className?: string
  timeType?: 'relative' | 'absolute'
}

export default function PublisherTitle(props: Props) {
  const {
    publisher,
    time,
    className,
    timeType = 'absolute',
    isPublisher
  } = props

  return (
    <View className={cn(`${prefix}__publisher`, className)}>
      <Avatar
        {...publisher?.userInfo}
        onClickType="jump"
        _id={publisher?._id}
        isPublisher={isPublisher}
      ></Avatar>

      <Time time={time} type={timeType}></Time>
    </View>
  )
}
