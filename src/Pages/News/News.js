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
          <p>This may not work because it is using news api and news api runs only on local host as we are using the free plan u can test this by running it on your local host. We really apologise for the inconvinence caused.</p>
        </div>
        <Search default="bbc-news" />
      </div>
    );
  }
}

export default News;
