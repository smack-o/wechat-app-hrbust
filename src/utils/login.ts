import { APIS } from '@/services2'
import Taro from '@tarojs/taro'
import { init } from '@/redux/actions/user'
import { store } from '@/redux/store'
import { withRequest } from './request'
import { goPage, routes } from './router'

export const toLogin = async (
  isWechatLogin: boolean,
  url?: string
): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (!isWechatLogin) {
      wx.getUserProfile({
        desc: '用于理工喵信息展示', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: async res => {
          console.log(res, 'res')
          const [err] = await withRequest(APIS.UserApi.apiUserWxLoginPost)({
            iv: res.iv,
            encryptedData: res.encryptedData
          })
          if (!err) {
            await store.dispatch(init())
            resolve()
            url && goPage(url)
          }
        },
        fail() {
          console.log('fail')
          reject()
        }
      })
      return
    }
    resolve()
    url && goPage(url)
  })
}

export const loginModal = async (): Promise<void> => {
  return new Promise(async resolve => {
    const getUserInfoPromise = store.getState().user.getUserInfoPromise
    await getUserInfoPromise
    const isWechatLogin = store.getState().user.isWechatLogin
    if (!isWechatLogin) {
      Taro.showModal({
        title: '未登录',
        content: '登录后才能查看内容',
        confirmText: '去登录',
        success: async res => {
          if (res.confirm) {
            await toLogin(isWechatLogin).catch(() => {
              Taro.switchTab({
                url: routes.index
              })
            })
            resolve()
          } else {
            Taro.switchTab({
              url: routes.index
            })
          }
        }
      })
    } else {
      resolve()
    }
  })
}
