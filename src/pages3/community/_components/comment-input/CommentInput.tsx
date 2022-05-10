import React, { useCallback, useRef } from 'react'
import { Input, View } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import FixBock from '@/components/fix-block'
import { requestSubscribeMessage } from '@/utils'
import './CommentInput.less'

interface IProps {
  placeholder?: string
  onSubmit?: (value: string) => void
  currentIndex?: number
  onBlur?: () => void
  isReply?: boolean
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
    isReply = false,
    onBlur
  } = props

  const [value, setValue] = React.useState('')
  const ref = useRef()

  const onInput = useCallback(e => {
    setValue(e.target.value)
  }, [])

  const onSubmitHandle = useCallback(async () => {
    await requestSubscribeMessage()

    await onSubmit?.(value)
    setValue('')
  }, [onSubmit, value])

  const onBlurHandler = useCallback(() => {
    // 延迟清除数据
    setTimeout(() => {
      setValue('')
      onBlur?.()
    }, 300)
  }, [onBlur])

  console.log(isReply, 'isReply')
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
          focus={isReply}
          onBlur={onBlurHandler}
          confirmHold
          adjustPosition
        ></Input>
        <AtButton
          className={`${prefix}__button`}
          type="primary"
          size="small"
          onClick={onSubmitHandle}
          // disabled={!value}
        >
          发送
        </AtButton>
        {/* 111 */}
      </View>
    </FixBock>
  )
}
