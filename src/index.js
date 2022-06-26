import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Clock from './chapter04/Clock';
import CommentList from './chapter05/CommentList';

  const root = ReactDOM.createRoot(document.getElementById('root'));
  //setInterval(() => {
    root.render(
      <React.StrictMode>
        <App />
        <Clock />
        <CommentList />
      </React.StrictMode>
    );
 // }, 1000)