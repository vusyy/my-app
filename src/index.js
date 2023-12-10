import './index.css';
import React from 'react';
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom/client';
import store from './store/store'
import App from './App';


//   // <Provider store={store}>
//   //   <App /> 
//   // </Provider>,
//   // rootElement

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);