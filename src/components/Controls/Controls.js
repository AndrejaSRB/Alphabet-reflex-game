import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3)
  },
  radioGroup: {
    flexDirection: "row"
  },
  randomNumber: {
    margin: "15px 0"
  },
  container: {
    position: 'relative',
    zIndex: 9999
  }
}));

const Controls = () => {
  const [level, setLevel] = useState("easy");
  const [letter, setLetter] = useState("");
  const [isGameStarted, setIsGameStared] = useState(false);
  const classes = useStyles();

  const handleLevelChange = event => {
    setLevel(event.target.value);
  };

  const handleInputChange = event => {
    setLetter(event.target.value);
  };

  const handleGameBtn = () => {
    setIsGameStared(!isGameStarted);
  };
  const gameButton = isGameStarted ? "Stop Game" : "Start Game";
  const radioButtonDisabled = isGameStarted ? true : false;
  return (
    <Grid container direction="column" className={classes.container}>
      <Grid item xs={12}>
        <FormControl component="fieldset" className={classes.formControl}>
          <RadioGroup
            aria-label="level"
            name="levels"
            value={level}
            onChange={handleLevelChange}
            className={classes.radioGroup}
          >
            <FormControlLabel
              value="easy"
              control={<Radio color="primary" disabled={radioButtonDisabled}/>}
              label="Easy"
            />
            <FormControlLabel
              value="medium"
              control={<Radio color="primary" disabled={radioButtonDisabled}/>}
              label="Medium"
            />
            <FormControlLabel
              value="hard"
              control={<Radio color="primary" disabled={radioButtonDisabled}/>}
              label="Hard"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Button variant="outlined" color="primary" onClick={handleGameBtn}>
          {gameButton}
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="h3"
          component="h6"
          className={classes.randomNumber}
        >
          17
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="outlined-basic"
          label="Input Letter"
          variant="outlined"
          onChange={handleInputChange}
          value={letter}
        />
      </Grid>
    </Grid>
  );
};

export default Controls;
