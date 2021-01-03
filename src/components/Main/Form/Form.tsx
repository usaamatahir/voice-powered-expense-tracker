import React, { useContext, useState } from "react";
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import useStyles from "./Style";
import { ExpenseTrackerContext } from "../../../context/context";
import { StateProps } from "../../../Types/Types";
import { v4 as uuidv4 } from "uuid";
import {
  expenseCategories,
  incomeCategories,
} from "../../../constants/categories";
import formatDate from "../../../utils/formatDate";

const initialData: StateProps = {
  amount: 0,
  category: "",
  type: "",
  date: formatDate(new Date()),
};

const Form = () => {
  const classes = useStyles();
  const { addTransaction } = useContext(ExpenseTrackerContext);
  const [formData, setFormData] = useState<StateProps>(initialData);
  console.log(formData.date);

  const createTransaction = () => {
    const transaction = {
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    };
    addTransaction(transaction);
    setFormData(initialData);
  };

  const selectedCategories =
    formData.type === "Income" ? incomeCategories : expenseCategories;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
          ...
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={formData.type}
            onChange={(e: any) =>
              setFormData({ ...formData, type: e.target.value })
            }
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={formData.category}
            onChange={(e: any) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            {selectedCategories.map((c) => (
              <MenuItem key={c.type} value={c.type}>
                {c.type}
              </MenuItem>
            ))}
            <MenuItem value="business">Business</MenuItem>
            <MenuItem value="salary">Salary</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="number"
          label="Amount"
          value={formData.amount}
          onChange={(e: any) =>
            setFormData({ ...formData, amount: e.target.value })
          }
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="date"
          label="Date"
          value={formData.date}
          onChange={(e: any) =>
            setFormData({ ...formData, date: formatDate(e.target.value) })
          }
          fullWidth
        />
      </Grid>
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        onClick={createTransaction}
        fullWidth
      >
        Create
      </Button>
    </Grid>
  );
};

export default Form;
