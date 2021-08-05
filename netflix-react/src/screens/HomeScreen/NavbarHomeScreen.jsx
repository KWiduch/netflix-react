import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  nav: {
    backgroundColor: "black",
  },
  logo: {
    display: "flex",
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
}));

export const NavbarHomeScreen = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.nav} position="static">
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
                className={classes.logo}
                height="60px"
                src="/image/logo-netflix.png"
                alt="logo"
              />
            </Typography>
          </div>
          <div className={classes.container_logo}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <Avatar variant="square" className={classes.square}>
              K
            </Avatar>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
