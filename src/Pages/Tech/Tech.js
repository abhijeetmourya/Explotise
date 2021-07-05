import React, { useState, useEffect } from "react";
import TechCard from "./TechCard";
import "./Tech.css";
import { Link } from "react-router-dom";

var today = new Date(),

    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

const url =
  `https://newsapi.org/v2/everything?q=technology&from=${date}&sortBy=publishedAt&apiKey=18d7e7ccb67143da8bd7dbda72816fe9`;

function Tech() {
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
      <div className="Tech">
        <div className="back">
          <Link to="/"><h2>← Go Back</h2></Link>
        </div>
        <h1 className="Heading">Explore Latest On Tech</h1>
        <p className="apologise">This may not work because it is using news api and news api runs only on local host as we are using the free plan u can test this by running it on your local host. We really apologise for the inconvinence caused.</p>
        <div className="body">
          {data?.articles?.map((news) => (
            <TechCard key={news.url} news={news} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="Tech">
        <h1>Sorry no data received</h1>
      </div>
    );
  }
}

export default Tech;