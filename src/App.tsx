import React from 'react';

import './assets/css/App.css';
// import pages
import Home from 'pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
  // import provider and store
import { Provider } from 'react-redux';
import { store } from './stores/store';

function App() {
  return (
    <>
    <Router>
      <Provider store={store}>
        <Routes>
            <Route path="/"  element={<Home/>}/>
        </Routes>
      </Provider>
    </Router>
    </>
  );
}

export default App;
