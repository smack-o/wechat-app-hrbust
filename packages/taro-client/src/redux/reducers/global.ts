import { AnyAction } from 'redux'
import { START_LOADING, STOP_LOADING } from '../actions/global'

export interface GlobalState {
  loading: boolean
}

const INITIAL_STATE: GlobalState = {
  loading: true,
}

export default function global(state = INITIAL_STATE, action: AnyAction): GlobalState {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        loading: true
      }
    case STOP_LOADING:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}
