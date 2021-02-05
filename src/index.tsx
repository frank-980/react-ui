import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { Router } from 'react-router';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './store'
import { createHashHistory } from 'history';
import Site from './site'
const history = createHashHistory();
const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>

          <Site />

    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
