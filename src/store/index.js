import { combineReducers } from 'redux'
import routeInfo from './route'
import screenWidth from './screenWidth'
const reducer = combineReducers({
  routeInfo,
  screenWidth
})

export default reducer