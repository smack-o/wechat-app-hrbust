
import Taro from '@tarojs/taro'
import { userInfo, wxLogin, exams } from '@/services/user'
import { Dispatch } from 'redux'

export const GET_USERINFO = 'user/GET_USERINFO'
export const LOGOUT = 'user/LOGOUT'
export const GET_EXAMS = 'user/GET_EXAMS'

// 检查session_key是否失效
const checkSession = () => {
  return new Promise((resolve, reject) => {
    Taro.checkSession({
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
    Taro.login({
      success: function (loginRes) {
        console.log(loginRes.code)
        if (loginRes.code) {
          wxLogin({ code: loginRes.code }).then((res) => {
            console.log(res)
            const { data } = res
            if (data.status === 200) {
              // this.globalData.sessionId = data.sessionId
              // const cookie = header['Set-Cookie']
              // resolve(cookie)
              // Taro.setStorageSync('app_cookie', cookie)
            } else {
              // reject(new Error('理工喵登录失败！', data.message))
            }
          })
          // 获取我们自己服务器的登录 session
          // Taro.request({
          //   url: '/api/user/wx-login',
          //   data: {
          //     code: res.code
          //   },
          //   success: (res) => {
          //     const { data, header } = res
          //     if (data.status === 200) {
          //       // this.globalData.sessionId = data.sessionId
          //       const cookie = header['Set-Cookie']
          //       resolve(cookie)
          //       Taro.setStorageSync('app_cookie', cookie)
          //     } else {
          //       reject(new Error('理工喵登录失败！', data.message))
          //     }
          //   },
          //   fail: function () {
          //     reject(new Error('理工喵登录失败！'))
          //   }
          // })
        } else {
          // reject(new Error('登录失败！' + res.errMsg))
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
//     Taro.getUserInfo({
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

// export const setLoading = createAction(SET_LOADING, loading => loading)



export const init = (): any => async (dispatch: Dispatch) => {
  try {
    // 检查微信登录 session
    let res = await userInfo()
    let { isLogin, studentInfo } = res.data
    const session = await checkSession()
    let cookie = Taro.getStorageSync('app_cookie')
    if (!session || !cookie || !isLogin) {
      // 没有服务器登录态
      await login()
      res = await userInfo()
      isLogin = res.data.isLogin
      studentInfo = res.data.studentInfo
    }
    // 获取用户头像等信息
    // const userInfo = await getUserInfo()
    // this.globalData.userInfo = userInfo
    // store.dispatch(setLoading(false))
    dispatch({
      type: GET_USERINFO,
      data: {
        isLogin: !!(isLogin && studentInfo && studentInfo.username),
        studentInfo,
      }
    })
    // this.updateUserInfo(userInfo)
  } catch (e) {
    // console.log(e)
    // store.dispatch(setLoading(false))
    return Promise.resolve()
  }
}

export const logout = () => ({
  type: LOGOUT
})


export const getExams = (...data: Parameters<typeof exams>): any => async (dispatch: Dispatch) => {
  const res = await exams(...data)
  const list = res?.data || []

  dispatch({
    type: GET_EXAMS,
    data: list,
    page: data[0] || 1,
  })
}
