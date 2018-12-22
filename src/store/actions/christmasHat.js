import { SET_BACKGROUND_PIC, SET_SCALE, SET_ROTATE, SET_HAT_CENTER_X, SET_HAT_CENTER_Y, SET_CURRENT_HAT_ID } from '../types/christmasHat'
import { createAction } from 'redux-actions'

export const setBackgroundPic = createAction(SET_BACKGROUND_PIC, newTerm => newTerm)
export const setScale = createAction(SET_SCALE, newTerm => newTerm)
export const setRotate = createAction(SET_ROTATE, newTerm => newTerm)
export const setHatCenterX = createAction(SET_HAT_CENTER_X, newTerm => newTerm)
export const setHatCenterY = createAction(SET_HAT_CENTER_Y, newTerm => newTerm)
export const setCurrentHatId = createAction(SET_CURRENT_HAT_ID, newTerm => newTerm)
// export const setTempTerm = createAction(SET_TEMP_TERM, newTerm => newTerm)
