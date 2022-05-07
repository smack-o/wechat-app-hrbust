import React, { useCallback, useMemo, useState } from 'react'
import { Image, View } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import FixBock from '@/components/fix-block'
import { APIS } from '@/services2'
import Avatar, { NickName } from '@/components/Avatar'
import Time from '@/components/Time'
import CommentInput from '../comment-input'
import './CommentList.less'

interface IProps {
  list: GetApiResultType<typeof APIS.CommentApi.apiCommentBrickIdGet>
  onCommentClick?: (index: number) => void
  onCommentSubmit?: (value: string, currentIndex?: number) => void
}

const prefix = 'comment-list'
export default function CommentList(props: IProps) {
  const { list, onCommentClick, onCommentSubmit } = props
  // const [nickName, setNickName] = useState()
  const [currentIndex, setCurrentIndex] = useState(-1)

  const nickName = useMemo(() => {
    return currentIndex >= 0
      ? list?.[currentIndex].from?.userInfo?.customName ||
          list?.[currentIndex].from?.userInfo?.nickName
      : ''
  }, [currentIndex, list])

  const onCommentSubmitHandler = useCallback(
    async (value: string) => {
      await onCommentSubmit?.(value, currentIndex)
      setCurrentIndex(-1)
    },
    [onCommentSubmit, currentIndex]
  )

  if (!list || list?.length === 0) {
    return null
  }

  return (
    <View className={prefix}>
      {list.map((item, index) => {
        return (
          <View
            className={`${prefix}__item`}
            key={index}
            onClick={() => {
              setCurrentIndex(index)
            }}
          >
            <Avatar
              className={`${prefix}__item__avatar`}
              avatarSize="70rpx"
              customAvatarUrl={item.from?.userInfo?.customAvatarUrl}
              avatarUrl={item.from?.userInfo?.avatarUrl}
            ></Avatar>
            <View className={`${prefix}__item-right`}>
              <View className={`${prefix}__item__title`}>
                <NickName
                  className={`${prefix}__item__title__name`}
                  nickName={item.from?.userInfo?.nickName}
                  customName={item.from?.userInfo?.customName}
                ></NickName>
                <Time
                  className={`${prefix}__item__title__time`}
                  time={item.createdAt}
                  type="relative"
                ></Time>
              </View>
              <View className={`${prefix}__item__content`}>{item.content}</View>
            </View>
          </View>
        )
      })}
      <CommentInput
        onSubmit={onCommentSubmitHandler}
        placeholder={nickName ? `回复${nickName}` : '快来撩一下~'}
        currentIndex={currentIndex}
        onBlur={() => {
          setCurrentIndex(-1)
        }}
      ></CommentInput>
    </View>
  )
}
