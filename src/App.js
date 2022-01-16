import { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    date: new Date(2021, 2, 28),
    title: "Car Insurance",
    amount: 284.46,
  },
  {
    id: "e2",
    date: new Date(2021, 2, 28),
    title: "Car Insurance",
    amount: 284.46,
  },
  {
    id: "e3",
    date: new Date(2021, 2, 28),
    title: "Car Insurance",
    amount: 284.46,
  },
  {
    id: "e4",
    date: new Date(2021, 2, 28),
    title: "Car Insurance",
    amount: 284.46,
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addNewExpense = (expense) => {
    setExpenses((prevState) => {
      return [
        {
          id: Math.random().toString(),
          date: expense.date,
          title: expense.title,
          amount: parseInt(expense.amount),
        },
        ...prevState,
      ];
    });
  };
  return (
    <div>
      <NewExpense addNewExpense={addNewExpense} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
