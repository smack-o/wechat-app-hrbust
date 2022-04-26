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

type Props = {
  publisher?: {
    userInfo?: {
      avatarUrl: string
      nickName: string
    }
    _id: string
  }
  time?: string | number
  className?: string
}

export default function PublisherTitle(props: Props) {
  const { publisher, time, className } = props
  return (
    <View className={cn(`${prefix}__publisher`, className)}>
      <View className={`${prefix}__publisher-left`}>
        <Image
          className={`${prefix}__publisher-avatar`}
          src={publisher?.userInfo?.avatarUrl || ''}
        ></Image>
        <View className={`${prefix}__publisher-name`}>
          {publisher?.userInfo?.nickName}
        </View>
      </View>
      {time && (
        <View className={`${prefix}__publisher-time`}>
          {dayjs(time).fromNow()}
        </View>
      )}
    </View>
  )
}
