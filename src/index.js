import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import {SearchWordProvider} from "./context/SearchWordProvider";
ReactDOM.render(
  <SearchWordProvider>
  <Router>
  <App/>
  </Router>
  </SearchWordProvider>
  ,
  document.getElementById('root')
);


