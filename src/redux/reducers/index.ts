import { combineReducers } from 'redux'
import user from './user'
import common from './common'


export const reducerMap = {
  user,
  common,
}

export type RootReducerMap = typeof reducerMap
export type RootReducerMapKey = keyof RootReducerMap
export default combineReducers(reducerMap)
