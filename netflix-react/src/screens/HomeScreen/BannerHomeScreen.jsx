import React, { useState, useEffect } from "react";
import "./BannerHomeScreen.css";
import { requests } from "../../components/constants/Requests";
import axios from "axios";

export const BannerHomeScreen = () => {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    axios.get(requests.fetchTrending).then(function (response) {
      // handle success
      // console.log(
      //   response.data.results[
      //     Math.floor(Math.random() * response.data.results.length) + 1
      //   ]
      // );
      setBanner(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length) + 1
        ]
      );
    });
  }, [banner]);

  console.log(banner);

  return (
    <>
      <div
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${banner?.backdrop_path}")`,
        }}
      >
        <div className="inside-banner">
          <h1 className="title-banner">{banner}</h1>
          <div className="buttons-banner">
            <button className="button-banner">Play</button>
            <button className="button-banner">Add to list</button>
          </div>
          <h2 className="description-banner">description</h2>
        </div>
      </div>
    </>
  );
};
