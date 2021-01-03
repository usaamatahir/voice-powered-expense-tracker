import React from "react";
import IncomeExpense from "./components/IncomeExpense/IncomeExpense";
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
        <Grid item sm={4} xs={12}>
          <IncomeExpense title="Income" />
        </Grid>
        <Grid item sm={3} xs={12}>
          <Main />
        </Grid>
        <Grid item sm={4} xs={12}>
          <IncomeExpense title="Expense" />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
