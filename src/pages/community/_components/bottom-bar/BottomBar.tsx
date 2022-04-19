import React, { useState } from 'react'
import { View, Image } from '@tarojs/components'
import faceIcon from '../../imgs/bar/face.png'
import faceSelectIcon from '../../imgs/bar/face_selected.png'
import mineIcon from '../../imgs/bar/mine.png'
import mineSelectIcon from '../../imgs/bar/mine_selected.png'
import saleIcon from '../../imgs/bar/sale.png'
import saleSelectIcon from '../../imgs/bar/sale_selected.png'
import wallIcon from '../../imgs/bar/wall.png'
import wallSelectIcon from '../../imgs/bar/wall_selected.png'

import './BottomBar.less'

const barList = [
  {
    icon: wallIcon,
    selectIcon: wallSelectIcon,
    text: '表白墙'
  },
  {
    icon: faceIcon,
    selectIcon: faceSelectIcon,
    text: '情侣脸'
  },
  {
    icon: saleIcon,
    selectIcon: saleSelectIcon,
    text: '卖室友'
  },
  {
    icon: mineIcon,
    selectIcon: mineSelectIcon,
    text: '我的'
  }
]
export default function BottomBar() {
  const [current, setCurrent] = useState(0)

  return (
    <View className="bottom-bar">
      {
        barList.map((item, index) => {
          return (
            <View
              key={index}
              className={`item ${current === index ? 'active' : ''}`}
              onClick={() => {
                setCurrent(index)
              }}
            >
              <View className="icon">
                <Image src={item.icon} mode="widthFix" />
              </View>
              <View className="text">{item.text}</View>
            </View>
          )
        })
      }
      <View className="info"></View>
    </View>
  )
}
