import React, { useCallback } from 'react'
import { View, Image } from '@tarojs/components'
import cn from 'classnames'
import { UserState } from '@/redux/reducers/user'
import { getCdnUrl } from '@/utils'
import { goPage, routes } from '@/utils/router'
import './Avatar.less'

const prefix = 'component-avatar'

export function NickName(props: {
  className?: string
  customName?: string
  nickName?: string
  isPublisher?: boolean
}) {
  const { customName, nickName, className = '' } = props
  const name = customName || nickName
  return name ? (
    <View className={`${prefix}__name ${className}`}>
      {name}
      {/* {isPublisher ? '(我)' : ''} */}
    </View>
  ) : null
}

export default function Avatar(
  props: UserState['userInfo'] & {
    className?: string
    avatarSize?: string
    onClick?: () => void
    onClickType?: 'preview' | 'jump'
    isPublisher?: boolean
  }
) {
  const {
    _id,
    isPublisher,
    avatarUrl = '',
    customAvatarUrl,
    customName,
    nickName,
    className,
    avatarSize = '70rpx',
    onClick,
    onClickType
  } = props

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
        goPage(`${routes.otherAccount}?id=${_id}`)
      } else {
        onClick?.()
      }
    },
    [_id, avatar, onClick, onClickType]
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
      <NickName
        customName={customName}
        nickName={nickName}
        isPublisher={isPublisher}
      ></NickName>
    </View>
  )
}
