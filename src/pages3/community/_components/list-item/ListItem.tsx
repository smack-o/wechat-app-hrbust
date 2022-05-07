import React, { ReactChild } from 'react'
import Avatar, { NickName } from '@/components/Avatar'
import { View, Image } from '@tarojs/components'
import { getCdnUrl } from '@/utils'
import Time from '@/components/Time'
import { UserState } from '@/redux/reducers/user'
import './ListItem.less'

type IProps = {
  onClick: () => void
  userInfo?: UserState['userInfo']
  showDot?: boolean
  time?: number | string
  content?: ReactChild
  rightContent?: ReactChild
  photo?: {
    key?: string
  }
  userId?: string
}

const prefix = 'community-list-item'
export default function ListItem(props: IProps) {
  const {
    userId,
    onClick,
    userInfo,
    showDot = false,
    time,
    content,
    rightContent,
    photo
  } = props

  return (
    <View className={prefix} onClick={onClick}>
      <Avatar
        className={`${prefix}-left`}
        avatarSize="70rpx"
        avatarUrl={userInfo?.avatarUrl}
        customAvatarUrl={userInfo?.customAvatarUrl}
        onClickType={userId ? 'jump' : undefined}
        _id={userId}
      ></Avatar>
      <View className={`${prefix}-center`}>
        <View className={`${prefix}-center__title`}>
          {showDot && <View className={`${prefix}-center__dot`}></View>}
          <NickName
            className={`${prefix}-center__name`}
            nickName={userInfo?.nickName}
            customName={userInfo?.customName}
          ></NickName>
        </View>
        <View className={`${prefix}-center__content`}>{content}</View>
        <Time
          className={`${prefix}-center__time`}
          type="relative"
          time={time}
        ></Time>
      </View>
      {photo?.key ? (
        <Image
          className={`${prefix}-right image`}
          mode="aspectFill"
          src={getCdnUrl(photo.key)}
        ></Image>
      ) : (
        <View className={`${prefix}-right`}>{rightContent}</View>
      )}
    </View>
  )
}
