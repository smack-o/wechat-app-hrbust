/** 取消请求错误码 */
export const AjaxCancelCode = 10499
export const AjaxCancelMessage = 'AJAX_CANCEL_MESSAGE'

/** 默认Ajax错误码  */
export const AjaxErrorCode = 10001

/** 无法确认的 Graphql 错误码 */
export const GraphQLErrorCode = 10002

export interface AbstractAjaxResult<R> {
  /**
   * 后端返回的错误码或者提取非200的http状态码
   */
  code?: number
  /**
   * 后端返回的错误信息
   */
  message?: string | number | null
  /**
   * 后端返回的数据结构
   */
  result?: R
}
export type AbstractAsyncFunction<R> = (...args: any[]) => Promise<R>
export type AjaxResult = AbstractAjaxResult<any>
export type AjaxFunction = AbstractAsyncFunction<AjaxResult>
export const promiseFactory = <T>() => {
  let resolve!: (value?: T | PromiseLike<T> | undefined) => void,
    reject!: (reason?: any) => void
  const prom = new Promise<T>((rs, rj) => {
    resolve = rs
    reject = rj
  })
  const rj = { reject, resolve }
  return [rj, prom] as [typeof rj, typeof prom]
}
