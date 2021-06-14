import React, { Component } from 'react';
import './News.css';
import Search from './Search.js';
import './Search.css';
import {Link} from 'react-router-dom'

class News extends Component {
  render() {
    return (
      <div className="news">
        <div className="back">
          <Link to="/"><h2>← Go Back</h2></Link>
        </div>
        <div className="News-Heading">
          <h1>Explore the Latest News</h1>
        </div>
        <Search default="bbc-news" />
      </div>
    );
  }
}

export default News;
