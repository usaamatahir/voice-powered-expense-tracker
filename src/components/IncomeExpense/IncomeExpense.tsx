import React, { FC } from "react";
import { Card, CardHeader, Typography, CardContent } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import useStyles from "./Styles";
import useTransaction from "./useTransaction";

type Props = {
  title: string;
};

const IncomeExpense: FC<Props> = ({ title }) => {
  const classes = useStyles();
  const { chartData, total } = useTransaction(title);
  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default IncomeExpense;
