import React, { useState } from "react";
import { IForm } from "../../Interfaces/ExpenseInterface";
import "./ExpenseForm.css";

interface IProps {
  onSaveExpenseData: Function;
  adjustExpenseOpen: Function;
}

const ExpenseForm: React.FC<IProps> = (props: IProps) => {
  const { onSaveExpenseData, adjustExpenseOpen } = props;
  const [enteredForm, setEnteredForm] = useState<IForm>({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const handleNewForm: Function = (enteredFormObject: Object): void => {
    setEnteredForm((prevState) => {
      return { ...prevState, ...enteredFormObject };
    });
  };

  const submitHandler: Function = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onSaveExpenseData(enteredForm);
    resetForm();
  };

  const resetForm: Function = (): void => {
    adjustExpenseOpen();
    setEnteredForm({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };

  return (
    <form onSubmit={(e) => submitHandler(e)} onReset={() => resetForm()}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">כותרת</label>
          <input
            type="text"
            value={enteredForm.enteredTitle}
            required
            onChange={(e) => {
              handleNewForm({ enteredTitle: e.target.value });
            }}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">מחיר</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            required
            value={enteredForm.enteredAmount}
            onChange={(e) => {
              handleNewForm({ enteredAmount: e.target.value });
            }}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">תאריך</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            required
            pattern="\d{4}-\d{2}-\d{2}"
            value={enteredForm.enteredDate}
            onChange={(e) => {
              handleNewForm({ enteredDate: e.target.value });
            }}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="reset">בטל</button>
        <button type="submit">הוסף הוצאה</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
