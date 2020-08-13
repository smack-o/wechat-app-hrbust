import { AnyAction } from 'redux'
import { GET_USERINFO, LOGOUT, GET_EXAMS, GET_GRADES } from '../actions/user'


export interface UserState {
  isLogin: boolean,
  studentInfo: {
    name: string,
    username: string
  },
  exams: {
    course: string
    date: string
    dateExtend: string
    ending: number
    info: string
    position: string
    time: string
  }[],
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
    }[],
    AVERAGE_GPA?: string
    AVERAGE_GRADE?: string
    OBLIGATORY_AVERAGE_GPA?: string
    gradeTerm?: string
  }
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
  exams: [],
  grades: {
    grades: [],
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
    case GET_EXAMS:
      return {
        ...state,
        exams: action.page === 1 ? action.data : [...state.exams, ...action.data]
      }
    case GET_GRADES:
      return {
        ...state,
        grades: action.data
      }
    default:
      return state
  }
}
