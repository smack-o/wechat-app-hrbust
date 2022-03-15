import Taro from '@tarojs/taro'
import {
  getUserInfo,
  wxLogin,
  exams,
  grades,
  logout as logoutReq,
  wxAuth,
} from '@/services/user'
import { Dispatch } from 'redux'
import { startLoading, stopLoading } from './global'

export const GET_USERINFO = 'user/GET_USERINFO'
export const LOGOUT = 'user/LOGOUT'
export const GET_EXAMS = 'user/GET_EXAMS'
export const GET_GRADES = 'user/GET_GRADES'
export const SET_CURRENT_TERM = 'user/SET_CURRENT_TERM'
export const UPDATE_USERINFO_PROMISE = 'user/UPDATE_USERINFO_PROMISE'

export const setCurrentTerm = (term: number) => ({
  type: SET_CURRENT_TERM,
  data: term,
})

// 检查session_key是否失效
const checkSession = () => {
  return new Promise((resolve) => {
    Taro.checkSession({
      success() {
        resolve(true)
      },
      fail() {
        resolve(false)
      },
    })
  })
}

// 登录处理
const login = () => {
  return new Promise((resolve, reject) => {
    Taro.login({
      success: function (loginRes) {
        if (loginRes.code) {
          wxAuth({ code: loginRes.code }).then((res: any) => {
            if (res.code === 0) {
              resolve()
            } else {
              reject(new Error('理工喵登录失败！'))
            }
          })
        } else {
          reject(new Error('登录失败！' + loginRes.errMsg))
        }
      },
      fail: function () {
        reject(new Error('登录失败！'))
      },
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

export const initHandler = async (dispatch: Dispatch) => {
  dispatch(startLoading())
  try {
    // 检查微信登录 session
    let res = await getUserInfo()
    // console.log(111, res.data, userInfo)
    // const session = await checkSe-ssion()
    // console.log(111222, session)
    // let cookie = Taro.getStorageSync('app_cookie')
    // if (!(res.data && res.data.userInfo)) {
    //   // 没有服务器登录态
    //   await login()
    //   res = await getUserInfo()
    //   // isLogin = res.data.isLogin
    // }
    // 获取用户头像等信息
    // const userInfo = await getUserInfo()
    // this.globalData.userInfo = userInfo
    // store.dispatch(setLoading(false))
    dispatch({
      type: GET_USERINFO,
      data: {
        // isLogin: !!(isLogin && studentInfo && studentInfo.username),
        res,
      },
    })
    dispatch(stopLoading())
    // this.updateUserInfo(userInfo)
  } catch (e) {
    console.log(111, e)
    dispatch(stopLoading())
    return Promise.resolve()
  }
}

export const init = () => async (dispatch: Dispatch) => {
  const getUserInfoPromise = initHandler(dispatch)
  dispatch({
    type: UPDATE_USERINFO_PROMISE,
    data: getUserInfoPromise,
  })
  await getUserInfoPromise
}

export const logout = () => async (dispatch: Dispatch) => {
  await logoutReq()
  dispatch({
    type: LOGOUT,
  })
}

// export const getExams =
//   (...data: Parameters<typeof exams>) =>
//   async (dispatch: Dispatch) => {
//     const res = await exams(...data)
//     const list = res?.data || []

//     dispatch({
//       type: GET_EXAMS,
//       data: list,
//       page: data[0] || 1,
//     })

//     return res
//   }

// export const getGrades =
//   (...data: Parameters<typeof grades>) =>
//   async (dispatch: Dispatch) => {
//     const res = await grades(...data)

//     dispatch({
//       type: GET_GRADES,
//       data: res.data,
//     })

//     return res
//   }
