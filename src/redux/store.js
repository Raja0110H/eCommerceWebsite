import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'

import rootReducer from './root-reducer'

const middlewares = []

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

export let store = createStore(rootReducer, applyMiddleware(...middlewares))

export let persistor = persistStore(store)
  

const StorePersistot =  { store, persistor }
export default  StorePersistot;
   