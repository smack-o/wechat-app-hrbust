import Taro from '@tarojs/taro'
import { AnyAction } from 'redux'
import {
  UPDATE_USERINFO,
  LOGOUT,
  GET_EXAMS,
  GET_GRADES,
  SET_CURRENT_TERM,
  UPDATE_USERINFO_PROMISE
} from '../actions/user'

const studentInfo = JSON.parse(Taro.getStorageSync('studentInfo') || '{}')

let currentTerm = 0
if (studentInfo.username) {
  console.log(studentInfo.username, 'studentInfo.username')
  const courseData = Taro.getStorageSync(`course:${studentInfo.username}`)
  currentTerm = courseData.term
}
export interface UserState {
  isWechatLogin: boolean
  isLogin: boolean
  getUserInfoPromise?: Promise<any>
  studentInfo: {
    name: string
    username: string
  }
  exams: {
    course: string
    date: string
    dateExtend: string
    ending: number
    info: string
    position: string
    time: string
  }[]
  grades: {
    grades: {
      courseAttribute: string
      courseCharacter: string
      courseGroup: string
      courseId: string
      courseIndex: string
      courseMount: string
      courseName: string
      courseRemark: string
      credit: string
      gpa: string
      grade: string
      passFlag: string
      term: string
      year: string
    }[]
    AVERAGE_GPA?: string
    AVERAGE_GRADE?: string
    OBLIGATORY_AVERAGE_GPA?: string
    gradeTerm?: string
  }
  currentTerm: number
  // userInfo: {
  //   nike: string,
  // }
}

const INITIAL_STATE: UserState = {
  isWechatLogin: false,
  getUserInfoPromise: undefined,
  isLogin: false,
  studentInfo: {
    name: '',
    username: '',
    ...studentInfo
  },
  exams: [],
  grades: {
    grades: []
  },
  currentTerm
  // userInfo: {
  //   nike,
  // }
}

export default function user(
  state = INITIAL_STATE,
  action: AnyAction
): UserState {
  switch (action.type) {
    case UPDATE_USERINFO:
      Taro.setStorage({
        key: 'studentInfo',
        data: JSON.stringify(action.data.studentInfo || {})
      })
      return {
        ...state,
        ...action.data
      }
    case UPDATE_USERINFO_PROMISE:
      return {
        ...state,
        getUserInfoPromise: action.data
      }
    case LOGOUT:
      Taro.removeStorageSync('studentInfo')
      return {
        ...state,
        isLogin: false,
        studentInfo: {
          name: '',
          username: ''
        }
      }
    case GET_EXAMS:
      return {
        ...state,
        exams:
          action.page === 1 ? action.data : [...state.exams, ...action.data]
      }
    case GET_GRADES:
      return {
        ...state,
        grades: action.data
      }
    case SET_CURRENT_TERM:
      return {
        ...state,
        currentTerm: action.data
      }
    default:
      return state
  }
}
