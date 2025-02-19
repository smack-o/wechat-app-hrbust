import { APIS } from '@/services2'
import Taro, { uploadFile } from '@tarojs/taro'
import { getHeader } from './ajax/ajax'
import { withRequest } from './request'

// const isDevtools = Taro.getSystemInfoSync().platform === 'devtools'

export const compressImage = (url: string, quality = 30): Promise<string> =>
  new Promise((resolve, reject) => {
    Taro.compressImage({
      src: url,
      success: (res) => {
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
      fail: (error) => {
        reject(error)
      },
    })
  })

/**
 *
 * @param param0
 * @returns
 */
export const uploadFileToServer = async ({
  url = '',
  quality = 80,
  isNotTmpFile = false,
}) => {
  const { height, width, type } = await Taro.getImageInfo({
    src: url,
  })

  // 非临时文件，使用网络上传接口
  if (isNotTmpFile) {
    const [err, res] = await withRequest(APIS.MediaApi.apiMediaUrlPost)({
      url,
      height,
      width,
      type,
    })
    if (!err) {
      return res?._id
    }
  }

  // 压缩比例 根据图片宽度动态计算
  let rate = 1
  if (width > 1000) {
    rate = 800 / width
  }

  const compressUrl = await compressImage(url, quality * rate)

  try {
    const { data } = await uploadFile({
      url: `${process.env.PROXY_TARGET}/api/media`,
      filePath: compressUrl,
      name: 'file',
      header: getHeader(),
      formData: {
        height,
        width,
        type,
      },
    })
    const res = JSON.parse(data)

    if (!res?.result?._id || !res?.result?.id) {
      throw new Error('上传失败')
    }
    return res.result.id
  } catch (error) {
    Taro.showToast({
      title: '上传失败',
      icon: 'none',
    })
    return Promise.reject(error)
  }
}
