import React, { useEffect, useState } from 'react'
import { View, Image } from '@tarojs/components'
import { routes } from '@/app.config'
import Taro from '@tarojs/taro'
import FixBlock from '@/components/fix-block'
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
    key: 'wall',
    icon: wallIcon,
    selectIcon: wallSelectIcon,
    text: '表白墙'
  },
  {
    key: 'sale',
    icon: faceIcon,
    selectIcon: faceSelectIcon,
    text: '情侣脸'
  },
  {
    key: 'mine',
    icon: saleIcon,
    selectIcon: saleSelectIcon,
    text: '卖室友'
  },
  {
    key: 'mine',
    icon: mineIcon,
    selectIcon: mineSelectIcon,
    text: '我的'
  }
]

export interface IBottomBarProps {
  onChange?: (
    index: number,
    item: {
      key: string
      icon: string
      selectIcon: string
      text: string
    }
  ) => void
  current: number
}
export default function BottomBar(props: IBottomBarProps) {
  const { current: propsCurrent } = props
  const [current, setCurrent] = useState(0)
  const { onChange } = props

  useEffect(() => {
    setCurrent(propsCurrent)
  }, [propsCurrent])

  return (
    <FixBlock bottom={0}>
      <View className="bottom-bar">
        {barList.map((item, index) => {
          const active = current === index
          return (
            <View
              key={item.key}
              className={`bottom-bar__item ${active ? 'active' : ''}`}
              onClick={() => {
                if (index === 3) {
                  Taro.switchTab({ url: routes.account })
                  return
                }
                setCurrent(index)
                onChange?.(index, item)
              }}
            >
              <View className="bottom-bar__item-icon">
                <Image
                  src={active ? item.selectIcon : item.icon}
                  mode="widthFix"
                />
              </View>
              <View className="bottom-bar__item-text">{item.text}</View>
            </View>
          )
        })}
      </View>
    </FixBlock>
  )
}
