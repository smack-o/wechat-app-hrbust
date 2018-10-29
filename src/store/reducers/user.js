import { handleActions } from 'redux-actions'
import { INIT, SET_LOADING, LOGIN_SUCCESS } from '../types/user'

export default handleActions({
  [INIT](state, actions) {
    if (!actions.payload) {
      return {
        ...state
      }
    }
    const {
      isLogin,
      studentInfo,
      userInfo
    } = actions.payload
    return {
      ...state,
      isLogin: !!(isLogin && studentInfo && studentInfo.username),
      studentInfo,
      userInfo
    }
  },
  [SET_LOADING](state, actions) {
    return {
      ...state,
      loading: actions.payload
    }
  },
  [LOGIN_SUCCESS](state) {
    return {
      ...state,
      num: state.num - 1
    }
  }
}, {
  userInfo: null,
  isLogin: false,
  loading: true,
  studentInfo: {}
})
