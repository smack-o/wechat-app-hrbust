import React, { useCallback, useEffect } from 'react'
import { View, Image } from '@tarojs/components'
import { goWebviewPage } from '@/utils/router'
import ImageCache from '@/components/ImageCache'

export default function SwiperChild(props) {
  const { item, active } = props

  const linkToWebView = useCallback(() => {
    const { type, link } = item
    goWebviewPage(link, undefined, type)
  }, [item])

  return (
    <View className="slide-item" onClick={linkToWebView}>
      <ImageCache
        src={item.image}
        className={active ? 'slide-curimage' : 'slide-image'}
      />
    </View>
  )
}
