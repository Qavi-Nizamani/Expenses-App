import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Expenses not found!</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((item) => {
        return (
          <ExpenseItem
            title={item.title}
            date={item.date}
            price={item.amount}
          />
        );
      })}
    </ul>
  );
};
export default ExpensesList;
