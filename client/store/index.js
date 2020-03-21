import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import studios from './studios'
import teachers from './teachers';
import classes from './classes';

const reducer = combineReducers({
  user,
  studios,
  teachers,
  classes
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './studios'
export * from './teachers'
export * from './classes'
