import { createStore, compose, applyMiddleware } from 'redux'
import { notes } from '../reducer'
import thunkMiddleware from 'redux-thunk'

const middleware = applyMiddleware(
  thunkMiddleware,
)

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  notes,
  composeEnhancer(middleware),
)
