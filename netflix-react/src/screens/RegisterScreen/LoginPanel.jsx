import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { auth } from "../../components/constants/firebase";
import "./LoginPanel.css";
import { RegisterPanel } from "./RegisterPanel";

//LOGOWANIE TODO

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
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [registerPanel, setRegisterPanel] = useState(false);

  const registerPanelHandler = () => {
    setRegisterPanel(true);
  };

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      {registerPanel == true ? (
        <RegisterPanel />
      ) : (
        <div className="container-panel">
          <form>
            <h1 className="title">Login</h1>

            <input
              ref={emailRef}
              className="email-input"
              type="email"
              placeholder="Email"
            />
            <input
              ref={passwordRef}
              className="password-input"
              type="password"
              placeholder="Password"
            />

            <Button onClick={login} type="submit" className={classes.redButton}>
              Login
            </Button>
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
