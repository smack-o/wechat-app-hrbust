import React from 'react'
import { View } from '@tarojs/components'
import { Wxml2canvas } from '@/components'
import getData from './demo.js'

import './index.less'

const { wxml, style, height } = getData()

export default function GradeShare() {
  return (
    <View className="wrapper">
      <Wxml2canvas width="375px" wxml={wxml} style={style} height={height + 'px'}></Wxml2canvas>
    </View>
  )
}
