import { combineReducers } from 'redux'
import user from './user'
import common from './common'
import global from './global'

export const reducerMap = {
  user,
  common,
  global,
}

export type RootReducerMap = typeof reducerMap
export type RootReducerMapKey = keyof RootReducerMap
export default combineReducers(reducerMap)
