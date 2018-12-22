import { handleActions } from 'redux-actions'
import { SET_BACKGROUND_PIC, SET_SCALE, SET_ROTATE, SET_HAT_CENTER_X, SET_HAT_CENTER_Y, SET_CURRENT_HAT_ID } from '../types/christmasHat'

export default handleActions({
  [SET_BACKGROUND_PIC] (state, action) {
    return {
      ...state,
      bgPic: action.payload
    }
  },
  [SET_SCALE] (state, action) {
    return {
      ...state,
      scale: action.payload
    }
  },
  [SET_ROTATE] (state, action) {
    return {
      ...state,
      rotate: action.payload
    }
  },
  [SET_HAT_CENTER_X] (state, action) {
    return {
      ...state,
      hatCenterX: action.payload
    }
  },
  [SET_HAT_CENTER_Y] (state, action) {
    return {
      ...state,
      hatCenterY: action.payload
    }
  },
  [SET_CURRENT_HAT_ID] (state, action) {
    return {
      ...state,
      currentHatId: action.payload
    }
  }
}, {
  bgPic: null,
  scale: 1,
  rotate: 0,
  hatCenterX: 0,
  hatCenterY: 0,
  currentHatId: 1
})
