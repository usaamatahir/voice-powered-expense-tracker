import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";
import useStyles from "./Style";
import Form from "./Form/Form";
import List from "./List/List";

const Main = () => {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader title="Expense Tracker" subheader="With Speechly" />
      <CardContent>
        <Typography variant="h5" align="center">
          Total Balance $100
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: "1.5em", marginTop: "'20px" }}
        >
          {/* Info Card */}
          Try Saying: Add income for $100
        </Typography>
        <Divider />
        <Form />
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
