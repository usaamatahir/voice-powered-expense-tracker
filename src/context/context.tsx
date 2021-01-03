import React, { useReducer, createContext } from "react";
import { StateProps } from "../Types/Types";
import { AddTransaction, DeleteTransaction } from "./actions";
import contextReducer from "./reducer";

const initialState: any = [];

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

  return (
    <ExpenseTrackerContext.Provider
      value={{
        deleteTransaction,
        addTransaction,
        transactions,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
