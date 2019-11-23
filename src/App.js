import React from "react";
import Controls from "./components/Controls/Controls";
import { makeStyles } from "@material-ui/core/styles";
import Score from "./components/Score/Score";
import Letters from "./components/Letters/Letters";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  app: {
    textAlign: "center",
    height: "100vh"
  },
  winnerMessage: {
    color: "#1b8916"
  }
});

function App() {
  const scoreHit = useSelector(state => state.app.scoreHit);
  const classes = useStyles();

  const renderWinnerMessage =
    scoreHit === 26 ? (
      <Typography variant="h3" component="h6" className={classes.winnerMessage}>
        Congratulations !!!
      </Typography>
    ) : null;
  return (
    <div className={classes.app}>
      <Controls />
      <Score />
      <Letters />
      {renderWinnerMessage}
    </div>
  );
}

export default App;
