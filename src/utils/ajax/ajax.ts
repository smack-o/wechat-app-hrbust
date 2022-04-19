import Taro from '@tarojs/taro'
import Cookie from 'cookie'
import ajax, { ExtraFetchParams } from './new-ajax'
import axios from './axios'

export * from './new-ajax'

const defaultAjax = ajax.ajax

const COOKIE_KEY = 'new_cookie'
const CSRF_TOKEN_KEY = 'csrfToken'

axios.interceptors.response.use(response => {
  const { headers } = response

  // 小程序 cookie 用逗号分割，只能特殊处理
  const cookie = ((headers['set-cookie'] || '') as string)
    .split(/,(?=[^,]*=)/)
    .join(';')

  const SESSION_ID = Cookie.parse(cookie).SESSION_ID

  console.log(Cookie.serialize('SESSION_ID', SESSION_ID))
  SESSION_ID &&
    Taro.setStorageSync(COOKIE_KEY, Cookie.serialize('SESSION_ID', SESSION_ID))

  const csrfToken = Cookie.parse(cookie).csrfToken

  csrfToken && Taro.setStorageSync(CSRF_TOKEN_KEY, csrfToken)
  return response
})

// 请求携带 token
export const getHeader = () => {
  const csrfToken = Taro.getStorageSync(CSRF_TOKEN_KEY)
  const cookie = Taro.getStorageSync(COOKIE_KEY)

  return {
    Cookie: cookie,
    'x-csrf-token': csrfToken
  }
}

// 全局拦截 ajax 拼接 testUser 参数
ajax.ajax = (
  options: Parameters<typeof defaultAjax>[0],
  path?: string,
  basePath = process.env.PROXY_TARGET
) => {
  const headers: ExtraFetchParams['headers'] = options.headers || {}
  console.log(options, options.headers, 'options')
  options.url = process.env.PROXY_TARGET + options.url
  headers.Origin = process.env.PROXY_TARGET

  return defaultAjax(
    {
      ...options,
      headers: {
        ...headers,
        ...getHeader()
      }
    },
    path,
    basePath
  )
}

export default ajax
