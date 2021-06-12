import React, { useState, useEffect } from "react";
import FashionCard from "./FashionCard";
import "./Fashion.css";

const url =
  "https://newsapi.org/v2/everything?q=fashion&sortBy=publishedAt&apiKey=18d7e7ccb67143da8bd7dbda72816fe9";

function Fashion() {
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
      <div className="Fashion">
        <h1>Explore Latest on Fashion</h1>

        {data?.articles?.map((news) => (
          <FashionCard key={news.url} news={news} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="Fashion">
        <h1>Sorry no data received</h1>
      </div>
    );
  }
}

export default Fashion;