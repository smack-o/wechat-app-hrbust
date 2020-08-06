import { AnyAction } from 'redux'
import { GET_HOME_BANNER } from '../actions/common'

export interface CommonState {
  banners: {
    active: boolean
    image: string
    link: string
    type: number
    _id: string
  }[]
}

const INITIAL_STATE: CommonState = {
  banners: []
}

export default function user(state = INITIAL_STATE, action: AnyAction): CommonState {
  switch (action.type) {
    case GET_HOME_BANNER:
      return {
        ...state,
        banners: action.data
      }
    default:
      return state
  }
}
