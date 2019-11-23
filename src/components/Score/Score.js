import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    alignItems: "center",
    marginTop: 10,
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      top: 30,
      right: 30,
      alignItems: "flex-end",

    }
  },
  hit: {
    color: "#4ccc43",
    textTransform: "uppercase"
  },
  miss: {
    color: "#d63b3b",
    textTransform: "uppercase"
  },
  left: {
    color: "#446ec9",
    textTransform: "uppercase"
  }
}));

const Score = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      className={classes.container}
    >
      <Grid item xs={12}>
        <Typography variant="subtitle2" component="h3" gutterBottom>
          Score
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="body2"
          component="h3"
          gutterBottom
          className={classes.hit}
        >
          Hit: 4
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="body2"
          component="h3"
          gutterBottom
          className={classes.miss}
        >
          Miss: 3
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="body2"
          component="h3"
          gutterBottom
          className={classes.left}
        >
          Left: 15
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Score;
