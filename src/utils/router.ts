import Taro from '@tarojs/taro'

import { routes as rs } from '../app.config'

export { routes } from '../app.config'

export const goWebviewPage = (url: string, type = 2 as 1 | 2) => {
  if (type === 1) {
    Taro.navigateTo({
      url
    })
  } else {
    Taro.navigateTo({
      url: rs.index + `?url=${encodeURIComponent(url)}&title=理工喵`
    })
  }
}

export const goPage = (url: string, to = Taro.navigateTo) => to({
  url,
})
