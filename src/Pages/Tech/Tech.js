import React, { useState, useEffect } from "react";
import TechCard from "./TechCard";
import "./Tech.css";

const url =
  "https://newsapi.org/v2/everything?q=technology&from=2021-05-12&sortBy=publishedAt&apiKey=18d7e7ccb67143da8bd7dbda72816fe9";

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
        <h1>Explore Latest On Tech</h1>

        {data?.articles?.map((news) => (
          <TechCard key={news.url} news={news} />
        ))}
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