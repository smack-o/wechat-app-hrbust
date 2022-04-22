import { InlineResponse200, InlineResponse200ResultError } from '@/services2'
import Taro, { RequestParams } from '@tarojs/taro'
// import { config, getCurrentPageUrl } from '@/utils'
// import { routes } from './router'

// const { subDomain } = config
// 判定现在的环境
const env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev'

const hosts = {
  // dev: 'http://118.89.247.29:8791',
  dev: 'http://localhost:8791',
  // dev: 'http://192.168.31.122:8791',
  // dev: 'https://hrbust-dev.smackgg.cn',
  prod: 'https://hrbust-dev.smackgg.cn'
}

export const API_BASE_URL = hosts[env]

export default (option: RequestParams): Promise<Request.requestResult> =>
  new Promise((resolve, reject) => {
    const { url, data = {} } = option
    let reqUrl = API_BASE_URL + url

    // 删减没有数据的参数
    const requestData = Object.keys(data).reduce(
      (pre: { [key: string]: any }, key) => {
        if (data[key] !== undefined) {
          pre[key] = data[key]
        }
        return pre
      },
      {}
    )

    // 请求携带 token
    const cookie = Taro.getStorageSync('app_cookie')

    Taro.request({
      ...option,
      data: requestData,
      url: reqUrl,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
        cookie
      },
      success: res => {
        if (res && res.statusCode === 200 && res.data.status === 200) {
          const { header } = res
          // @ts-ignore
          Taro.setStorageSync('app_cookie', header['Set-Cookie'])
          resolve(res.data)
          return
        }
        reject(res && res.data)
      },
      fail: error => reject(error)
    })
  })

/**
 * 封装 service request，code !== 0 的情况统一返回 error
 */
type PromiseValue<T> = T extends Promise<infer U> ? U : T

type RequestValue<
  R extends {
    code: InlineResponse200.CodeEnum
    resultCode: InlineResponse200.ResultCodeEnum
    message: string
    result?: any
    error?: InlineResponse200ResultError
  },
  T extends (...args: any[]) => Promise<R>
> = (
  ...args: Parameters<T>
) => Promise<
  [
    Error | null,
    PromiseValue<ReturnType<T>>['result'],
    PromiseValue<ReturnType<T>>
  ]
>

export function withRequest<
  R extends {
    code: InlineResponse200.CodeEnum
    resultCode: InlineResponse200.ResultCodeEnum
    message: string
    result?: any
    error?: InlineResponse200ResultError
  },
  T extends (...args: any[]) => Promise<R>
>(request: T): RequestValue<R, T> {
  const callback = (...args: Parameters<T>) =>
    request(...args).then(res => {
      if (res.code === 0 && res.result) {
        return [null, res.result, res]
      }

      let message = res.message || res.error?.message || '请求失败'

      if (![400001, 400002].includes(res.code)) {
        Taro.showToast({
          title: message,
          // @ts-ignore
          icon: 'error',
          duration: 2000
        })
      }

      console.error(res.error, res.message)

      return [new Error(message), res.result, res]
    }) as ReturnType<RequestValue<R, T>>
  return callback
}
