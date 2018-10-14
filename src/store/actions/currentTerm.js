import { SET_CURRENT_TERM, SET_TEMP_TERM } from '../types/currentTerm'
import { createAction } from 'redux-actions'

export const setCurrentTerm = createAction(SET_CURRENT_TERM, newTerm => newTerm)
export const setTempTerm = createAction(SET_TEMP_TERM, newTerm => newTerm)
