import React, { useCallback } from 'react'
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
    onClick?: () => void
    onClickType?: 'preview' | 'jump'
  }
) {
  const {
    avatarUrl = '',
    customAvatarUrl,
    customName,
    nickName,
    className,
    avatarSize = '70rpx',
    onClick,
    onClickType
  } = props

  const name = customName || nickName
  const avatar = customAvatarUrl ? getCdnUrl(customAvatarUrl.key) : avatarUrl

  const onAvatarClick = useCallback(
    e => {
      if (!onClick && !onClickType) {
        return
      }
      e.stopPropagation()
      if (onClickType === 'preview') {
        wx.previewMedia({
          current: 0,
          sources: [
            {
              url: avatar,
              type: 'image'
            }
          ],
          showmenu: true
        })
      } else if (onClickType === 'jump') {
        // TODO: 跳转到个人主页
      } else {
        onClick?.()
      }
    },
    [avatar, onClick, onClickType]
  )

  return (
    <View className={cn(prefix, className)} onClick={onAvatarClick}>
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
