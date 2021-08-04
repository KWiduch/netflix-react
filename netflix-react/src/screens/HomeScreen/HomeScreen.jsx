import React from "react";
import { BannerHomeScreen } from "./BannerHomeScreen";
import { NavbarHomeScreen } from "./NavbarHomeScreen";

export const HomeScreen = () => {
  return (
    <div>
      <NavbarHomeScreen />
      <BannerHomeScreen />
    </div>
  );
};
