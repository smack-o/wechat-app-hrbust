import Taro, { uploadFile } from '@tarojs/taro'
import { getHeader } from './ajax/ajax'

// const isDevtools = Taro.getSystemInfoSync().platform === 'devtools'

export const compressImage = (url: string, quality = 30): Promise<string> =>
  new Promise((resolve, reject) => {
    Taro.compressImage({
      src: url,
      success: res => {
        // IMP: 开发者工具中后缀名有问题，无法上传文件，需要手动更改
        // if (isDevtools) {
        //   // const filePath = res.tempFilePath.replace('.', '')
        //   const filePath = `${wx.env.USER_DATA_PATH}/${+new Date()}.jpg`
        //   Taro.getFileSystemManager().renameSync(res.tempFilePath, filePath)
        //   resolve(filePath)
        //   return
        // }
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
  const { height, width, type } = await Taro.getImageInfo({
    src: url
  })

  let r = 1
  if (width > 800) {
    r = 800 / width
  }

  const compressUrl = await compressImage(url, quality * r)
  console.log(url, compressUrl)

  try {
    const { data } = await uploadFile({
      url: `${process.env.PROXY_TARGET}/api/media`,
      filePath: compressUrl,
      name: 'file',
      header: getHeader(),
      formData: {
        height,
        width,
        type
      }
    })
    const res = JSON.parse(data)

    if (!res?.result?.id) {
      throw new Error('上传失败')
    }

    // isDevtools &&
    //   Taro.getFileSystemManager().unlink({
    //     filePath: compressUrl
    //   })
    return res.result.id
  } catch (error) {
    Taro.showToast({
      title: '上传失败',
      icon: 'none'
    })
    return Promise.reject(error)
  }
}
