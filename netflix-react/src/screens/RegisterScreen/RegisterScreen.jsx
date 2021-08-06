import Button from "@material-ui/core/Button";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import "./RegisterScreen.css";
import { useState } from "react";
import { RegisterPanel } from "./RegisterPanel";

const useStyles = makeStyles((theme) => ({
  redButton: {
    backgroundColor: "red",
    color: "white",
    "&:hover": {
      color: "black",
    },
  },
}));

export const RegisterScreen = () => {
  const [register, setRegister] = useState(false);
  const showRegisterPanel = () => {
    return setRegister(true);
  };
  const classes = useStyles();
  return (
    <div
      className="container-register"
      style={{
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)),url("/image/netflix-register.jpg")`,
      }}
    >
      {register == true ? (
        <RegisterPanel />
      ) : (
        <div className="box">
          <div className="nav-register">
            <div className="logo">
              <img height="30px" src="/image/logo-netflix2.png" alt="sd" />
            </div>
            <div className="login register">
              <Button
                className={classes.redButton}
                variant="contained"
                color="waring"
              >
                Login
              </Button>
            </div>
          </div>
          <div className="content-container">
            <h1 className="title-register">
              Unlimited films, TV programmes and more.
            </h1>
            <h2 className="subTitle-register">
              Watch anywhere. Cancel at any time
            </h2>
            <div className="button-container">
              <Button
                onClick={showRegisterPanel}
                className={classes.redButton}
                variant="contained"
                color="waring"
              >
                Get started
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
