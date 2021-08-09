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

export const MoviePanel = () => {
  const classes = useStyles();
  return (
    <>
      <div className="movie-container">
        <div className="exit">
          <IconButton className={classes.exitIcon}>
            <CloseIcon
              // style={{ color: green[500] }}
              className={classes.exitIcon}
            />
          </IconButton>
        </div>
      </div>
    </>
  );
};
