import React, { useState } from "react";
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
  const [newTitle, setNewTitle] = useState<string>(title);

  const clickHandler: React.MouseEventHandler<HTMLButtonElement> = (): void => {
    setNewTitle("היי אחי");
  };

  return (
    <Card className="expense-item">
      <button onClick={clickHandler}>Change Title</button>
      <div className="expense-item__description">
        <div className="expense-item__title ">{newTitle}</div>
        <div className="expense-item__price">{amount}₪</div>
      </div>
      <ExpenseDate date={date} />
    </Card>
  );
};

export default ExpenseItem;
