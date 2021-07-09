import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

interface IProps {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

const ExpenseItem: React.FC<IProps> = (props: IProps) => {
  const { id, title, amount, date } = props;

  return (
    <li>
      <Card className="expense-item">
        <div className="expense-item__description">
          <div className="expense-item__title ">{title}</div>
          <div className="expense-item__price">{amount}₪</div>
        </div>
        <ExpenseDate date={date} />
      </Card>
    </li>
  );
};

export default ExpenseItem;
