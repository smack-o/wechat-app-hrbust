import React, { useCallback, useState } from 'react'
import { View, Image } from '@tarojs/components'
import { AtModal, AtModalContent, AtModalHeader, AtInput, AtButton } from 'taro-ui'
import { getCaptcha } from '@/services/user'
import { cError } from '@/utils'

import './index.less'

type Props = {
  captchaImage: string
  onSubmit?: (value: string) => void
  isOpened: boolean
}

type IProps = Props

export default function CaptchaModal(props: IProps) {
  const { onSubmit, isOpened } = props

  const [captcha, setCaptcha] = useState<string>('')
  const [captchaImage, setCaptchaImage] = useState<string>('')
  const onInputChange = useCallback((value) => {
    setCaptcha(value)
  }, [])

  const onCaptchaClick = useCallback(async () => {
    const [err, res] = await cError(getCaptcha())

    !err && setCaptchaImage(res.data.captcha)
  }, [])

  const onConfirm = useCallback(() => {
    onSubmit && onSubmit(captcha)
    setCaptcha('')
  }, [onSubmit, captcha])

  return (
    <AtModal isOpened={isOpened} className="captcha-modal" closeOnClickOverlay={false}>
      <AtModalHeader>请输入验证码</AtModalHeader>
      {/* input 优先级最高，modal 隐藏了，input 也无法隐藏 */}
      {
        isOpened && <AtModalContent>
          <View className="dialog-body">
            <View className="input-wrapper">
              <AtInput
                name="value"
                title="验证码"
                type="text"
                value={captcha}
                onChange={onInputChange}
                placeholder="请输入验证码"
                placeholderClass="placeholder"
                className="captcha-input"
              >
                <Image className="captcha-image" onClick={onCaptchaClick} src={captchaImage || props.captchaImage} />
              </AtInput>
            </View>
            <View style="width: 160px; height: 50px">
            </View>
          </View>
          <AtButton className="login-button" disabled={!captcha} type="primary" onClick={onConfirm}>确定</AtButton>
        </AtModalContent>
      }
    </AtModal>
  )
}
