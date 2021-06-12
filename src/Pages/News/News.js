import React, { Component } from 'react';
import './News.css';
import Search from './Search.js';
import './Search.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Search default="bbc-news" />
      </div>
    );
  }
}

export default App;
