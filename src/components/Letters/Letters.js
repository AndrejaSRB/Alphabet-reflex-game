import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
  container: {
    width: "70%",
    margin: "20px auto",
    [theme.breakpoints.up("md")]: {
      margin: "50px auto"
    }
  },
  hit: {
    color: "#4ccc43"
  },
  miss: {
    color: "#d63b3b"
  },
  left: {
    color: "#446ec9"
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
    renderElements()
  },[scoreLeft]);

  return (
    <Grid container direction="row" className={classes.container}>
      {renderElements()}
    </Grid>
  );
};

export default Letters;
