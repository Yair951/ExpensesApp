import React from "react";
import { IExpenses } from "../../Interfaces/ExpenseInterface";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

interface IProps {
  item: IExpenses[];
}

const ExpensesList: React.FC<IProps> = (props: IProps) => {
  const { item } = props;

  return (
    <>
      {item.length === 0 ? (
        <h2 className="expenses-list__fallback">לא נמצאו הוצאות</h2>
      ) : (
        <ul className="expenses-list">
          {item.map((expense) => {
            return <ExpenseItem {...expense} key={expense.id} />;
          })}
        </ul>
      )}
    </>
  );
};

export default ExpensesList;
