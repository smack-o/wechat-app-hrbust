import React, { Component } from 'react'
import { View, Canvas, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
// import cn from 'classnames'
// import loadingImg from './res/loading.gif'
import xmlParse from './utils/xml-parser'
import Widget from './utils/widget'
import Draw from './utils/draw'

import './index.less'

type Props = {
  width?: string
  height?: string
  wxml: string
  style: any
}

type IProps = Props

type State = {
  imageSrc: string
  // width: string
  // height: string
}

export default class Wxml2canvas extends Component<IProps, State> {
  static defaultProps = {
    width: '375px',
    height: '2000px',
  }

  state: Readonly<State> = {
    imageSrc: false,
    // width: '375px',
    // height: '1000px',
  }

  initCtx: any
  dpr: number
  ctx
  canvas
  boundary: {
    top,
    left,
    width,
    height
  }

  componentDidMount() {
    this.initCanvas()
  }

  initCanvas = async () => {
    setTimeout(() => {
      const dpr = Taro.getSystemInfoSync().pixelRatio
      const query = Taro.createSelectorQuery()
      this.dpr = dpr
      query.select('#wxml2canvas')
        .fields({ node: true, size: true })
        .exec(res => {
          const canvas = res[0].node
          const ctx = canvas.getContext('2d')
          // const ctx = wx.createCanvasContext('canvas', this)
          canvas.width = res[0].width * dpr
          canvas.height = res[0].height * dpr
          // console.log(canvas.width, canvas.height, canvas)
          ctx.scale(dpr, dpr)
          this.ctx = ctx
          this.canvas = canvas
          this.renderToCanvas()
        })
    }, 300)
  }

  renderToCanvas = async () => {
    const { wxml, style } = this.props

    // 清空画布
    const ctx = this.ctx
    const canvas = this.canvas
    if (!ctx || !canvas) {
      return Promise.reject(new Error('renderToCanvas: fail canvas has not been created'))
    }

    ctx.clearRect(0, 0, 750, 1500)
    const { root: xom } = xmlParse(wxml)

    const widget = new Widget(xom, style)
    const container = widget.init()
    // console.log(container)
    const { top, left, width, height } = container as any
    this.boundary = {
      top,
      left,
      width,
      height
    }
    const draw = new Draw(canvas, ctx)
    await draw.drawNode(container)

    this.canvasToTempFilePath().then((tempFilePath: string) => {
      this.setState({
        imageSrc: tempFilePath,
      })
    })
    return Promise.resolve(container)
  }

  canvasToTempFilePath = (fileType = 'png' as ('png' | 'jpg'), quality = 1) => {
    return new Promise((resolve, reject) => {
      const {
        top, left, width, height
      } = this.boundary
      Taro.canvasToTempFilePath({
        canvasId: '#wxml2canvas',
        x: left,
        y: top,
        width,
        height,
        destWidth: width * this.dpr,
        destHeight: height * this.dpr,
        canvas: this.canvas,
        fileType,
        quality,
        success: (res) => resolve(res.tempFilePath),
        fail: reject
      })
    })
  }

  saveImage = async () => {
    // console.log('render event', wxml, style)
    // await this.saveImage()
  }

  // async saveImage() {
  //   const res = await this.canvasToTempFilePath()
  //   wepy.saveImageToPhotosAlbum({
  //     filePath: res.tempFilePath,
  //     success: (res) => {
  //       wepy.showModal({
  //         title: '保存成功',
  //         content: '图片成功保存到相册',
  //         showCancel: false,
  //         confirmText: '确认',
  //         success (result) {
  //           if (result.confirm) {
  //             this.$apply()
  //           }
  //         }
  //       })
  //       console.log('success:' + res)
  //     },
  //     fail(e) {
  //       console.log('err:' + e)
  //     }
  //   })
  // }

  render() {
    const { width, height } = this.props
    const { imageSrc } = this.state
    return (
      <View>
        { imageSrc
          ? <Image className="wxml2canvas__img" src={imageSrc} mode="widthFix" />
          : <Canvas className="wxml2canvas" id="wxml2canvas" type="2d" style={`width:${width};height:${height}`}></Canvas>}
      </View>
    )
  }
}
