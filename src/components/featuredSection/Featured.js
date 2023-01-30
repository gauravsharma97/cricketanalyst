import React, { useEffect, useState } from "react";
import Ball from "../../resources/ball.png";
import SeriesCard from "../common/SeriesCard.js";
import SeriesData from "../../data/seriesData.json";

export default function Featured() {
  const [series, setSeries] = useState([]);

  const getSeries = async () => {
    // await fetch('https://api.cricapi.com/v1/series?apikey=106ff446-17af-4e59-8070-2c4790d1ccd0&offset=0&search=India')
    //   .then(response => response.json())
    //   .then(response => setSeries(response.data))
    //   .catch(err => console.error(err));

    await setSeries(SeriesData.data);
  };

  useEffect(() => {
    getSeries();
  }, []);

  return (
    <>
      <div className="flex items-center">
        <h2 className="text-2xl m-4 font-semibold font-serif">
          Featured Fixtures
        </h2>
        <img src={Ball} alt="ball" className="w-7 h-7"></img>
      </div>
      <div className="grid grid-cols-4">
        {series.map((item) => (
          <div key={item.id}>
            <SeriesCard
              id={item.id}
              title={item.name}
              from={item.startDate}
              to={item.endDate}
              t20={item.t20}
              odi={item.odi}
              test={item.test}
            />
          </div>
        ))}
      </div>
    </>
  );
}
