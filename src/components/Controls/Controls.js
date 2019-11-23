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
import { useSelector, useDispatch } from "react-redux";
import {
  successfulChosenNumber,
  missedChosenNumber,
  remainingNumbers,
  resetValuesOnDefault
} from "../../store/actions/actions";

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
    position: "relative",
    zIndex: 9999
  }
}));

const Controls = () => {
  const [level, setLevel] = useState("easy");
  const [letter, setLetter] = useState("");
  const [chosenNumbers, setChosenNumbers] = useState(null);
  const [chosenElement, setChosenElement] = useState(null);
  const [intervalID, setInterlID] = useState(null);
  const [isGameStarted, setIsGameStared] = useState(false);
  const allNumbers = useSelector(state => state.app.allNumbers);
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleLevelChange = event => {
    setLevel(event.target.value);
  };

  const handleInputChange = event => {
    setLetter(event.target.value);
    checkValue(event.target.value);
  };

  const checkValue = letter => {
    if (letter.toLowerCase() === chosenElement.letter.toLowerCase()) {
      dispatch(successfulChosenNumber(chosenElement));
    } else {
      dispatch(missedChosenNumber(chosenElement));
    }
  };

  const handleGameBtn = () => {
    if (isGameStarted === true) {
      resetValues();
    } else {
      setIsGameStared(!isGameStarted);
      let numbers = [...allNumbers];
      startGame(numbers);
    }
  };

  const resetValues = () => {
    setChosenNumbers(null);
    clearInterval(intervalID);
    setIsGameStared(!isGameStarted);
    dispatch(resetValuesOnDefault());
  };

  const startGame = numbers => {
    let intervalID = null;
    if (level === "easy") {
      intervalID = setInterval(getRandomNumber(numbers), 5000);
    } else if (level === "medium") {
      intervalID = setInterval(getRandomNumber(numbers), 3500);
    } else if (level === "hard") {
      intervalID = setInterval(getRandomNumber(numbers), 2000);
    }
    setInterlID(intervalID);
  };

  const getRandomNumber = numbers => () => {
    dispatch(remainingNumbers());
    setLetter("");
    const randomNumber = Math.floor(Math.random() * numbers.length) + 1;
    const chosenElement = numbers[randomNumber];
    const elementIndex = numbers.indexOf(chosenElement);
    setChosenNumbers(chosenElement.id);
    setChosenElement(chosenElement);
    numbers.splice(elementIndex, 1);
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
              control={<Radio color="primary" disabled={radioButtonDisabled} />}
              label="Easy"
            />
            <FormControlLabel
              value="medium"
              control={<Radio color="primary" disabled={radioButtonDisabled} />}
              label="Medium"
            />
            <FormControlLabel
              value="hard"
              control={<Radio color="primary" disabled={radioButtonDisabled} />}
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
          {isGameStarted ? chosenNumbers : 0}
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
