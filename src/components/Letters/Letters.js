import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    width: '70%',
    margin: '20px auto'
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

const Letters = () => {
  const classes = useStyles();
  const [data, setData] = useState([
      {id: 1, letter: "A", color:""},
      {id: 2, letter: "B", color:""},
      {id: 3, letter: "C", color:""},
      {id: 4, letter: "D", color:""},
      {id: 5, letter: "E", color:""},
      {id: 6, letter: "F", color:""},
      {id: 7, letter: "G", color:""},
      {id: 8, letter: "H", color:""},
      {id: 9, letter: "I", color:""},
      {id: 10, letter: "J", color:""},
      {id: 11, letter: "K", color:""},
      {id: 12, letter: "L", color:""},
      {id: 13, letter: "M", color:""},
      {id: 14, letter: "N", color:""},
      {id: 15, letter: "O", color:""},
      {id: 16, letter: "P", color:""},
      {id: 17, letter: "Q", color:""},
      {id: 18, letter: "R", color:""},
      {id: 19, letter: "S", color:""},
      {id: 20, letter: "T", color:""},
      {id: 21, letter: "U", color:""},
      {id: 22, letter: "V", color:""},
      {id: 23, letter: "W", color:""},
      {id: 24, letter: "X", color:""},
      {id: 25, letter: "Y", color:""},
      {id: 26, letter: "Z", color:""},
  ]);

  const renderLetterWithNumbers =  data.map(element => (
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
