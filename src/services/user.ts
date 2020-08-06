import request from '@/utils/request'

// 微信登录
export const wxLogin = (data: { code: string }) => request({
  url: '/api/user/wx-login',
  interceptTokenError: false,
  data
})

// 获取用户信息
export const userInfo = () => request({
  url: '/api/user/userinfo',
})