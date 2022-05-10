import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Input, Textarea } from '@tarojs/components'
import { IRootState } from '@/types'
import { AtButton, AtImagePicker } from 'taro-ui'
import { goPage, routes } from '@/utils/router'
import Taro from '@tarojs/taro'
import { APIS } from '@/services2'
import {
  requestSubscribeMessage,
  showToast,
  uploadFileToServer,
  withRequest
} from '@/utils'
import { File } from 'taro-ui/types/image-picker'

import './index.less'

type PropsFromState = ReturnType<typeof mapStateToProps>
type PropsFromDispatch = {}

type PageOwnProps = {}

type PageState = {
  to: string
  tel?: string
  content: string
  files: (File & { uploaded?: boolean; id?: string })[]
  fetching: boolean
}

type IProps = PropsFromState & PropsFromDispatch & PageOwnProps

const prefix = 'create-wall'
class CreateWall extends Component<IProps, PageState> {
  state: PageState = {
    to: '',
    tel: '',
    content: '',
    files: [],
    fetching: false
  }

  onInputChange = (key: keyof PageState, e) => {
    const state = {
      [key]: e.target.value
    } as PageState
    this.setState(state)
  }

  changeFetching = (fetching: boolean) => {
    this.setState({
      fetching
    })
  }

  onSubmit = async () => {
    const { to, tel, content, files } = this.state

    await requestSubscribeMessage()

    if (!content) {
      Taro.showToast({
        title: '请输入内容',
        icon: 'none'
      })
      return
    }

    this.changeFetching(true)

    let photos: string[] = []

    if (files.length > 0) {
      Taro.showLoading({
        title: '上传图片中...'
      })
      try {
        photos = await this.uploadFiles()
      } catch (error) {
        Taro.hideLoading()
        this.changeFetching(false)
        return
      }
      Taro.hideLoading()
    }

    const [err, res] = await withRequest(APIS.WallApi.apiWallPost)({
      to,
      tel,
      content,
      photos: photos.length ? photos : undefined
    })

    this.changeFetching(false)

    if (!err && res?.id) {
      showToast({
        title: '发布成功',
        icon: 'success',
        finished: () => {
          goPage(`${routes.wallDetail}?id=${res.id}`, Taro.redirectTo)
        }
      })
    }
  }

  uploadFiles = async () => {
    const { files } = this.state

    const promises = files.map(async file => {
      if (!file.uploaded) {
        file.uploaded = true
        file.id = await uploadFileToServer({
          url: file.url
        })
      }
      return file
    })

    const newFiles = await Promise.all(promises)

    this.setState({
      files: newFiles
    })

    return newFiles.reduce((pre, item) => {
      if (item.id) {
        pre.push(item.id)
      }
      return pre
    }, [] as string[])
  }

  onFileChange = (files: File[]) => {
    this.setState({
      files
    })
  }

  render() {
    const { to, tel, content, files, fetching } = this.state
    return (
      <View className={prefix}>
        <View className={`${prefix}__form-item`}>
          <View className={`${prefix}__form-item__title`}>表白对象</View>
          <Input
            className={`${prefix}__form-item__input`}
            placeholder="请输入表白对象名称(非必填)"
            value={to}
            type="text"
            onInput={e => this.onInputChange('to', e)}
          ></Input>
        </View>

        <View className={`${prefix}__form-item`}>
          <View className={`${prefix}__form-item__title`}>表白对象手机号</View>
          <Input
            className={`${prefix}__form-item__input`}
            placeholder="请输入表白对象手机号(非必填)"
            value={tel}
            type="text"
            onInput={e => this.onInputChange('tel', e)}
          ></Input>
        </View>

        <View className={`${prefix}__form-item`}>
          <View className={`${prefix}__form-item__title`}>内容*</View>
          <Textarea
            className={`${prefix}__form-item__textarea`}
            placeholder="请输入内容"
            value={content}
            // type="text"
            autoHeight
            maxlength={200}
            onInput={e => this.onInputChange('content', e)}
          ></Textarea>
        </View>

        <View className={`${prefix}__form-item`}>
          <AtImagePicker
            files={files}
            onChange={this.onFileChange}
            length={3}
            count={9}
            showAddBtn={files.length < 9}
          ></AtImagePicker>
          <View className={`${prefix}__form-item__image-picker-message`}>
            <View>添加照片</View>
            <View>({files.length}/9)</View>
          </View>
        </View>

        <View className={`${prefix}__tips`}>
          <View className={`${prefix}__tips-title`}>*关于表白墙</View>
          您可选填您所表白的对象的手机号，在您提交表白信息后，系统会以短信的形式向他发送一则消息，通知TA登录该小程序查看您对TA的表白；TA只需登录该小程序在表白墙中搜索自己的手机号码即可查看表白信息。每天只能发送3条短信表白墙。
        </View>
        <AtButton
          type="primary"
          onClick={this.onSubmit}
          className={`${prefix}__button`}
          loading={fetching}
        >
          发表
        </AtButton>
      </View>
    )
  }
}

const mapStateToProps = (state: IRootState) => ({
  user: state.user
})

export default connect<PropsFromState, PropsFromDispatch, PageOwnProps>(
  mapStateToProps
)(CreateWall)
