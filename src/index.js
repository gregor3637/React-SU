import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/publications/index.js';
import Navigation from './navigation';


ReactDOM.render(
  <React.StrictMode>
    <Navigation>
      <App />
    </Navigation>
  </React.StrictMode>,
  document.getElementById('root')
);

