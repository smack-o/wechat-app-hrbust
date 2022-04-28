import { APIS } from '@/services2'
import { withRequest } from './request'
import { goPage, routes } from './router'

export const toLogin = async (isWechatLogin: boolean) => {
  if (!isWechatLogin) {
    // @ts-ignore
    wx.getUserProfile({
      desc: '用于理工喵信息展示', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: async res => {
        console.log(res, 'res')
        const [err] = await withRequest(APIS.UserApi.apiUserWxLoginPost)({
          iv: res.iv,
          encryptedData: res.encryptedData
        })
        if (!err) {
          goPage(routes.login)
        }
      }
    })
    return
  }
  goPage(routes.login)
}
