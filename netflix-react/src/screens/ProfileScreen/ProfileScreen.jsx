import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { useHistory } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import { auth } from "../../components/constants/firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

import "./ProfileScreen.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  user: {
    marginLeft: "20px",
  },
  btnProfile: {
    "&:hover": {
      color: "rgba(255, 0, 0, 0.5)",
    },
  },
});

export const ProfileScreen = () => {
  let history = useHistory();

  const classes = useStyles();

  const user = useSelector(selectUser);
  const userEmail = user.email;
  return (
    <>
      <div className="container">
        <div className="nav-register">
          <div className="logo">
            <img
              onClick={() => history.push("/")}
              height="30px"
              src="/image/logo-netflix2.png"
              alt="sd"
            />
          </div>
          <div>
            <Avatar variant="square" className={classes.square}>
              {userEmail.charAt(0).toUpperCase()}
            </Avatar>
          </div>
        </div>
        <div className="card-container">
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <div className="top-card">
                  <Avatar variant="square" className={classes.square}>
                    {userEmail.charAt(0).toUpperCase()}
                  </Avatar>
                  <Typography
                    className={classes.user}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    {userEmail}
                  </Typography>
                </div>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                className={classes.btnProfile}
                onClick={() => auth.signOut()}
                size="small"
              >
                Logout
              </Button>
              <Button className={classes.btnProfile} size="small">
                Change email //todo
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
};
