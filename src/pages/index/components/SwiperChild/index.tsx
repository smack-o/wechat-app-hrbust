import React, { useCallback } from 'react'
import { View, Image } from '@tarojs/components'
import { goWebviewPage } from '@/utils/router'

export default function SwiperChild(props) {
  const { item, active } = props

  const linkToWebView = useCallback(() => {
    const { type, link } = item
    goWebviewPage(link, undefined, type)
  }, [item])
  return (
    <View
      className="slide-item"
      onClick={linkToWebView}
    >
      <Image
        src={item.image}
        className={active ? 'slide-curimage' : 'slide-image'}
      />
    </View>
  )
}
