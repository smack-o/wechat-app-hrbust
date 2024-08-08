import { useEffect, useState } from 'react'
import { Image } from '@tarojs/components'
import Taro from '@tarojs/taro'

export const uuid = (): string =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16).toUpperCase()
  })

const IMAGE_CACHE_KEY = 'image_cache_key'

interface ImageProps {
  src: string
  className: string
}

function url2Base64(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url.replace('http://', 'https://'),
      responseType: 'arraybuffer', //最关键的参数，设置返回的数据格式为arraybuffer
      success: (res) => {
        //把arraybuffer转成base64
        const base64 = wx.arrayBufferToBase64(res.data as any)

        //不加上这串字符，在页面无法显示的哦
        // base64 = 'data:image/jpeg;base64,' + base64
        //打印出base64字符串，可复制到网页校验一下是否是你选择的原图片呢
        console.log(base64)
        resolve(base64)
      },
      fail: (res) => {
        console.log(res)
        reject()
      },
    })
  })
}

export default function ImageCache(props: ImageProps) {
  const { className, src } = props
  const [displaySrc, setDisplaySrc] = useState('')
  useEffect(() => {
    async function handler() {
      const FileSystemManager = Taro.getFileSystemManager()

      // 获取缓存，看有没有
      const imageCacheMap = JSON.parse(
        Taro.getStorageSync(IMAGE_CACHE_KEY) || '{}'
      )

      if (imageCacheMap[src]) {
        // 拿到缓存直接使用缓存文件地址
        const base64 = FileSystemManager.readFileSync(
          `${wx.env.USER_DATA_PATH}/${imageCacheMap[src]}`,
          'base64'
        ) as string

        console.info('load image from disk')
        return setDisplaySrc(base64)
      }

      const id = uuid()

      // 拉取图片 base64
      const base64 = await url2Base64(src)

      // 这里处理缓存逻辑，节省开销
      FileSystemManager.writeFile({
        filePath: `${wx.env.USER_DATA_PATH}/${id}`,
        data: base64,
        encoding: 'base64',
        success(res) {
          console.log(res)
          // 写入缓存
          imageCacheMap[src] = id
          Taro.setStorageSync(IMAGE_CACHE_KEY, JSON.stringify(imageCacheMap))
          setDisplaySrc(base64)
        },
        fail() {
          // 失败直接使用原图片地址
          setDisplaySrc(src)
        },
      })
    }
    handler()
  }, [src])

  if (!displaySrc) {
    return
  }
  return (
    <Image src={`data:image/jpeg;base64,${displaySrc}`} className={className} />
  )
}
