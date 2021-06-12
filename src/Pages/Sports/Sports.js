import React, { useState, useEffect } from "react";
import SportsCard from "./SportsCard";
import "./Sports.css";

const url =
  "https://newsapi.org/v2/everything?q=sports&from=2021-05-12&sortBy=publishedAt&apiKey=18d7e7ccb67143da8bd7dbda72816fe9";

function Sports() {
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
      <div className="Sports">
        <h1 className="Heading">Explore Latest On Sports</h1>
        <div className="Heading-body">
          {data?.articles?.map((news) => (
            <SportsCard key={news.url} news={news} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="Sports">
        <h1>Sorry no data received</h1>
      </div>
    );
  }
}

export default Sports;