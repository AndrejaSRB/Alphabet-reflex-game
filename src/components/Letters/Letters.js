import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  container: {
    width: "70%",
    margin: "20px auto",
    padding: 10,
    backgroundColor: "#f2f2f2",
    [theme.breakpoints.up("md")]: {
      margin: "50px auto"
    }
  },
  hit: {
    color: "#4ccc43",
    [theme.breakpoints.up("lg")]: {
      padding: 10
    }
  },
  miss: {
    color: "#d63b3b",
    [theme.breakpoints.up("lg")]: {
      padding: 10
    }
  },
  left: {
    color: "#446ec9",
    [theme.breakpoints.up("lg")]: {
      padding: 10
    }
  }
}));

const Letters = () => {
  const classes = useStyles();
  const data = useSelector(state => state.app.allNumbers);
  const scoreLeft = useSelector(state => state.app.scoreLeft);

  const renderElements = () => {
    if (data) {
      return data.map(element => (
        <Grid item xs={4} md={2} key={element.id}>
          <Typography
            variant="subtitle1"
            component="h3"
            gutterBottom
            className={classes[element.color]}
          >
            {`${element.letter} (${element.id})`}
          </Typography>
        </Grid>
      ));
    }
  };

  useEffect(() => {
    renderElements();
  }, [scoreLeft]);

  return (
    <Paper className={classes.container}>
      <Grid container direction="row">
        {renderElements()}
      </Grid>
    </Paper>
  );
};

export default Letters;
