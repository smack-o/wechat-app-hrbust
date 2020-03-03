import { handleActions } from 'redux-actions'
import { UPDATE_ROOMS } from '../types/room'

export default handleActions({
  [UPDATE_ROOMS](state, action) {
    return {
      ...state,
      list: action.payload.data
    }
  }
}, {
  list: []
})
