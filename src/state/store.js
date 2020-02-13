import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as form } from 'redux-form'

import auth from './Auth/reducer';
import appTransactions from './appTransactions';
import babies from './Babies/reducer'
import names from './Names/reducer'

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  form,
  auth,
  appTransactions,
  babies,
  names,
  // users
})

export default createStore(
  reducers,
  applyMiddleware(thunk),
)
