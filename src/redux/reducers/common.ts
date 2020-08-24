import { AnyAction } from 'redux'
import { GET_HOME_BANNER , GET_NEWS, UPDATE_CLASSROOMS } from '../actions/common'

export interface CommonState {
  banners: {
    active: boolean
    image: string
    link: string
    type: number
    _id: string
  }[],
  news: any[],
  classrooms: any[],
}

const INITIAL_STATE: CommonState = {
  banners: [],
  news: [],
  classrooms: []
}

export default function user(state = INITIAL_STATE, action: AnyAction): CommonState {
  switch (action.type) {
    case GET_HOME_BANNER:
      return {
        ...state,
        banners: action.data
      }
    case GET_NEWS:
      return {
        ...state,
        news: action.page === 1 ? action.data : [...state.news, ...action.data]
      }
    case UPDATE_CLASSROOMS:
      return {
        ...state,
        classrooms: action.data || []
      }
    default:
      return state
  }
}
