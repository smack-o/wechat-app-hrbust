import { handleActions } from 'redux-actions'
import { INIT, SET_LOADING, LOGIN_SUCCESS } from '../types/user'

export default handleActions({
  [INIT](state, actions) {
    const {
      isLogin,
      studentInfo,
      userInfo
    } = actions.payload
    return {
      ...state,
      isLogin,
      studentInfo,
      userInfo
    }
  },
  [SET_LOADING](state, actions) {
    console.log(actions)
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
