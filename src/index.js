import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Publications from './pages/publications/index.js';
import Navigation from './navigation';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App>
      <Navigation>
        <Publications />
      </Navigation>
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);

