import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    marginLeft: 125,
  },
}));

const NavBar = () => {
  const header = useStyles();

  return (
    <div className={header.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography align="center" variant="h5" className={header.title}>
            Skill Demo
          </Typography>
          <Button color="inherit" component={Link} to="/guess">
            Guess
          </Button>
          <Button color="inherit" component={Link} to="/state">
            State
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
