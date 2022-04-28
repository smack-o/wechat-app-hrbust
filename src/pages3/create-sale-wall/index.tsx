import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Input, Textarea, Picker } from '@tarojs/components'
import { IRootState } from '@/types'
import { AtButton, AtImagePicker } from 'taro-ui'
import { goPage, routes } from '@/utils/router'
import Taro from '@tarojs/taro'
import { APIS } from '@/services2'
import { showToast, withRequest, uploadFileToServer } from '@/utils'
import { File } from 'taro-ui/types/image-picker'

import './index.less'

type PropsFromState = ReturnType<typeof mapStateToProps>
type PropsFromDispatch = {}

type PageOwnProps = {}

type PageState = {
  name: string
  gender: number
  major: string
  description: string
  content?: string
  files: File[]
  fetching: boolean
}

type IProps = PropsFromState & PropsFromDispatch & PageOwnProps

const prefix = 'create-wall'
class CreateSaleWall extends Component<IProps, PageState> {
  state: PageState = {
    name: '',
    gender: 0,
    major: '',
    description: '',
    content: '',
    files: [],
    fetching: false
  }

  genderRange = ['男', '女']

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
    const { name, description, gender, major, content, files } = this.state

    // 部分前置条件
    let toastMsg = ''
    if (!name) {
      toastMsg = '请输入姓名'
    } else if (!major) {
      toastMsg = '请输入专业'
    } else if (!description) {
      toastMsg = '请输入对室友简介'
    } else if (!files.length) {
      toastMsg = '请上传至少一张照片'
    }

    if (toastMsg) {
      Taro.showToast({
        title: toastMsg,
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
      // TODO: 已经上传过的图片，不要重复上传 eg 出现错误重新提交的时候，现状是会重新上传
      try {
        photos = await this.uploadFiles()
      } catch (error) {
        Taro.hideLoading()
        this.changeFetching(false)
        return
      }
      Taro.hideLoading()
    }

    const [err, res] = await withRequest(APIS.SaleWallApi.apiSaleWallPost)({
      name,
      description,
      gender,
      major,
      content,
      photos: photos.length ? photos : undefined
    })

    this.changeFetching(false)

    if (!err && res?.id) {
      showToast({
        title: '发布成功',
        icon: 'success',
        finished: () => {
          // goPage(`${routes.saleWallDetail}?id=${res.id}`, Taro.redirectTo)
        }
      })
    }
  }

  uploadFiles = async () => {
    const { files } = this.state
    const promises = files.map(async file =>
      uploadFileToServer({
        url: file.url
      })
    )

    return Promise.all(promises)
  }

  onFileChange = (files: File[]) => {
    this.setState({
      files
    })
  }

  render() {
    const {
      name,
      gender,
      major,
      description,
      content,
      files,
      fetching
    } = this.state
    return (
      <View className={prefix}>
        <View className={`${prefix}__form-item`}>
          <View className={`${prefix}__form-item__title`}>名字*</View>
          <Input
            className={`${prefix}__form-item__input`}
            placeholder="名字"
            value={name}
            type="text"
            onInput={e => this.onInputChange('name', e)}
          ></Input>
        </View>
        <View className={`${prefix}__form-item`}>
          <View className={`${prefix}__form-item__title`}>性别*</View>
          <Picker
            className={`${prefix}__form-item__input`}
            value={gender}
            range={this.genderRange}
            onChange={e => {
              this.setState({
                gender: +e.detail.value
              })
            }}
          >
            {this.genderRange[gender]}
          </Picker>
        </View>

        <View className={`${prefix}__form-item`}>
          <View className={`${prefix}__form-item__title`}>专业*</View>
          <Input
            className={`${prefix}__form-item__input`}
            placeholder="专业"
            value={major}
            type="text"
            onInput={e => this.onInputChange('major', e)}
          ></Input>
        </View>

        <View className={`${prefix}__form-item`}>
          <View className={`${prefix}__form-item__title`}>
            对另一半的期望({content?.length}/100字)
          </View>
          <Textarea
            className={`${prefix}__form-item__textarea`}
            placeholder="请输入对另一半的期望（非必填）"
            value={content}
            autoHeight
            maxlength={100}
            onInput={e => this.onInputChange('content', e)}
          ></Textarea>
        </View>

        <View className={`${prefix}__form-item`}>
          <View className={`${prefix}__form-item__title`}>
            室友简介*({description.length}/100字)
          </View>
          <Textarea
            className={`${prefix}__form-item__textarea`}
            placeholder="请输入内容"
            value={description}
            autoHeight
            maxlength={100}
            onInput={e => this.onInputChange('description', e)}
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
            <View>添加室友照片*</View>
            <View>({files.length}/9)</View>
          </View>
        </View>

        <View className={`${prefix}__tips`}>
          <View className={`${prefix}__tips-title`}>*关于卖舍友</View>
          出售您的室友前请先征得本人同意哦，否则后果自负
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
)(CreateSaleWall)
