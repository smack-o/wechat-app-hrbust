import React from 'react'
import { View, Text } from '@tarojs/components'
import { withRequest } from '@/utils'
import Taro from '@tarojs/taro'
import { compressImage } from '@/utils/image'
import { APIS } from '@/services2'
import { AtButton, AtImagePicker } from 'taro-ui'
import { File } from 'taro-ui/types/image-picker'

import './LoversFace.less'

type LoversFaceState = {
  filesA: File[]
  filesB: File[]
  confidence: number
  fetching: boolean
}

type LoversFaceProps = {}

const prefix = 'lovers-face'
export default class LoversFace extends React.Component<
  LoversFaceProps,
  LoversFaceState
> {
  state: LoversFaceState = {
    filesA: [],
    filesB: [],
    confidence: -1,
    fetching: false
  }
  componentDidMount() {}

  onChangeA = (files: File[]) => {
    this.setState({
      filesA: files
    })
  }

  onChangeB = (files: File[]) => {
    this.setState({
      filesB: files
    })
  }

  getImageBase64 = async (path: string): Promise<string> =>
    new Promise((resolve, reject) => {
      const fileSystemManager = Taro.getFileSystemManager()

      fileSystemManager.readFile({
        filePath: path, // 例如图片临时路径
        encoding: 'base64',
        success(res) {
          // let { data } = res // 编码后的数据
          // @ts-ignore
          resolve(res.data)
        }
      })
    })

  onSubmit = async () => {
    const { filesA, filesB } = this.state
    if (filesA.length === 0 || filesB.length === 0) {
      Taro.showToast({
        title: '请先添加图片',
        icon: 'none'
      })
      return
    }
    this.setState({
      fetching: true
    })

    const files = await Promise.all([
      compressImage(filesA[0].url),
      compressImage(filesB[0].url)
    ])

    const data = await Promise.all(
      files.map(async file => this.getImageBase64(file))
    ).then(async res => {
      const [imageDataA, imageDataB] = res
      const data = {
        imageDataA,
        imageDataB
      }
      console.log(data)
      // console.log(data)
      // APIS.postLoversFace(data).then(res => {
      //   console.log(res)
      // })
      return data
    })

    const [err, res] = await withRequest(APIS.MediaApi.apiMediaComparefacePost)(
      data
    )

    if (!err && res) {
      this.setState({
        confidence: +res.confidence
      })
    }

    this.setState({
      fetching: false
    })
  }

  onReset = () => {
    this.setState({
      // filesA: [],
      // filesB: [],
      confidence: -1
    })
  }

  render() {
    const { filesA, filesB, confidence, fetching } = this.state
    return (
      <View className={prefix}>
        <View className={`${prefix}__title`}>试试你跟 TA 有没有情侣相吧~</View>
        <View className={`${prefix}__picker`}>
          <View className={`${prefix}__picker-item`}>
            <AtImagePicker
              files={filesA}
              multiple={false}
              onChange={this.onChangeA}
              length={1}
              count={1}
              showAddBtn={filesA.length < 1}
            ></AtImagePicker>
            {!filesA[0] && <Text className="tip">添加第一张图片</Text>}
          </View>
          <View className={`${prefix}__picker-item`}>
            <AtImagePicker
              files={filesB}
              multiple={false}
              onChange={this.onChangeB}
              length={1}
              count={1}
              showAddBtn={filesB.length < 1}
            ></AtImagePicker>
            {!filesB[0] && <Text className="tip">添加第二张图片</Text>}
          </View>
        </View>

        {confidence >= 0 && (
          <View className={`${prefix}__result`}>
            情侣契合分数：{confidence}
            <View className="tips">
              *分数过低可能是由于正面不清晰的原因，尝试更换图片再次尝试
            </View>
            <View className="tips">
              *数据结果来自于阿里云人脸比对服务，仅供参考
            </View>
          </View>
        )}

        {confidence > 0 ? (
          <AtButton
            type="primary"
            className={`${prefix}__button`}
            onClick={this.onReset}
          >
            重新测试
          </AtButton>
        ) : (
          <AtButton
            type="primary"
            className={`${prefix}__button`}
            onClick={this.onSubmit}
            loading={fetching}
          >
            开始测试
          </AtButton>
        )}
      </View>
    )
  }
}
