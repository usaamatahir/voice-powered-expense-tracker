import { StateProps } from "../Types/Types";
import { AddTransaction, DeleteTransaction } from "./actions";
const reducer = (state: any, action: any) => {
  let transactions;
  switch (action.type) {
    case AddTransaction:
      transactions = [action.payload, ...state];
      localStorage.setItem("transactions", JSON.stringify(transactions));
      return transactions;
    case DeleteTransaction:
      transactions = state.filter(
        (trans: StateProps) => trans.id !== action.payload
      );
      localStorage.setItem("transactions", JSON.stringify(transactions));
      return transactions;
    default:
      return state;
  }
};

export default reducer;
