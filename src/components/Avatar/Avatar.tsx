import React from 'react'
import { View, Image } from '@tarojs/components'
import cn from 'classnames'
import { UserState } from '@/redux/reducers/user'
import { getCdnUrl } from '@/utils'
import './Avatar.less'

const prefix = 'component-avatar'

export default function Avatar(
  props: UserState['userInfo'] & {
    className?: string
    avatarSize?: string
  }
) {
  const {
    avatarUrl = '',
    customAvatarUrl,
    customName,
    nickName,
    className,
    avatarSize = '70rpx'
  } = props

  const name = customName || nickName
  const avatar = customAvatarUrl ? getCdnUrl(customAvatarUrl.key) : avatarUrl
  return (
    <View className={cn(prefix, className)}>
      <Image
        className={`${prefix}__image`}
        src={avatar}
        mode="aspectFill"
        style={{
          width: avatarSize,
          height: avatarSize
        }}
      ></Image>
      {name && <View className={`${prefix}__name`}>{name}</View>}
    </View>
  )
}
