import { combineReducers } from 'redux'
import heroes from './heroes'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  heroes,
  visibilityFilter
})