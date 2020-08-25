import { combineReducers } from 'redux'
import user from './user'
import common from './common'
import global from './global'
import course from './course'


export const reducerMap = {
  user,
  common,
  global,
  course,
}

export type RootReducerMap = typeof reducerMap
export type RootReducerMapKey = keyof RootReducerMap
export default combineReducers(reducerMap)
