import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Popup from './Popup';
import Option from './Option';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('popup') || document.createElement('div')
);

const option = ReactDOM.createRoot(
  document.getElementById('options') || document.createElement('div')
);

root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);

option.render(
  <React.StrictMode>
    <Option />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
