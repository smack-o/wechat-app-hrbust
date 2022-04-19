import Taro from '@tarojs/taro'

// export { default as config } from '../../mallConfig'
export { default as dateFormat } from './dateFormat'
export * from './request'

// 新增 Toast finished 方法，Toast 弹窗关闭后触发
export const showToast = ({
  complete,
  duration = 1500,
  finished = undefined,
  ...args
}: {
  finished?: () => void // toast 弹窗关闭后触发
} & Taro.showToast.Option) =>
  new Promise(resolve => {
    Taro.showToast({ complete, duration, ...args })
    setTimeout(() => {
      finished && finished()
      resolve()
    }, duration)
  })

// catch promise error
export const cError = async (
  fn: Promise<any> | ((data: any) => Promise<any>)
): Promise<[
  null | { msg: string; code: number | string; [key: string]: any },
  any
]> => {
  try {
    const result = await fn
    return [null, result]
  } catch (error) {
    console.log(error, 'error')
    return [error, error]
  }
}

// 价格处理
export const priceToFloat = (price?: number): string =>
  price !== undefined ? price.toFixed(2) : ''

// 设置购物车小红点
export const setCartBadge = () => {
  try {
    const { shopNum } = Taro.getStorageSync('shopCartInfo') || {}
    if (shopNum && shopNum > 0) {
      Taro.setTabBarBadge({
        index: 2,
        text: String(shopNum)
      })
    } else {
      Taro.removeTabBarBadge({
        index: 2
      })
    }
  } catch (error) {}
}

// valueEqual from https://www.npmjs.com/package/value-equal
const valueOf = obj =>
  obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj)

export const valueEqual = (a: any, b: any): boolean => {
  // Test for strict equality first.
  if (a === b) return true

  // Otherwise, if either of them == null they are not equal.
  if (a == null || b == null) return false

  if (Array.isArray(a)) {
    return (
      Array.isArray(b) &&
      a.length === b.length &&
      a.every(function(item, index) {
        return valueEqual(item, b[index])
      })
    )
  }

  if (typeof a === 'object' || typeof b === 'object') {
    var aValue = valueOf(a)
    var bValue = valueOf(b)

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue)

    return Object.keys(Object.assign({}, a, b)).every(function(key) {
      return valueEqual(a[key], b[key])
    })
  }

  return false
}

// 获取当前页面url
export const getCurrentPageUrl = (): string => {
  var pages = Taro.getCurrentPages() //获取加载的页面
  var currentPage = pages[pages.length - 1] //获取当前页面的对象
  var url = currentPage?.route //当前页面url
  return url
}

// 获取用户权限
export const getAuthorize = async (
  scope = 'scope.writePhotosAlbum'
): Promise<Error | undefined> =>
  new Promise(resolve => {
    Taro.getSetting({
      success(res) {
        if (!res.authSetting[scope]) {
          Taro.authorize({
            scope,
            success: () => resolve(),
            fail: () => {
              Taro.showModal({
                title: '打开权限设置',
                content: '保存图片权限未开启，是否授权保存图片权限？',
                confirmText: '确认',
                success(result) {
                  if (result.confirm) {
                    Taro.openSetting()
                    resolve(new Error('用户打开权限'))
                  }
                  if (result.cancel) {
                    resolve(new Error('用户取消打开权限'))
                  }
                }
              })
            }
          })
          return
        }
        resolve()
      }
    })
  })
// 保存图片
export const saveImage = async (url: string) => {
  const err = await getAuthorize('scope.writePhotosAlbum')
  if (err) {
    return
  }

  Taro.getSetting({
    success(res) {
      if (!res.authSetting['scope.writePhotosAlbum']) {
        Taro.authorize({
          scope: 'scope.writePhotosAlbum',
          success() {
            // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
            // Taro.startRecord()
          }
        })
      }
    }
  })
  Taro.saveImageToPhotosAlbum({
    filePath: url,
    success: () => {
      Taro.showModal({
        title: '保存成功',
        content: '图片成功保存到相册',
        showCancel: false,
        confirmText: '确认',
        success(result) {
          if (result.confirm) {
          }
        }
      })
    },
    fail() {}
  })
}

export const delay = (timeout: number) =>
  new Promise((resolve, reject) => setTimeout(resolve, timeout))
