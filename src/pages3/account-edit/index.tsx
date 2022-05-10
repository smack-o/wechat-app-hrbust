import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Input } from '@tarojs/components'
import { IRootState } from '@/types'
import { AtButton, AtImagePicker } from 'taro-ui'
import Taro from '@tarojs/taro'
import { APIS } from '@/services2'
import { getCdnUrl, showToast, uploadFileToServer, withRequest } from '@/utils'
import { File } from 'taro-ui/types/image-picker'
import { bindActionCreators, Dispatch } from 'redux'
import { updateUserInfo } from '@/redux/actions/user'

import './index.less'

type PropsFromState = ReturnType<typeof mapStateToProps>
type PropsFromDispatch = ReturnType<typeof mapDispatchToProps>

type PageOwnProps = {}

type PageState = {
  name: string
  files: (File & { uploaded?: boolean; isNotTmpFile?: boolean; id?: string })[]
  fetching: boolean
}

type IProps = PropsFromState & PropsFromDispatch & PageOwnProps

const prefix = 'account-edit'
class AccountEdit extends Component<IProps, PageState> {
  state: PageState = {
    name: '',
    files: [],
    fetching: false
  }

  avatar?: string

  async componentDidMount() {
    await this.props.user.getUserInfoPromise
    const {
      user: {
        userInfo: { customName, nickName, customAvatarUrl, avatarUrl }
      }
    } = this.props

    this.avatar = customAvatarUrl ? getCdnUrl(customAvatarUrl) : avatarUrl

    this.setState({
      name: customName || nickName || '',
      files: this.avatar ? [{ url: this.avatar, uploaded: true }] : []
    })
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
    const { name, files } = this.state

    this.changeFetching(true)

    let photos: string[] = []

    if (files.length > 0 && files[0].url !== this.avatar) {
      Taro.showLoading({
        title: '上传图片中...'
      })

      try {
        photos = await this.uploadFiles()
      } catch (error) {
        console.log(error, 'error')
        Taro.hideLoading()
        this.changeFetching(false)
        return
      }
      Taro.hideLoading()
    }

    const [err, res] = await withRequest(APIS.UserApi.apiUserPut)({
      customName: name || undefined,
      customAvatarUrl: photos.length ? photos[0] : undefined
    })

    this.changeFetching(false)

    if (!err && res?.userInfo) {
      this.props.updateUserInfo({
        userInfo: res.userInfo
      })
      showToast({
        title: '修改成功',
        icon: 'success',
        finished: () => {
          Taro.navigateBack()
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
          url: file.url,
          isNotTmpFile: file.isNotTmpFile
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

  getUserInfo = () => {
    wx.getUserProfile({
      desc: '用于理工喵信息展示', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: async res => {
        console.log(res, 'res')
        this.setState({
          name: res.userInfo.nickName,
          files: [{ url: res.userInfo.avatarUrl, isNotTmpFile: true }]
        })
        // const [err] = await withRequest(APIS.UserApi.apiUserWxLoginPost)({
        //   iv: res.iv,
        //   encryptedData: res.encryptedData
        // })
        // if (!err) {
        //   goPage(routes.login)
        // }
      }
    })
  }

  render() {
    const { name, files, fetching } = this.state
    return (
      <View className={prefix}>
        <View className={`${prefix}__form-item`}>
          <View className={`${prefix}__form-item__title`}>
            修改昵称({name.length}/10)
          </View>
          <Input
            maxlength={10}
            className={`${prefix}__form-item__input`}
            placeholder="请输入新昵称(非必填)"
            value={name}
            type="text"
            onInput={e => this.onInputChange('name', e)}
          ></Input>
        </View>

        <View className={`${prefix}__form-item`}>
          <View className={`${prefix}__form-item__title`}>修改头像</View>
          <View className={`${prefix}__form-item__picker`}>
            <AtImagePicker
              files={files}
              onChange={this.onFileChange}
              length={1}
              count={1}
              showAddBtn={files.length < 1}
            ></AtImagePicker>
          </View>
          <View className={`${prefix}__form-item__image-picker-message`}>
            <View>添加图片</View>
            <View>({files.length}/1)</View>
          </View>
        </View>

        <View className={`${prefix}__tips`}>
          <View className={`${prefix}__tips-title`}>*关于头像与昵称</View>
          社区内发言、点赞、评论均会使用头像、若您没有修改昵称与头像，则默认使用微信昵称与头像。
        </View>
        <View className={`${prefix}__buttons`}>
          <AtButton
            type="secondary"
            className={`${prefix}__button1`}
            onClick={this.getUserInfo}
          >
            使用微信昵称头像
          </AtButton>
          <AtButton
            type="primary"
            onClick={this.onSubmit}
            className={`${prefix}__button`}
            loading={fetching}
            disabled={
              !name && (files.length === 0 || files[0]?.url === this.avatar)
            }
          >
            确认修改
          </AtButton>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state: IRootState) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ updateUserInfo }, dispatch)

export default connect<PropsFromState, PropsFromDispatch, PageOwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(AccountEdit)
