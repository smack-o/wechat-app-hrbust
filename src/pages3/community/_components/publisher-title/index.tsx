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

export default function PublisherTitle(props: Props) {
  const { publisher, time, className } = props

  return (
    <View className={cn(`${prefix}__publisher`, className)}>
      <Avatar {...publisher?.userInfo}></Avatar>

      <Time time={time}></Time>
    </View>
  )
}