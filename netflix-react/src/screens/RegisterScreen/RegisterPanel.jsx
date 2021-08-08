import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import "./RegisterPanel.css";
import { LoginPanel } from "./LoginPanel";
import { useRef } from "react";
import { auth } from "../../components/constants/firebase";

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
export const RegisterPanel = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const reapetPasswordRef = useRef(null);
  const classes = useStyles();
  const [loginPanel, setLoginPanel] = useState(false);
  const [error, setError] = useState(null);

  const loginPanelHandler = () => {
    setLoginPanel(true);
  };

  const createAccount = (e) => {
    e.preventDefault();
    if (passwordRef.current.value == reapetPasswordRef.current.value) {
      auth
        .createUserWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value
        )
        .then((authUser) => {
          console.log(authUser);
          emailRef.current.value = "";
          passwordRef.current.value = "";
          reapetPasswordRef.current.value = "";
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      setError("passwords not matching");
    }
  };

  return (
    <>
      {loginPanel == true ? (
        <LoginPanel />
      ) : (
        <div className="container-panel">
          <form>
            <h1 className="title">Register</h1>

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
            <input
              ref={reapetPasswordRef}
              className="password-input"
              type="password"
              placeholder="Reapet password"
            />

            <Button
              onClick={createAccount}
              type="submit"
              className={classes.redButton}
            >
              Register
            </Button>
            <div className="footer">
              <div className="footer-text">Got an account already?</div>
              <div className="footer-link" onClick={loginPanelHandler}>
                Login in now.
              </div>
            </div>
            {error ? <div className="alert">{error}</div> : <></>}
          </form>
        </div>
      )}
    </>
  );
};
