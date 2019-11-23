import React, { useState, useEffect, useRef } from "react";
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
  resetValuesOnDefault,
  saveChosenNumber,
  changeGameStatus
} from "../../store/actions/actions";
import Paper from "@material-ui/core/Paper";

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
  },
  numberPaper: {
    width: 150,
    margin: '10px auto',
    padding: 5,
    height: 79,
    backgroundColor: '#f2f2f2',
  }
}));

const Controls = () => {
  const [level, setLevel] = useState("easy");
  const [letter, setLetter] = useState("");
  const [chosenNumbers, setChosenNumbers] = useState(0);
  const [chosenElement, setChosenElement] = useState(null);
  const [numbers, setNumbers] = useState([]);
  const allNumbers = useSelector(state => state.app.allNumbers);
  const gameStatus = useSelector(state => state.app.gameStatus);
  const classes = useStyles();
  const dispatch = useDispatch();
  const intervalID = useRef(null);
  const inputElement = useRef(null);

  useEffect(() => {
    if (allNumbers) {
      setNumbers(allNumbers);
    }
  }, [allNumbers]);

  const handleLevelChange = event => {
    setLevel(event.target.value);
  };

  const handleInputChange = event => {
    setLetter(event.target.value);
    checkValue(event.target.value);
  };

  const handleGameBtn = () => {
    if (gameStatus === true) {
      dispatch(changeGameStatus(false));
      resetValues();
    } else {
      startGame();
      inputElement.current.focus();
      dispatch(changeGameStatus(true));
    }
  };

  const checkValue = letter => {
    if (letter.toLowerCase() === chosenElement.letter.toLowerCase()) {
      dispatch(successfulChosenNumber(chosenElement));
    }else if(letter === ""){
      return
    }else {
      dispatch(missedChosenNumber(chosenElement));
    }
  };

  const resetValues = () => {
    setChosenNumbers(null);
    clearInterval(intervalID.current);
    dispatch(changeGameStatus(false));
    dispatch(resetValuesOnDefault());
    setChosenElement(null);
    setLetter("");
  };

  const startGame = () => {
    let scoreLeft = 26;
    let allNumbers = [...numbers];
    if (level === "easy") {
      intervalID.current = setInterval(
        gameControl(scoreLeft, allNumbers),
        5000
      );
    } else if (level === "medium") {
      intervalID.current = setInterval(
        gameControl(scoreLeft, allNumbers),
        3500
      );
    } else if (level === "hard") {
      intervalID.current = setInterval(
        gameControl(scoreLeft, allNumbers),
        2000
      );
    }
  };

  const gameControl = (scoreLeft, allNumbers) => () => {
    if (scoreLeft > 0) {
      dispatch(remainingNumbers());
      setLetter("");
      getRandomNumber(allNumbers);
      scoreLeft--;
    } else {
      resetValues();
    }
  };

  const getRandomNumber = allNumbers => {
    const randomNumber = Math.floor(Math.random() * allNumbers.length);
    const getRandomlyElement = allNumbers[randomNumber];
    const elementIndex = allNumbers.indexOf(getRandomlyElement);
    setChosenNumbers(getRandomlyElement.id);
    setChosenElement(getRandomlyElement);
    dispatch(saveChosenNumber(getRandomlyElement));
    allNumbers.splice(elementIndex, 1);
    setNumbers(allNumbers);
  };

  const gameButton = gameStatus ? "Stop Game" : "Start Game";

  const radioButtonDisabled = gameStatus ? true : false;

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
        <Paper className={classes.numberPaper}>
          <Typography
            variant="h3"
            component="h6"
            className={classes.randomNumber}
          >
            {gameStatus ? chosenNumbers : 0}
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="outlined-basic"
          label="Input Letter"
          variant="outlined"
          onChange={handleInputChange}
          value={letter}
          inputRef={inputElement}
        />
      </Grid>
    </Grid>
  );
};

export default Controls;
