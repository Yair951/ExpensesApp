import React from "react";
import { IExpenses } from "../../Interfaces/ExpenseInterface";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

interface IProps {
  item: IExpenses[];
}

const Expenses: React.FC<IProps> = (props: IProps) => {
  const { item } = props;

  return (
    <Card className="expenses">
      {item.map((expense) => {
        return <ExpenseItem {...expense} key={expense.id} />;
      })}
    </Card>
  );
};

export default Expenses;
