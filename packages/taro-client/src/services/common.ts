import request from '@/utils/request'

// 微信登录
export const banner = () => request({
  url: '/api/banner',
})

// 获取教务公告
export const news = (data: { page: number }) => request({
  url: '/api/news',
  data,
})
