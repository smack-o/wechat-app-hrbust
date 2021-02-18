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

export const generateGoods = (data = {} as any) => request({
  url: '/api/pdd/generateGoods',
  data
})


export const getChannel = () => request({
  url: '/api/pdd/channel',
})
