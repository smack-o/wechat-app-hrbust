import { handleActions } from 'redux-actions'
import { SET_CURRENT_TERM, SET_TEMP_TERM } from '../types/currentTerm'

export default handleActions({
  [SET_CURRENT_TERM] (state, action) {
    return {
      ...state,
      currentTerm: action.payload
    }
  },
  [SET_TEMP_TERM] (state, action) {
    return {
      ...state,
      tempTerm: action.payload
    }
  }
}, {
  currentTerm: 0,
  tempTerm: 10
})
