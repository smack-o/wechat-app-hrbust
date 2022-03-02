import Taro, { RequestParams } from '@tarojs/taro'
import Cookie from 'cookie'
// import { config, getCurrentPageUrl } from '@/utils'
// import { routes } from './router'

// const { subDomain } = config
// 判定现在的环境
const env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev'

const hosts = {
  // dev: 'http://118.89.247.29:8791',
  dev: 'http://localhost:7001',
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
    const csrfToken = Taro.getStorageSync('csrfToken')
    const cookie = Taro.getStorageSync('cookie')

    Taro.request({
      ...option,
      data: requestData,
      url: reqUrl,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
        // cookie,
        Cookie: csrfToken
          ? Cookie.serialize('csrfToken', csrfToken) + ';' + cookie
          : '',
        'x-csrf-token': csrfToken
      },
      success: res => {
        if (res && res.statusCode === 200 && res.data.status === 200) {
          const { header } = res

          const cookie = header['set-cookie'] || ''

          Taro.setStorageSync('cookie', cookie)

          const csrfToken = Cookie.parse(header['set-cookie'] || '').csrfToken

          csrfToken &&
            Taro.setStorageSync(
              'csrfToken',
              Cookie.parse(header['set-cookie']).csrfToken
            )
          resolve(res.data)
          return
        }
        reject(res && res.data)
      },
      fail: error => reject(error)
    })
  })
