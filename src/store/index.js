import { combineReducers } from 'redux'
import screenWidth from './screenWidth'
import items from './items'
const reducer = combineReducers({
  screenWidth,
  items
})

export default reducer