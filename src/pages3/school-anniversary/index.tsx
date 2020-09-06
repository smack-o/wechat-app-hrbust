import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Taro from '@tarojs/taro'
import { View, Image, Button, ScrollView, Canvas } from '@tarojs/components'
import { IRootState } from '@/types'
import { Cropper, withShare } from '@/components'
import cn from 'classnames'
import WeCropper from 'we-cropper'
// import { eventCenter, getCurrentInstance } from '@tarojs/taro'
import { saveImage } from '@/utils'

import bgImg from './res/bg.png'
import shareIcon from './res/share-icon.png'

import './index.less'


type PropsFromState = ReturnType<typeof mapStateToProps>

type PropsFromDispatch = {}

type PageOwnProps = {}

type PageState = {
  image: string,
  step: number, // 三步
  frameIndex: number,
  cropperImage: string,
  combineImage: string,
}

type IProps = PropsFromState & PropsFromDispatch & PageOwnProps

const { windowWidth } = Taro.getSystemInfoSync()

class SchoolAnniversary extends Component<IProps, PageState> {
  state: Readonly<PageState> = {
    image: '',
    step: 0,
    frameIndex: 0,
    cropperImage: '',
    combineImage: '',
  }

  componentDidMount() {
  }

  cropper: WeCropper

  onLoad() {
  }

  // 相机、相册
  chooseImage = () => {
    Taro.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: (res) => {
        const image = res.tempFilePaths[0]
        this.setState({
          image
        })
      },
    })
  }

  // 用户点击下一步
  nextStep = async () => {
    const nextStep = this.state.step + 1

    // 需要获取裁剪之后的图片
    if (nextStep === 1) {
      // @ts-ignore
      const path = await this.cropper.getCropperImage()
      this.setState({
        cropperImage: path
      })
    }

    // 合成图片
    if (nextStep === 2) {
      this.initCombineCanvas()
      return
    }

    // 用户点击保存图片
    if (nextStep === 3) {
      this.saveCombineImage()
      return
    }
    this.setState({
      step: nextStep,
    })
  }

  // 用户点击上一步
  prevStep = () => {
    const nextStep = this.state.step - 1
    this.setState({
      step: nextStep,
    })
  }

  // 合并图片
  initCombineCanvas = async () => new Promise((resolve) => {
    Taro.showLoading()
    const ctx = Taro.createCanvasContext('combineCanvas')
    const { cropperImage, frameIndex } = this.state
    const frameImage = require(`./res/avatar-frames/${frameIndex + 1}.png`).default

    ctx.drawImage(cropperImage, windowWidth / 2 - 150, 0, 300, 300)
    ctx.drawImage(frameImage, windowWidth / 2 - 150, 0, 300, 300)
    ctx.draw(false, () => {
      Taro.canvasToTempFilePath({
        x: windowWidth / 2 - 150,
        y: 0,
        height: 300,
        width: 300,
        canvasId: 'combineCanvas',
        success: (res) => {
          this.setState({
            combineImage: res.tempFilePath,
            step: 2
          }, resolve)
          Taro.hideLoading()
        },
        fail: (error) => {
          console.log('error', error)
          Taro.hideLoading()
        }
      })
    })
  })

  // 保存图片到本地
  saveCombineImage = () => {
    const { combineImage } = this.state
    saveImage(combineImage)
  }

  // 获取头像
  onGetUserInfo = (e) => {
    // 授权失败不允许登录
    if (/fail auth deny/.test(e.detail.errMsg)) {
      return
    }
    if (e.detail.userInfo) {
      Taro.setStorageSync('userInfo', e.detail.userInfo)
    }

    let { avatarUrl } = e.detail.userInfo

    if (avatarUrl.endsWith('132')) {
      avatarUrl = avatarUrl.substring(0, avatarUrl.length - 3)
      avatarUrl = `${avatarUrl}0`
    }
    this.setState({
      image: avatarUrl
    })
  }

  // cropper 加载完成
  onCropperReady = (cropper: WeCropper) => {
    this.cropper = cropper
  }

  // 切换头像框
  chooseFrame = (frameIndex: number) => {
    this.setState({
      frameIndex,
      step: 1, // 切换图片一定是步骤 1
    })
  }

  clearCanvas = () => {
    this.setState({
      image: ''
    })
  }

  render () {

    const { image, step, frameIndex, cropperImage } = this.state

    return (
      <View className="school-snniversary">
        <Image src={bgImg} className="bg-image" mode="widthFix" />
        <View className="cropper-wrapper">
          {(step === 1 || step === 2) && <Image src={cropperImage} className="frame" />}
          {(step === 1 || step === 2) && <Image src={require(`./res/avatar-frames/${frameIndex + 1}.png`).default} className="frame" />}
          {step === 0 && <Cropper src={image} onReady={this.onCropperReady} />}
        </View>
        {
          step === 1 && <ScrollView className="frames" scrollX>
            {
              Array(11).fill(0).map((_, index) => {
                return <Image className={cn('frame', {
                  active: index === frameIndex
                })} key={index} src={require(`./res/avatar-frames/${index + 1}.png`).default} onClick={() => this.chooseFrame(index)}
                ></Image>
              })
            }
          </ScrollView>
        }
        <View className="btn-wrapper">
          {
            step === 0 && <Fragment>
              <Button data-way="camera" openType="getUserInfo" onGetUserInfo={this.onGetUserInfo}>使用微信头像</Button>
              <Button data-way="album" onClick={this.chooseImage}>使用相机/相册</Button>
            </Fragment>
          }
          <Fragment>
            { step > 0 && <Button onClick={this.prevStep}>上一步</Button>}
            { step === 0 && <Button onClick={this.clearCanvas}>清空画布</Button>}
            <Button onClick={this.nextStep} disabled={!image}>{ step === 2 ? '保存图片' : '下一步'}</Button>
          </Fragment>
        </View>
        <Canvas
          type="33"
          canvasId="combineCanvas"
          // canvas-id="combine-canvas"
          className="combine-canvas"
          style="height:300px;;width:100%;"
        />
      </View>
    )
  }
}

const mapStateToProps = (state: IRootState) => ({
  user: state.user,
})

export default withShare({
  title: '70周年校庆头像',
  imageUrl: shareIcon,
})(connect<PropsFromState, PropsFromDispatch, PageOwnProps>(mapStateToProps)(SchoolAnniversary))
