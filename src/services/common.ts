import request from '@/utils/request'

// 微信登录
export const banner = () => request({
  url: '/api/banner',
})