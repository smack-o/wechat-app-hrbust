import Taro from '@tarojs/taro'
import { withRequest } from '@/utils/request'
import { APIS } from '@/services2'
import {
  // userInfo,
  // wxLogin,
  exams,
  grades,
  logout as logoutReq
} from '@/services/user'
import { Dispatch } from 'redux'
import { startLoading, stopLoading } from './global'
import { UserState } from '../reducers/user'

export const UPDATE_USERINFO = 'user/UPDATE_USERINFO'
export const LOGOUT = 'user/LOGOUT'
export const GET_EXAMS = 'user/GET_EXAMS'
export const GET_GRADES = 'user/GET_GRADES'
export const SET_CURRENT_TERM = 'user/SET_CURRENT_TERM'
export const UPDATE_USERINFO_PROMISE = 'user/UPDATE_USERINFO_PROMISE'
export const SET_UNREAD_COUNT = 'user/SET_UNREAD_COUNT'

export const setCurrentTerm = (term: number) => ({
  type: SET_CURRENT_TERM,
  data: term
})

// 检查session_key是否失效
const checkSession = () => {
  return new Promise(resolve => {
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
const login = () =>
  new Promise((resolve, reject) => {
    Taro.login({
      success: async loginRes => {
        const [err] = await withRequest(APIS.UserApi.apiUserWxAuthPost)({
          code: loginRes.code
        })
        if (!err) {
          resolve('')
          return
        }
        reject(new Error('登录失败！' + loginRes.errMsg || err.message))
      },
      fail: () => {
        reject(new Error('登录失败！'))
      }
    })
  })

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
    let [err, res] = await withRequest(APIS.UserApi.apiUserGet)()
    const session = await checkSession()

    console.log(session, 'session')
    // 未登录
    if (err || !session) {
      await login()
      ;[, res] = await withRequest(APIS.UserApi.apiUserGet)()
    }

    const data: any = {
      // 判断是否有用户名
      isWechatLogin: !!res?.userInfo?.nickName
    }
    if (data.isWechatLogin) {
      data.userInfo = res?.userInfo
    }

    dispatch({
      type: UPDATE_USERINFO,
      data
    })

    // let { isLogin, studentInfo } = res.data
    // let cookie = Taro.getStorageSync('app_cookie')
    // if (!session || !cookie || !isLogin) {
    //   // 没有服务器登录态
    // await login()
    //   res = await userInfo()
    //   isLogin = res.data.isLogin
    //   studentInfo = res.data.studentInfo
    // }

    // 获取用户头像等信息
    // const userInfo = await getUserInfo()
    // this.globalData.userInfo = userInfo
    // store.dispatch(setLoading(false))
    // dispatch({
    //   type: UPDATE_USERINFO,
    //   data: {
    //     isLogin: !!(isLogin && studentInfo && studentInfo.username),
    //     studentInfo
    //   }
    // })
    dispatch(stopLoading())
    // this.updateUserInfo(userInfo)
  } catch (e) {
    dispatch(stopLoading())
    return Promise.resolve()
  }
}

export const updateUserInfo = (data: Partial<UserState>) => async (
  dispatch: Dispatch
) => {
  dispatch({
    type: UPDATE_USERINFO,
    data
  })
}

export const init = () => async (dispatch: Dispatch) => {
  const getUserInfoPromise = initHandler(dispatch)
  dispatch({
    type: UPDATE_USERINFO_PROMISE,
    data: getUserInfoPromise
  })
  await getUserInfoPromise
}

export const logout = () => async (dispatch: Dispatch) => {
  await logoutReq()
  dispatch({
    type: LOGOUT
  })
}

export const getExams = (...data: Parameters<typeof exams>) => async (
  dispatch: Dispatch
) => {
  const res = await exams(...data)
  const list = res?.data || []

  dispatch({
    type: GET_EXAMS,
    data: list,
    page: data[0] || 1
  })

  return res
}

export const getGrades = (...data: Parameters<typeof grades>) => async (
  dispatch: Dispatch
) => {
  const res = await grades(...data)

  dispatch({
    type: GET_GRADES,
    data: res.data
  })

  return res
}

let unReadCounterTimer: number
/**
 * 停止轮询
 */
export const stopGetUnreadCount = () => {
  clearInterval(unReadCounterTimer)
}

/**
 * 轮询获取未读消息数
 * @returns
 */
export const getUnreadCount = () => async (dispatch: Dispatch) => {
  unReadCounterTimer && stopGetUnreadCount()
  const handler = async () => {
    const [err, res] = await withRequest(
      APIS.MessageApi.apiMessageUnreadcountGet,
      false
    )()

    if (err) {
      return
    }
    dispatch({
      type: SET_UNREAD_COUNT,
      data: res?.unreadCount || 0
    })
  }

  handler()
  // 轮询 每半分钟拉取一次
  unReadCounterTimer = setInterval(handler, 30 * 1000)
}
