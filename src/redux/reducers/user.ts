import { AnyAction } from 'redux'
import { GET_USER_DETAIL } from '../actions/user'

export type UserDetail = {
  avatarUrl: string
}

export type UserState = {
  userDetail: UserDetail, // 用户信息
}

var INITIAL_STATE: UserState = {
  userDetail: {
    avatarUrl: '',
  }, // 用户信息
}

export default function user(state = INITIAL_STATE, action: AnyAction): UserState {
  switch (action.type) {
    case GET_USER_DETAIL:
      return {
        ...state,
        userDetail: action.data,
      }
    default:
      return state
  }
}
