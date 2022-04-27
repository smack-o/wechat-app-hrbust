import Taro, { uploadFile } from '@tarojs/taro'
import { getHeader } from './ajax/ajax'

export const compressImage = (url: string, quality = 30): Promise<string> =>
  new Promise((resolve, reject) => {
    Taro.compressImage({
      src: url,
      success: res => {
        resolve(res.tempFilePath)
      },
      quality,
      fail: error => {
        reject(error)
      }
    })
  })

/**
 * 压缩图片，获取图片信息，上传
 * @param url 图片 url
 * @returns
 */
export const uploadFileToServer = async (url: string, quality = 80) => {
  const compressUrl = await compressImage(url, quality)

  const imageInfo = await Taro.getImageInfo({
    src: compressUrl
  })

  const { data } = await Taro.uploadFile({
    url: `${process.env.PROXY_TARGET}/api/media`,
    filePath: url,
    name: 'file',
    header: getHeader(),
    formData: {
      height: imageInfo.height,
      width: imageInfo.width,
      type: imageInfo.type
    }
  })
  // TODO: 上传失败处理逻辑
  const res = JSON.parse(data)
  return res.result.id
}
