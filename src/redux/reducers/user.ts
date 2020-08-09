import { AnyAction } from 'redux'
import { GET_USERINFO, LOGOUT } from '../actions/user'


export interface UserState {
  isLogin: boolean,
  studentInfo: {
    name: string,
    username: string
  },
  // userInfo: {
  //   nike: string,
  // }
}

const INITIAL_STATE: UserState = {
  isLogin: false,
  studentInfo: {
    name: '',
    username: '',
  },
  // userInfo: {
  //   nike,
  // }
}

export default function user(state = INITIAL_STATE, action: AnyAction): UserState {
  switch (action.type) {
    case GET_USERINFO:
      return {
        ...state,
        ...action.data
      }
    case LOGOUT:
      return {
        ...state,
        isLogin: false,
        studentInfo: {
          name: '',
          username: '',
        }
      }
    default:
      return state
  }
}
