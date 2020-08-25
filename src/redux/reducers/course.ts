import { AnyAction } from 'redux'
import { SET_CURRENT_TERM } from '../actions/course'

export interface CourseState {
  currentTerm: number,
}

const INITIAL_STATE: CourseState = {
  currentTerm: 0
}

export default function course(state = INITIAL_STATE, action: AnyAction): CourseState {
  switch (action.type) {
    case SET_CURRENT_TERM:
      return {
        ...state,
        currentTerm: action.data
      }
    default:
      return state
  }
}
