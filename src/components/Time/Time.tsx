import React from 'react'
import { View } from '@tarojs/components'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'
import './Time.less'

dayjs.locale('zh-cn') // 全局使用

dayjs.extend(relativeTime)

const prefix = 'component-time'

export default function Time(props: {
  time?: string | number
  className?: string
  type?: 'relative' | 'absolute'
}) {
  const { time, className = '', type = 'absolute' } = props
  if (!time) {
    return null
  }
  return (
    <View className={`${prefix} ${className}`}>
      {type === 'absolute'
        ? dayjs(time).fromNow()
        : dayjs(time).format('YYYY年MM月DD日 HH:mm')}
    </View>
  )
}
