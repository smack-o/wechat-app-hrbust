import {
  INIT,
  SET_LOADING
} from '../types/user'
import { createAction } from 'redux-actions'
import { request } from '../../utils'
import wepy from 'wepy'
import { store } from '../'

// 检查session_key是否失效
const checkSession = () => {
  return new Promise((resolve, reject) => {
    wepy.checkSession({
      success() {
        resolve(true)
      },
      fail() {
        resolve(false)
      }
    })
  })
}

// 登录处理
const login = () => {
  return new Promise((resolve, reject) => {
    wepy.login({
      success: function (res) {
        if (res.code) {
          // 获取我们自己服务器的登录 session
          wepy.request({
            url: '/api/user/wx-login',
            data: {
              code: res.code
            },
            success: (res) => {
              const { data, header } = res
              if (data.status === 200) {
                // this.globalData.sessionId = data.sessionId
                const cookie = header['Set-Cookie']
                resolve(cookie)
                wepy.setStorageSync('app_cookie', cookie)
              } else {
                reject(new Error('理工喵登录失败！', data.message))
              }
            },
            fail: function () {
              reject(new Error('理工喵登录失败！'))
            }
          })
        } else {
          reject(new Error('登录失败！' + res.errMsg))
        }
      },
      fail: function () {
        reject(new Error('登录失败！'))
      }
    })
  })
}

// 获取用户信息处理
// const getUserInfo = (cb) => {
//   // if (this.globalData.userInfo) {
//   //   return Promise.resolve(this.globalData.userInfo)
//   // }
//   return new Promise((resolve, reject) => {
//     wepy.getUserInfo({
//       withCredentials: true,
//       success(res) {
//         resolve(res)
//       },
//       fail(e) {
//         reject(e)
//       }
//     })
//   })
// }

const setLoading = createAction(SET_LOADING, loading => loading)

export const init = createAction(INIT, async () => {
  store.dispatch(setLoading(true))
  try {
    // 检查微信登录 session
    let res = await request({
      url: '/api/user/userinfo'
    })
    let { isLogin, studentInfo } = res.data.data
    // console.log(isLogin, studentInfo)
    // this.globalData.isLogin = isLogin
    // this.globalData.studentInfo = studentInfo
    const session = await checkSession()
    let cookie = wepy.getStorageSync('app_cookie')
    if (!session || !cookie || !isLogin) {
      // 没有服务器登录态
      cookie = await login()
      res = await request({
        url: '/api/user/userinfo'
      })
      isLogin = res.data.data.isLogin
      studentInfo = res.data.data.studentInfo
    }
    // 获取用户头像等信息
    // const userInfo = await getUserInfo()
    // this.globalData.userInfo = userInfo
    store.dispatch(setLoading(false))
    return Promise.resolve({
      isLogin,
      studentInfo
      // userInfo
    })
    // this.updateUserInfo(userInfo)
  } catch (e) {
    // console.log(e)
    store.dispatch(setLoading(false))
    return Promise.resolve()
  }
})
