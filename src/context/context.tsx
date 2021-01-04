import React, { useReducer, createContext } from "react";
import { StateProps } from "../Types/Types";
import { AddTransaction, DeleteTransaction } from "./actions";
import contextReducer from "./reducer";
import { initialState } from "./initialState";

export const ExpenseTrackerContext = createContext(initialState);

export const TransactionProvider = ({ children }: any) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  const deleteTransaction = (id: string) => {
    dispatch({
      type: DeleteTransaction,
      payload: id,
    });
  };

  const addTransaction = (transaction: StateProps) => {
    dispatch({
      type: AddTransaction,
      payload: transaction,
    });
  };

  const balance = transactions.reduce(
    (acc: number, currVal: StateProps) =>
      currVal.amount &&
      (currVal.type === "Expense"
        ? acc - currVal?.amount
        : acc + currVal?.amount),
    0
  );

  return (
    <ExpenseTrackerContext.Provider
      value={{
        deleteTransaction,
        balance,
        addTransaction,
        transactions,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
