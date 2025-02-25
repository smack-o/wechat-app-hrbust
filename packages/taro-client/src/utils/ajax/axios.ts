import axios, { AxiosError, Cancel } from 'axios'
import { AjaxCancelCode, AjaxErrorCode } from './consts'

// @cc: axios 默认配置，可在此处修改
export default axios.create({
  timeout: 5000,
  withCredentials: true,
  headers: {}
})

export const emptyFunc = () => void 0

/** 检测 axios 响应状态 */
export function onStatusError(error: AxiosError | Error | Cancel) {
  const resp = 'response' in error && error.response
  // IMP: 400客户端错误可能有response.data 不规则的接口可能在 data 里塞除了 code 和 message 以外的字段
  const err = resp
    ? {
        ...resp.data,
        code: resp.status,
        message:
          resp.data && resp.data.message ? resp.data.message : resp.statusText
      }
    : {
        code: error instanceof axios.Cancel ? AjaxCancelCode : AjaxErrorCode,
        message: error.message
      }

  return err
}

export { promiseFactory } from './consts'
