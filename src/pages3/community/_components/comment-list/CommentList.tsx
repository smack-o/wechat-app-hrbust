import React, { Fragment, useCallback, useMemo, useState } from 'react'
import { View } from '@tarojs/components'
import { APIS } from '@/services2'
import Avatar, { NickName } from '@/components/Avatar'
import Time from '@/components/Time'
import CommentInput from '../comment-input'
import './CommentList.less'

interface IProps {
  list: GetApiResultType<typeof APIS.CommentApi.apiCommentBrickIdGet>
  onCommentSubmit?: (value: string, currentIndex?: number) => void
}

const prefix = 'comment-list'
export default function CommentList(props: IProps) {
  const { list = [], onCommentSubmit } = props

  const [currentIndex, setCurrentIndex] = useState(-1)

  const nickName = useMemo(() => {
    return currentIndex >= 0
      ? list?.[currentIndex]?.from?.userInfo?.customName ||
          list?.[currentIndex]?.from?.userInfo?.nickName
      : ''
  }, [currentIndex, list])

  const onCommentSubmitHandler = useCallback(
    async (value: string) => {
      await onCommentSubmit?.(value, currentIndex)
      setCurrentIndex(-1)
    },
    [onCommentSubmit, currentIndex]
  )

  return (
    <Fragment>
      <View className={prefix}>
        {list.length !== 0 ? (
          list.map((item, index) => {
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
                  <View className={`${prefix}__item__content`}>
                    {item.content}
                  </View>
                </View>
              </View>
            )
          })
        ) : (
          <View>暂无评论</View>
        )}
      </View>
      <CommentInput
        onSubmit={onCommentSubmitHandler}
        placeholder={nickName ? `回复${nickName}` : '快来撩一下~'}
        currentIndex={currentIndex}
        onBlur={() => {
          setCurrentIndex(-1)
        }}
      ></CommentInput>
    </Fragment>
  )
}
