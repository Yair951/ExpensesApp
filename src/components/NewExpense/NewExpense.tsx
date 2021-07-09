import React, { useState } from "react";
import { IForm } from "../../Interfaces/ExpenseInterface";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

interface IProps {
  onAddExpense: Function;
}

const NewExpense: React.FC<IProps> = (props: IProps) => {
  const { onAddExpense } = props;
  const [openNewExpense, setOpenNewExpense] = useState<boolean>(false);

  const saveExpenseDataHandler: Function = (
    enteredExpenseData: IForm
  ): void => {
    const expenseData = {
      title: enteredExpenseData["enteredTitle"],
      amount: Number(enteredExpenseData["enteredAmount"]),
      date: new Date(enteredExpenseData["enteredDate"]),
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  const adjustExpenseOpen: Function = () => {
    setOpenNewExpense(!openNewExpense);
  };
  return (
    <div className="new-expense">
      {openNewExpense ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          adjustExpenseOpen={adjustExpenseOpen}
        />
      ) : (
        <div>
          <button onClick={() => adjustExpenseOpen()}>הוסף הוצאה חדשה</button>
        </div>
      )}
    </div>
  );
};

export default NewExpense;
