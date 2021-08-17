import React from "react";
import "./MoviePanel.css";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  exitIcon: {
    color: "white",
  },
}));

export const MoviePanel = ({ setSwitcher, key }) => {
  const classes = useStyles();
  const hideMoviePanel = () => {
    setSwitcher(false);
  };
  return (
    <>
      <div className="movie-container">
        <div className="exit">
          <IconButton onClick={hideMoviePanel} className={classes.exitIcon}>
            <CloseIcon className={classes.exitIcon} />
          </IconButton>
          <div className="banner">foteczka</div>
          <div className="banner">{key}</div>
        </div>
      </div>
    </>
  );
};
