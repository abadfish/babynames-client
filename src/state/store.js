import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as form } from 'redux-form'

import auth from './Auth/reducer';
import appTransactions from './appTransactions';


// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  form,
  auth,
  appTransactions,
  // users
})

export default createStore(
  reducers,
  applyMiddleware(thunk),
)
