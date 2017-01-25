import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Gives us the component to use in render
import './index.css';

ReactDOM.render(
  <App />,  // component you want to render - App is like a constructor function and we are calling it
  // this syntax with the < /> tells react to instantiate an instance of App
  document.getElementById('root') // where you want to render it
);
// this works:
// ReactDOM.render(<h1>HELLO WORLD,</h1>,   document.getElementById('root') );
