import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom'

import reducers from './reducers'
import App from './components/App'
import Welcome from './components/Welcome'
import Signup from './components/auth/Signup'
import { Provider } from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'

import { BrowserRouter, Route } from 'react-router-dom'

const store = createStore(
  reducers,
  {},
  applyMiddleware(reduxThunk)
)

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App>
      <Route path="/" exact component={Welcome} />
      <Route path="/signup" component={Signup} />
    </App>
  </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
)