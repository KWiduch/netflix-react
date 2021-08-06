import React, { useRef } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBarSolid: {
    backgroundColor: "black",
  },
  appBarTransparent: {
    backgroundColor: "transparent",
  },
  logo: {
    display: "flex",
    cursor: "pointer",
  },
  searchIcon: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    marginRight: "20px",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  container_logo: {
    display: "flex",
  },
  square: {
    cursor: "pointer",
  },
  title: {
    display: "flex",
    alignItems: "center",
  },
}));

export const NavbarHomeScreen = () => {
  const classes = useStyles();
  let history = useHistory();
  const [navBackground, setNavBackground] = useState("appBarTranspartent");
  const navRef = useRef();
  navRef.current = navBackground;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 210;
      if (!show) {
        setNavBackground("appBarTransparent");
      } else {
        setNavBackground("appBarSolid");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const refreshPage = () => {
    window.location.reload(false);
  };

  const goToProfile = () => {
    history.push("/profile");
  };

  return (
    <div className={classes.root}>
      <AppBar
        elevation={0}
        className={classes[navRef.current]}
        position="fixed"
      >
        <Toolbar className={classes.container}>
          <div className={classes.container_logo}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              <img
                onClick={refreshPage}
                className={classes.logo}
                height="20px"
                src="/image/logo-netflix2.png"
                alt="logo"
              />
            </Typography>
          </div>
          <div className={classes.container_logo}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <div>
              <Avatar
                variant="square"
                className={classes.square}
                onClick={goToProfile}
              >
                K
              </Avatar>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
