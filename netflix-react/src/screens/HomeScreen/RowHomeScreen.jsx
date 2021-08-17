import React, { useState, useEffect } from "react";
import axios from "axios";
import "./RowHomeScreen.css";
import { MoviePanel } from "./MoviePanel";

export const RowHomeScreen = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [switcher, setSwitcher] = useState(false);

  useEffect(() => {
    axios.get(fetchUrl).then(function (response) {
      setMovies(response.data.results);
    });
  }, []);

  const showMoviePanel = () => {
    setSwitcher(true);
  };
  return (
    <div>
      <div className="title-row">{title}</div>
      <div className="container-row">
        {movies.map((movie) => (
          <div key={movie.id}>
            <img
              onClick={showMoviePanel}
              className="row-image"
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt="xd"
            />
          </div>
        ))}
      </div>
      {switcher ? <MoviePanel setSwitcher={setSwitcher} /> : <div></div>}
    </div>
  );
};
