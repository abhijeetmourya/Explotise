import React, { Component } from 'react';
import axios from 'axios';

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentWillMount() {
    this.getArticles(this.props.default);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({ url: `https://newsapi.org/v2/top-headlines?sources=${nextProps.default}&apiKey=18d7e7ccb67143da8bd7dbda72816fe9` });

      this.getArticles(nextProps.default);
    }
  }

  formatDate(date) {
    var time = new Date(date);
    var year = time.getFullYear();
    var day = time.getDate();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var month = time.getMonth() + 1;
    var composedTime = day + '/' + month + '/' + year + ' | ' + hour + ':' + (minute < 10 ? '0' + minute : minute);
    return composedTime;
  }

  getArticles(url) {
    const apiKey = "18d7e7ccb67143da8bd7dbda72816fe9";
    axios
      .get(`https://newsapi.org/v2/top-headlines?sources=${url}&apiKey=${apiKey}`)
      .then(res => {
        const articles = res.data.articles;
        console.log(articles);
        this.setState({ articles: articles });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="cardsContainer">
        {this.state.articles.map((news, i) => {
          return (
            <div className="card" key={i}>
              <div className="content">
                <h3>
                  <a href={news.url} target="_blank" rel="noopener noreferrer">
                    {news.title}
                  </a>
                </h3>
                <p>{news.description}</p>
                <div className="author">
                  <p>
                    By <i>{news.author ? news.author : this.props.default}</i>
                  </p>
                  <p>{this.formatDate(news.publishedAt)}</p>
                </div>
              </div>
              <div className="image">
                <img src={news.urlToImage} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Display;
