import React, { useState } from "react";
import "./ExpenseForm.css";

interface IForm {
  enteredTitle: string;
  enteredAmount: string;
  enteredDate: string;
}

const ExpenseForm: React.FC = () => {
  const [enteredForm, setEnteredForm] = useState<IForm>({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler: Function = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredForm((prevState) => {
      return { ...prevState, enteredTitle: e.target.value };
    });
  };
  const amountChangeHandler: Function = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredForm((prevState) => {
      return { ...prevState, enteredAmount: e.target.value };
    });
  };
  const dateChangeHandler: Function = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredForm((prevState) => {
      return { ...prevState, enteredDate: e.target.value };
    });
  };

  return (
    <form action="">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            onChange={(e) => {
              titleChangeHandler(e);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={(e) => {
              amountChangeHandler(e);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={(e) => {
              dateChangeHandler(e);
            }}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
