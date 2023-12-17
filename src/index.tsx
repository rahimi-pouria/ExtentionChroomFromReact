import React from 'react';
import ReactDOM from 'react-dom/client';
// adding css and scss file
import './assets/css/index.css';
import './assets/scss/Color.scss';
import './assets/scss/Fonts.scss';
import './assets/scss/Main.scss';
import './assets/scss/ReUsable.scss';
import './assets/scss/Size.scss';
import './assets/scss/Transition.scss'

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
