import React from 'react'
import { View, Image } from '@tarojs/components'
import cn from 'classnames'
import loadingImg from './res/loading.gif'

import './index.less'

type Props = {
  loadingStyle?: string,
  loading?: boolean,
}

type IProps = Props

export default function Loading(props: IProps) {
  const { loadingStyle = '', loading = false } = props
  if (!loading) {
    return null
  }
  return (
    <View className={cn('global-loading', loadingStyle === 'padding' ? 'loadingPadding' : 'loadingScreen')}>
      <Image className="image" src={loadingImg} />
      <View className="text">loading...</View>
    </View>
  )
}
