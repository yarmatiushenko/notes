import { createStore, applyMiddleware } from 'redux'
import { weather } from '../reducer'
import thunkMiddleware from 'redux-thunk'

const middleware = applyMiddleware(
  thunkMiddleware,
)

export const store = createStore(
  weather,
  middleware
)
