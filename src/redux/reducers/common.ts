import { AnyAction } from 'redux'
import { GET_HOME_BANNER , GET_NEWS} from '../actions/common'

export interface CommonState {
  banners: {
    active: boolean
    image: string
    link: string
    type: number
    _id: string
  }[],
  news: any[]
}

const INITIAL_STATE: CommonState = {
  banners: [],
  news: [],
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
    default:
      return state
  }
}
