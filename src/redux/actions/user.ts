
import Taro from '@tarojs/taro'
import { userInfo, wxLogin, exams, grades } from '@/services/user'
import { Dispatch } from 'redux'

export const GET_USERINFO = 'user/GET_USERINFO'
export const LOGOUT = 'user/LOGOUT'
export const GET_EXAMS = 'user/GET_EXAMS'
export const GET_GRADES = 'user/GET_GRADES'

// 检查session_key是否失效
const checkSession = () => {
  return new Promise((resolve) => {
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

  return res
}

export const getGrades = (...data: Parameters<typeof grades>): any => async (dispatch: Dispatch) => {
  const res = await grades(...data)

  dispatch({
    type: GET_GRADES,
    data: res.data,
  })

  return res
}
