import Taro from '@tarojs/taro'

export const compressImage = (url: string): Promise<string> =>
  new Promise((resolve, reject) => {
    Taro.compressImage({
      src: url,
      success: res => {
        resolve(res.tempFilePath)
      },
      quality: 30,
      fail: error => {
        reject(error)
      }
    })
  })
