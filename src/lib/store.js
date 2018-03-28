
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'

export const globalStore = createStore(rootReducer, applyMiddleware(thunkMiddleware))