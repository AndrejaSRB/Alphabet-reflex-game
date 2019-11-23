import React from 'react';
import Controls from './components/Controls/Controls';
import { makeStyles } from "@material-ui/core/styles";
import Score from './components/Score/Score';
import Letters from './components/Letters/Letters';

const useStyles = makeStyles(theme => ({
  app: {
    textAlign: "center",
    height: '100vh',
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Controls/>
      <Score />
      <Letters />
    </div>
  );
}

export default App;
