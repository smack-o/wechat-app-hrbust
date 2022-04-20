import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Image, Form } from '@tarojs/components'
import { IRootState } from '@/types'
import { AtInput, AtTextarea, AtButton, AtImagePicker } from 'taro-ui'
import { goPage, routes } from '@/utils/router'
import Taro from '@tarojs/taro'
import { APIS } from '@/services2'
import { showToast, withRequest } from '@/utils'
import { getHeader } from '@/utils/ajax/ajax'


// images
import newFnIcon from './res/new_fn_icon.png'
import touchMeIcon from './res/touch_me_icon.png'
import discoverIcon from './res/discover.png'


import './index.less'

type PropsFromState = ReturnType<typeof mapStateToProps>
type PropsFromDispatch = {}

type PageOwnProps = {}

type PageState = {
  to: string
  tel?: string
  content: string
  files: any[]
}

type IProps = PropsFromState & PropsFromDispatch & PageOwnProps


class Discover extends Component<IProps, PageState> {
  state = {
    to: '',
    tel: '',
    content: '',
    files: [],
  }

  componentDidShow() {}

  onLoad() {
    console.log(FormData)
  }
  onShow() {
    // Taro.getCurrentInstance()?.page?.getTabBar?.()
    // Taro.getCurrentInstance()?.page?.getTabBar().setData({
    //   selected: 1,
    // })
  }

  onInputChange = (key: keyof PageState, value) => {
    const state = {
      [key]: value
    } as PageState
    this.setState(state)
  }

  onSubmit = async () => {
    const { to, tel, content } = this.state

    let photos: string[] = []
    Taro.showLoading({
      title: '上传图片中...',
    })
    try {
      photos = await this.uploadFiles()
    } catch (error) {
      Taro.hideLoading()
      return
    }
    Taro.hideLoading()

    await withRequest(APIS.WallApi.apiWallPost)({
      to,
      tel,
      content,
      photos
    })
  }

  uploadFiles = async () => {
    const { files } = this.state
    const promises = files.map(async file => {
      const { url } = file

      const { data } = await Taro.uploadFile({
        url: `${process.env.PROXY_TARGET}/api/media`,
        filePath: url,
        name: 'file',
        header: getHeader(),
      })
      // console.log(JSON.parse(data))
      const res = JSON.parse(data)
      // if (res.code === 0) {
      //   return res.result.
      // }

      console.log(res)

      return res.result.id
    })

    return Promise.all(promises)
  }

  onFileChange = (files) => {
    console.log(files)
    this.setState({
      files
    })
  }

  render() {
    const { to, tel, content, files } = this.state
    return (
      <View className="discover-container">
        <AtInput
          name="to"
          title="表白对象"
          type="text"
          placeholder="请输入表白对象名称"
          value={to}
          onChange={e => this.onInputChange('to', e)}
        />
        <AtInput
          name="tel"
          title="表白对象手机号"
          type="text"
          placeholder="请输入表白对象名称"
          value={tel}
          onChange={e => this.onInputChange('tel', e)}
        />

        <AtTextarea
          placeholder="请输入表白对象名称"
          value={content}
          onChange={e => this.onInputChange('content', e)}
        />

        <AtImagePicker  files={files}
          onChange={this.onFileChange}
        ></AtImagePicker>
        <AtButton onClick={this.onSubmit}>提交</AtButton>
      </View>
    )
  }
}

const mapStateToProps = (state: IRootState) => ({
  user: state.user
})

export default connect<PropsFromState, PropsFromDispatch, PageOwnProps>(
  mapStateToProps
)(Discover)
