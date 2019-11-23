import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {useSelector} from 'react-redux';

const useStyles = makeStyles(theme => ({
  container: {
    width: '70%',
    margin: '20px auto'
  },
  hit: {
    color: "#4ccc43",
  },
  miss: {
    color: "#d63b3b",
  },
  left: {
    color: "#446ec9",
  }
}));

const Letters = () => {
  const classes = useStyles();
  const data = useSelector(state => state.app.allNumbers);
  
  const renderLetterWithNumbers =  data && data.map(element => (
    <Grid item xs={4} md={2} key={element.id}>
        <Typography variant="subtitle1" component="h3" gutterBottom className={classes[element.color]}>
        {`${element.letter} (${element.id})`}
        </Typography>
  </Grid>
))
  return (
    <Grid container direction="row" className={classes.container}>
    {renderLetterWithNumbers}
    </Grid>
  );
};

export default Letters;
