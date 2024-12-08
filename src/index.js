import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // Import the main App component
import $ from 'jquery';  // Import jQuery
import 'bootstrap/dist/js/bootstrap.min.js';  // Import Bootstrap JavaScript
import './assets/style.css';  // Import global CSS (if you have a global stylesheet)
import 'bootstrap/dist/css/bootstrap.min.css';

// Render the App component inside the div with id 'root' in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
