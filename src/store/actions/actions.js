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