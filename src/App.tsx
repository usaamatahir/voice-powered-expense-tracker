import React, { useEffect, useRef } from "react";
import IncomeExpense from "./components/IncomeExpense/IncomeExpense";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
  ErrorPanel,
} from "@speechly/react-ui";
import { Grid } from "@material-ui/core";
import useStyles from "./Style";
import Main from "./components/Main/Main";

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Grid item sm={4} xs={12} className={classes.mobile}>
          <IncomeExpense title="Income" />
        </Grid>
        <Grid item sm={3} xs={12} className={classes.main}>
          <Main />
        </Grid>
        <Grid item sm={4} xs={12} className={classes.desktop}>
          <IncomeExpense title="Income" />
        </Grid>
        <Grid item sm={4} xs={12} className={classes.last}>
          <IncomeExpense title="Expense" />
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
        <ErrorPanel />
      </PushToTalkButtonContainer>
    </div>
  );
};

export default App;
