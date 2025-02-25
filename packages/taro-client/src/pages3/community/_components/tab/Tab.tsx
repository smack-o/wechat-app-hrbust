import React from 'react'
import cn from 'classnames'
import { View } from '@tarojs/components'
// import FixBlock from '@/components/fix-block'

import './Tab.less'

interface ITabItem<Key> {
  key: Key
  text?: string
  render?: () => React.ReactNode
}

export interface ITabProps<Key = string> {
  currentIndex: number
  tabList: ITabItem<Key>[]
  children?: React.ReactNode
  onChange?: (index: number, key?: Key, text?: string) => void
  /** fix 距离顶部距离 */
  fixBlockTop?: number
  /** 点击相同 tab 是否有响应 */
  canClickSameTab?: boolean
}

const prefix = 'community-tab'

export default function TopBar<Key>(props: ITabProps<Key>) {
  const {
    currentIndex,
    tabList,
    onChange,
    children,
    canClickSameTab = false
  } = props

  return (
    <View className={prefix}>
      {/* <FixBlock top={0}> */}
      <View className={`${prefix}-title`}>
        {tabList.map((tabItem, index) => {
          const { key, text, render } = tabItem
          return (
            <View
              key={index}
              className={cn(`${prefix}__item`, {
                current: currentIndex === index
              })}
              onClick={() => {
                if (currentIndex !== index || canClickSameTab) {
                  onChange?.(index, key, text)
                }
              }}
            >
              {render ? render() : text}
              {currentIndex === index && (
                <View className={`${prefix}-active-bar`}></View>
              )}
            </View>
          )
        })}
      </View>
      {/* </FixBlock> */}
      {children && <View className={`${prefix}__content`}>{children}</View>}
    </View>
  )
}
