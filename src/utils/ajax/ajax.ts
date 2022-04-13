import ajax, { ExtraFetchParams } from './new-ajax'

export * from './new-ajax'

const defaultAjax = ajax.ajax

// 全局拦截 ajax 拼接 testUser 参数
ajax.ajax = (
  options: Parameters<typeof defaultAjax>[0],
  path?: string,
  basePath = process.env.PROXY_TARGET
) => {
  const headers: ExtraFetchParams['headers'] = {}

  // 小程序无法启动 webpack-dev-server 的 proxy，
  // 看了下 @tkit/ajax 源码，basePath 没有被使用，所以只能直接修改 options.url
  options.url = process.env.PROXY_TARGET + options.url
  headers.Origin = process.env.PROXY_TARGET

  return defaultAjax(
    {
      ...options
      // headers
    },
    path,
    basePath
  )
}

export default ajax
