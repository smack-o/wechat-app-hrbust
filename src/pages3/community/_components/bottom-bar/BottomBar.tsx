import React, { useEffect, useState } from 'react'
import { View, Image } from '@tarojs/components'
import { routes } from '@/app.config'
import Taro from '@tarojs/taro'
import { IRootState } from '@/types'
import { connect } from 'react-redux'
import FixBlock from '@/components/fix-block'
import faceIcon from '@/assets/community-imgs/bar/face.png'
import faceSelectIcon from '@/assets/community-imgs/bar/face_selected.png'
import mineIcon from '@/assets/community-imgs/bar/mine.png'
import mineSelectIcon from '@/assets/community-imgs/bar/mine_selected.png'
import saleIcon from '@/assets/community-imgs/bar/sale.png'
import saleSelectIcon from '@/assets/community-imgs/bar/sale_selected.png'
import wallIcon from '@/assets/community-imgs/bar/wall.png'
import wallSelectIcon from '@/assets/community-imgs/bar/wall_selected.png'

import './BottomBar.less'
import Wall from '../wall'
import SaleWall from '../sale-wall'
import LoversFace from '../lovers-face'

export const barList = [
  {
    key: 'wall',
    icon: wallIcon,
    selectIcon: wallSelectIcon,
    text: '表白墙',
    component: Wall
  },
  {
    key: 'mine',
    icon: saleIcon,
    selectIcon: saleSelectIcon,
    component: SaleWall,
    text: '卖室友'
  },
  {
    key: 'sale',
    icon: faceIcon,
    selectIcon: faceSelectIcon,
    text: '情侣脸',
    component: LoversFace
  },
  {
    key: 'mine',
    icon: mineIcon,
    selectIcon: mineSelectIcon,
    text: '我的'
  }
]

type PropsFromState = ReturnType<typeof mapStateToProps>
type PropsFromDispatch = {}

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

type IProps = PropsFromState & PropsFromDispatch & IBottomBarProps

export function BottomBar(props: IProps) {
  const { current: propsCurrent } = props
  const [current, setCurrent] = useState(0)
  const { onChange, unreadCount } = props

  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: barList[propsCurrent].text
    })
    setCurrent(propsCurrent)
  }, [propsCurrent])

  return (
    <FixBlock bottom={0} height={100}>
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
                Taro.setNavigationBarTitle({
                  title: item.text
                })
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
              {index === 3 && unreadCount > 0 && (
                <View className="custom-tab-item-dot">
                  {unreadCount > 99 ? '99+' : unreadCount}
                </View>
              )}
            </View>
          )
        })}
      </View>
    </FixBlock>
  )
}

const mapStateToProps = (state: IRootState) => ({
  unreadCount: state.user.unreadCount
})

export default connect<PropsFromState, PropsFromDispatch, IBottomBarProps>(
  mapStateToProps
)(BottomBar)
