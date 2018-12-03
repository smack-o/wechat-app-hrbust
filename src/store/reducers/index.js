import { combineReducers } from 'redux'
import counter from './counter'
import currentTerm from './currentTerm'
import user from './user'

export default combineReducers({
  counter,
  currentTerm,
  user
})
