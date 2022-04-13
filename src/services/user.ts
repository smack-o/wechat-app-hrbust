import request from '@/utils/request'

// 微信登录
export const wxLogin = (data: { code: string }) =>
  request({
    url: '/api/user/wx-login',
    interceptTokenError: false,
    data
  })

export const login = (data: {
  username: string
  password: string
  captcha?: string
}) =>
  request({
    url: '/api/hrbust/login',
    data
  })

// 登出
export const logout = () =>
  request({
    url: '/api/hrbust/logout'
  })

// 获取用户信息
export const userInfo = () =>
  request({
    url: '/api/user/userinfo'
  })

// 获取用户考试信息
export const exams = (page = 1, captcha = '') =>
  request({
    url: '/api/hrbust/exam',
    data: {
      page,
      captcha
    }
  })

export const grades = (year: number, term: number, captcha?: string) =>
  request({
    url: '/api/hrbust/grade',
    data: {
      year,
      term,
      captcha
    }
  })

export const getCaptcha = () =>
  request({
    url: '/api/hrbust/captcha'
  })
