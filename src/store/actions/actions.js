import * as actionTypes from "./actionTypes";

export const remainingNumbers = payload => ({
  type: actionTypes.REMAINING_NUMBERS, payload
});

export const successfulChosenNumber = payload => ({
  type: actionTypes.SUCCESS, payload
});

export const missedChosenNumber = payload => ({
  type: actionTypes.MISS, payload
});

export const noInputtedNumber = payload => ({
  type: actionTypes.NO_INPUTTED_NUMBER, payload
});

export const resetValuesOnDefault = () => ({
  type: actionTypes.RESET_ON_DEFAULT
});

export const saveChosenNumber = payload => ({
  type: actionTypes.SAVE_CHOSEN_NUMBER, payload
});

export const changeGameStatus = payload => ({
  type: actionTypes.CHANGE_GAME_STATUS, payload
});
