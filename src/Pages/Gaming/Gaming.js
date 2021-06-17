import React, { useState, useEffect } from "react";
import GamingCard from "./GamingCard";
import "./Gaming.css";
import { Link } from "react-router-dom";


var today = new Date(),

    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

const url =
  `https://newsapi.org/v2/everything?q=gaming&from=${date}&sortBy=publishedAt&apiKey=18d7e7ccb67143da8bd7dbda72816fe9`;

function Gaming() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch(url);
      const result = await resp.json();
      setData(result);
      console.log(data);
    };

    fetchData();
  }, []);

  if (data) {
    return (
      <div className="Gaming">
       <div className="back">
          <Link to="/"><h2>← Go Back</h2></Link>
        </div>
        <h1 className="Heading">Explore Latest On Gaming</h1>
        <div className="Heading-body">
          {data?.articles?.map((news) => (
            <GamingCard key={news.url} news={news} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="Gaming">
        <h1>Sorry no data received</h1>
      </div>
    );
  }
}

export default Gaming;