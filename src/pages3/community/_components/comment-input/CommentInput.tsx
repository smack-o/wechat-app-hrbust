import React, { useCallback, useEffect, useRef } from 'react'
import { Input, View } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import FixBock from '@/components/fix-block'
import './CommentInput.less'

interface IProps {
  placeholder?: string
  onSubmit?: (value: string) => void
  currentIndex?: number
  onBlur?: () => void
}

export enum CommentType {
  /**
   * 表白墙评论
   */
  BrickComment = 0,
  /**
   * 卖舍友评论
   */
  MateComment = 1,
  /**
   * 评论回复
   */
  ReplyComment = 2
}

const prefix = 'comment-input'
export default function CommentInput(props: IProps) {
  const {
    placeholder = '快来撩一下~',
    onSubmit,
    currentIndex = -1,
    onBlur
  } = props

  const [value, setValue] = React.useState('')
  const ref = useRef()

  const onInput = useCallback(e => {
    setValue(e.target.value)
  }, [])

  // 切换回复 清空评论内容
  useEffect(() => {
    setValue('')
  }, [currentIndex])

  const onSubmitHandle = useCallback(async () => {
    await onSubmit?.(value)
    setValue('')
  }, [value, onSubmit])

  return (
    <FixBock bottom={0} height={110}>
      <View className={prefix}>
        <Input
          ref={ref}
          maxlength={100}
          placeholder={placeholder}
          className={`${prefix}__input`}
          value={value}
          onInput={onInput}
          placeholderClass={`${prefix}__input--placeholder`}
          focus={currentIndex >= 0}
          onBlur={onBlur}
          confirmHold
        ></Input>
        {/* {!!nickName ? (
          <Input
            ref={ref}
            maxlength={100}
            placeholder={placeholder}
            className={`${prefix}__input`}
            value={value}
            onInput={onInput}
            placeholderClass={`${prefix}__input--placeholder`}
            autoFocus
            onBlur={onBlur}
          ></Input>
        ) : (
          <Input
            ref={ref}
            maxlength={100}
            placeholder={placeholder}
            className={`${prefix}__input`}
            value={value}
            onInput={onInput}
            placeholderClass={`${prefix}__input--placeholder`}
          ></Input>
        )} */}
        <AtButton
          className={`${prefix}__button`}
          type="primary"
          size="small"
          onClick={onSubmitHandle}
        >
          发送
        </AtButton>
        {/* 111 */}
      </View>
    </FixBock>
  )
}