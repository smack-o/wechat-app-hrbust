import { combineReducers } from 'redux'
import counter from './counter'
import currentTerm from './currentTerm'
import user from './user'
import christmasHat from './christmasHat'

export default combineReducers({
  counter,
  currentTerm,
  user,
  christmasHat
})
