import request from '@/utils/request'


// 获取拼多多商品
export const pddSearch = (data = {} as any) => request({
  url: '/api/pdd/search',
  data,
})

// 获取拼多多商品
export const getKeywords = () => request({
  url: '/api/pdd/keywords',
})
