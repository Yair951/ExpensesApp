import React, { useState } from "react";
import { IExpenses } from "./Interfaces/ExpenseInterface";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState<IExpenses[]>([]);

  const addExpenseHandler: Function = (expense: IExpenses): void => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };

  return (
    <div>
      <h2>Let's go bro!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
