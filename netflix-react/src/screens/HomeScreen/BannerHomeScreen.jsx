import React, { useState, useEffect } from "react";
import "./BannerHomeScreen.css";
import { requests } from "../../components/constants/Requests";
import axios from "axios";

export const BannerHomeScreen = () => {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    axios.get(requests.fetchTrending).then(function (response) {
      setBanner(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length) + 1
        ]
      );
    });
  }, []);

  console.log(banner);

  const truncate = (text) => {
    console.log(text + "to jest text");
    return text?.length > 150 ? text.substring(0, 150) + "..." : text;
  };

  return (
    <>
      <div
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${banner.backdrop_path}")`,
        }}
      >
        <div className="inside-banner">
          <h1 className="title-banner">{banner.title}</h1>
          <div className="buttons-banner">
            <button className="button-banner">Play</button>
            <button className="button-banner">Add to list</button>
          </div>
          <h2 className="description-banner">{truncate(banner.overview)}</h2>
        </div>
      </div>
    </>
  );
};
