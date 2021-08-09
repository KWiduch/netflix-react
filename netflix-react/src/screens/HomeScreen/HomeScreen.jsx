import React from "react";
import { requests } from "../../components/constants/Requests";
import { BannerHomeScreen } from "./BannerHomeScreen";
import { NavbarHomeScreen } from "./NavbarHomeScreen";
import { RowHomeScreen } from "./RowHomeScreen";
import "./HomeScreen.css";
import { MoviePanel } from "./MoviePanel";

export const HomeScreen = () => {
  return (
    <div className="container">
      <NavbarHomeScreen />
      <BannerHomeScreen />
      <MoviePanel />
      <RowHomeScreen title="Comedy" fetchUrl={requests.fetchComedy} />
      <RowHomeScreen title="Action" fetchUrl={requests.fetchAction} />
      <RowHomeScreen title="Horror" fetchUrl={requests.fetchHorror} />
      <RowHomeScreen title="Top rated" fetchUrl={requests.fetchTopRated} />

      <RowHomeScreen
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />
      <RowHomeScreen title="Romance" fetchUrl={requests.fetchRomance} />
    </div>
  );
};
