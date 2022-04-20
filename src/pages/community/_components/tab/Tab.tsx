import React from 'react'
import cn from 'classnames'
import { View } from '@tarojs/components'

import './Tab.less'

interface ITabItem<Key> {
  key: Key;
  text: string;
}

export interface ITabProps<Key = string> {
  activeKey: Key;
  tabList: ITabItem<Key>[];
  children?: React.ReactNode;
  onChange?: (index: number, key?: Key, text?: string) => void;
  /** fix 距离顶部距离 */
  fixBlockTop?: number;
}

const prefix = 'community-tab'

export default function TopBar<Key>(props: ITabProps<Key>) {
  const { activeKey, tabList, onChange, children } = props

  return (
    <View className={prefix}>
        <View className={`${prefix}-title`}>
          {tabList.map((tabItem, index) => {
            const { key, text } = tabItem
            return (
              <View
                key={index}
                className={cn(`${prefix}__item`, {
                  current: activeKey === tabItem.key
                })}
                onClick={() => {
                  if (activeKey !== key) {
                    onChange?.(index, key, text)
                  }
                }}
              >
                {text}
              </View>
            )
          })}
        </View>
      {children && <View className={`${prefix}__content`}>{children}</View>}
    </View>
  )
}
