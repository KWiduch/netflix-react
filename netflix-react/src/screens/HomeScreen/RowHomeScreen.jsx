import React, { useState, useEffect } from "react";
import axios from "axios";
import "./RowHomeScreen.css";

export const RowHomeScreen = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(fetchUrl).then(function (response) {
      setMovies(response.data.results);
    });
  }, []);
  return (
    <div>
      <div className="title-row">{title}</div>
      <div className="container-row">
        {movies.map((movie) => (
          <div key={movie.id}>
            <img
              className="row-image"
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt="xd"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
