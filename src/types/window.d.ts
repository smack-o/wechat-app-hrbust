import { AjaxPromise } from '@/utils/ajax'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function
  }

  type CommonResult = (...args: any) => AjaxPromise<{ result?: any }>

  type GetApiResultType<T extends CommonResult> = Awaited<
    ReturnType<T>
  >['result']
}

export {}
