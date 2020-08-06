import Taro from '@tarojs/taro'

// export { default as config } from '../../mallConfig'
export { default as dateFormat } from './dateFormat'

// 新增 Toast finished 方法，Toast 弹窗关闭后触发
export const showToast = ({ complete, duration = 1500, finished = undefined, ...args }: {
  finished?: () => void // toast 弹窗关闭后触发
} & Taro.showToast.Option) => new Promise((resolve) => {
  Taro.showToast({ complete, duration, ...args })
  setTimeout(() => {
    finished && finished()
    resolve()
  }, duration)
})

// catch promise error
export const cError = async (fn: (| Promise<any> | ((data: any) => Promise<any>))): Promise<[null | { msg: string, code: number | string }, any]> => {
  try {
    const result = await fn
    return [null, result]
  } catch (error) {
    return [error, error]
  }
}

// 价格处理
export const priceToFloat = (price?: number): string => price !== undefined ? price.toFixed(2) : ''

// 设置购物车小红点
export const setCartBadge = () => {
  try {
    const { shopNum } = Taro.getStorageSync('shopCartInfo') || {}
    if (shopNum && shopNum > 0) {
      Taro.setTabBarBadge({
        index: 2,
        text: String(shopNum),
      })
    } else {
      Taro.removeTabBarBadge({
        index: 2,
      })
    }
  } catch (error) {

  }
}

// valueEqual from https://www.npmjs.com/package/value-equal
const valueOf = obj => obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj)

export const valueEqual = (a: any, b: any): boolean => {
  // Test for strict equality first.
  if (a === b) return true

  // Otherwise, if either of them == null they are not equal.
  if (a == null || b == null) return false

  if (Array.isArray(a)) {
    return (
      Array.isArray(b) &&
      a.length === b.length &&
      a.every(function (item, index) {
        return valueEqual(item, b[index])
      })
    )
  }

  if (typeof a === 'object' || typeof b === 'object') {
    var aValue = valueOf(a)
    var bValue = valueOf(b)

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue)

    return Object.keys(Object.assign({}, a, b)).every(function (key) {
      return valueEqual(a[key], b[key])
    })
  }

  return false
}

export const getCurrentPageUrl = (): string => {
  var pages = Taro.getCurrentPages()    //获取加载的页面
  var currentPage = pages[pages.length - 1]    //获取当前页面的对象
  var url = currentPage?.route    //当前页面url
  return url
}
