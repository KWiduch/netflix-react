import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import "./LoginPanel.css";
import { RegisterPanel } from "./RegisterPanel";

const useStyles = makeStyles((theme) => ({
  redButton: {
    backgroundColor: "red",
    color: "white",
    width: "300px",
    marginBottom: "20px",
    "&:hover": {
      backgroundColor: "rgba(255, 0, 0, 0.7)",
    },
  },
}));
export const LoginPanel = () => {
  const classes = useStyles();
  const [registerPanel, setRegisterPanel] = useState(false);

  const registerPanelHandler = () => {
    setRegisterPanel(true);
  };

  return (
    <>
      {registerPanel == true ? (
        <RegisterPanel />
      ) : (
        <div className="container-panel">
          <form>
            <h1 className="title">Login</h1>

            <input className="email-input" type="email" placeholder="Email" />
            <input
              className="password-input"
              type="password"
              placeholder="Password"
            />

            <Button className={classes.redButton}>Login</Button>
            <div className="footer">
              <div className="footer-text">New to Netflix?</div>
              <div onClick={registerPanelHandler} className="footer-link">
                Register now.
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
