import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from 'react-router-dom';

import store from './redux/store';
import {Provider} from 'react-redux';

//Provider is a component that shares our state
//Provider comes from our react-redux package that 
//makes our store accessible on the props object
//Provider "provides"
//Always share/pass in store={store} kind of like props with Provider

//Once Provider has been wrapped around the application, we can now pass information from
//our store state to any component that needs it by using a connect function, and a mapStateToProps function
//These two functions will work together to populate the props object of the component with information
//from the store state. This process is known as subscribing.

//Our component is subscribing to our store



ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
