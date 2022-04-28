import { AjaxPromise } from '@/utils/ajax'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function
  }

  type CommonResult = (...args: any) => AjaxPromise<{ result?: any }>

  type GetApiResultType<T extends CommonResult> = Required<
    Awaited<ReturnType<T>>['result']
  >

  type UnionToIntersection<T, K> = K extends any ? any : any
}

export {}
