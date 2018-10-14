import { combineReducers } from 'redux'
import counter from './counter'
import currentTerm from './currentTerm'

export default combineReducers({
  counter,
  currentTerm
})
