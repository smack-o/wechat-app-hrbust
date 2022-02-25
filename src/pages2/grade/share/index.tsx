import React from 'react'
import { View } from '@tarojs/components'
import { Wxml2canvas } from '@/components'
import { AtButton } from 'taro-ui'
import { saveImage } from '@/utils'
import getData from './demo.js'

import './index.less'


export default function GradeShare() {

  const { wxml, style, height } = getData()
  let imageSrc = ''

  return (
    <View className="share-grade">
      <Wxml2canvas width="375px" wxml={wxml} style={style} height={height + 'px'} onImageLoaded={(url) => { imageSrc = url }}></Wxml2canvas>
      <AtButton className="extra-button" type="primary" onClick={() => saveImage(imageSrc)}>保存海报</AtButton>
    </View>
  )
}
