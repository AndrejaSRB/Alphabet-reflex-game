import * as actionTypes from './actions/actionTypes';

const initialState = {
  allNumbers: [
    { id: 1, letter: "A", color: "left" },
    { id: 2, letter: "B", color: "left" },
    { id: 3, letter: "C", color: "left" },
    { id: 4, letter: "D", color: "left" },
    { id: 5, letter: "E", color: "left" },
    { id: 6, letter: "F", color: "left" },
    { id: 7, letter: "G", color: "left" },
    { id: 8, letter: "H", color: "left" },
    { id: 9, letter: "I", color: "left" },
    { id: 10, letter: "J", color: "left" },
    { id: 11, letter: "K", color: "left" },
    { id: 12, letter: "L", color: "left" },
    { id: 13, letter: "M", color: "left" },
    { id: 14, letter: "N", color: "left" },
    { id: 15, letter: "O", color: "left" },
    { id: 16, letter: "P", color: "left" },
    { id: 17, letter: "Q", color: "left" },
    { id: 18, letter: "R", color: "left" },
    { id: 19, letter: "S", color: "left" },
    { id: 20, letter: "T", color: "left" },
    { id: 21, letter: "U", color: "left" },
    { id: 22, letter: "V", color: "left" },
    { id: 23, letter: "W", color: "left" },
    { id: 24, letter: "X", color: "left" },
    { id: 25, letter: "Y", color: "left" },
    { id: 26, letter: "Z", color: "left" }
  ],
  scoreLeft: 26,
  scoreMissed: 0,
  scoreHit: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHOSEN_NUMBER:
      return {
        ...state,
        scoreLeft: state.scoreLeft - 1,
      };
    default:
      return state;
  }
};

export default reducer;
