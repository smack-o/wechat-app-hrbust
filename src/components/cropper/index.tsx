import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import WeCropper from 'we-cropper'
import { Canvas, View } from '@tarojs/components'

type Props = {
  options: any
  src: string
  onReady: (cropper: WeCropper) => void
}

type State = {}

const device = Taro.getSystemInfoSync()

const width = device.windowWidth
const height = device.windowWidth

const defaultOptions = {
  id: 'cropper',
  targetId: 'targetCropper',
  pixelRatio: device.pixelRatio,
  width,
  height,
  scale: 2.5,
  zoom: 8,
  cut: {
    x: (width - 300) / 2,
    y: (height - 300) / 2,
    width: 300,
    height: 300,
  },
  boundStyle: {
    color: '#04b00f',
    mask: 'rgba(0,0,0,0.1)',
    lineWidth: 1,
  },
}

export default class Cropper extends Component<Props, State> {
  static defaultProps = {
    options: defaultOptions,
  }

  async componentDidMount() {
    await this.init()

    this.props.onReady(this.cropper)
    const { src } = this.props
    if (src) {
      this.cropper.pushOrign(src)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.src !== this.props.src) {
      this.cropper.removeImage()
      this.pushOrign(nextProps.src)
    }
  }

  cropper: WeCropper

  init = () => {
    return new Promise((resolve) => {
      const { options } = this.props
      const { id, targetId } = options
      const option = {
        ...options,
        ctx: Taro.createCanvasContext(id),
        targetCtx: Taro.createCanvasContext(targetId),
      }

      this.cropper = new WeCropper(option)
        .on('ready', (ctx) => {
          console.info('on crooper ready')
          resolve()
          // this.cropper.pushOrign('https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKRkuxbeB7jJuFGnuksXL01xjWMQEkaLyTaBFpy2hmiaxBl2apZrMM0NgiaicRZMiaLWPscyKIJwczj0w/132')
        })
        .on('beforeImageLoad', (ctx) => {
          console.info('before picture loaded, i can do something')
          console.info('current canvas context:', ctx)
          // Taro.showToast({
          //   title: '上传中',
          //   icon: 'loading',
          //   duration: 20000,
          // })
          Taro.showLoading()
        })
        .on('imageLoad', (ctx) => {
          console.info('picture loaded')
          console.info('current canvas context:', ctx)
          // Taro.hideToast()
          Taro.hideLoading()
        })
    })
  }

  // 这里是一个自定义方法
  touchStart = (e) => {
    this.cropper.touchStart(e)
  }

  touchMove = (e) => {
    this.cropper.touchMove(e)
  }

  touchEnd = (e) => {
    this.cropper.touchEnd(e)
  }

  pushOrign = (src) => {
    this.cropper.pushOrign(src)
  }

  updateCanvas = () => {
    this.cropper.updateCanvas()
  }

  getCropperBase64 = (fn) => {
    return this.cropper.getCropperBase64(fn)
  }

  getCropperImage = (opt, fn) => {
    const option = Object.assign(
      {
        // 传入自定义组件上下文
        componentContext: this,
      },
      opt
    )
    return this.cropper.getCropperImage(option, fn)
  }

  render() {
    const { options } = this.props

    return (
      <View>
        <Canvas
          type="t"
          canvasId={options.id}
          className="cropper"
          disableScroll
          onTouchStart={this.touchStart}
          onTouchMove={this.touchMove}
          onTouchEnd={this.touchEnd}
          style={`width:${options.width}px;height:${options.height}px;background-color: rgba(0, 0, 0, 0.2)`}
        />
        <Canvas
          type="t"
          canvasId={options.targetId}
          className="cropper"
          disableScroll
          style={`position: fixed; top: -${
            options.width * options.pixelRatio
          }px; left: -${options.height * options.pixelRatio}px; width:${
            options.width * options.pixelRatio
          }px;height:${options.height * options.pixelRatio}px;`}
        />
      </View>
    )
  }
}
