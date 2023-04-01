import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
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
