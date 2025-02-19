import { createStore, applyMiddleware } from 'redux'
import thunk, { ThunkMiddleware } from 'redux-thunk'
import rootReducer from '../reducers'

const middlewares = [thunk as ThunkMiddleware<any, any>]

if (process.env.NODE_ENV === 'development' && process.env.TARO_ENV !== 'quickapp') {
  middlewares.push(require('redux-logger').createLogger())
}

export default function configStore () {
  if (process.env.NODE_ENV === 'development' && process.env.TARO_ENV !== 'quickapp') {
    return createStore(
      rootReducer,
      applyMiddleware(
        thunk as ThunkMiddleware<any, any>,
        require('redux-logger').createLogger()
      )
    )
  }
  return createStore(
    rootReducer,
    applyMiddleware(thunk as ThunkMiddleware<any, any>)
  )
}

export const store = configStore()
