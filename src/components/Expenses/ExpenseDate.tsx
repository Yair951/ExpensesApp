import React from "react";
import "./ExpenseDate.css";

interface IProps {
  date: Date;
}

const ExpenseDate: React.FC<IProps> = (props: IProps) => {
  const { date } = props;
  const extractDay: Function = (): string => {
    return date.toLocaleString("he-IL", {
      timeZone: "UTC",
      day: "2-digit",
    });
  };
  const extractMonth: Function = (): string => {
    return date.toLocaleString("he-IL", {
      timeZone: "UTC",
      month: "long",
    });
  };
  const extractYear: Function = (): number => {
    return date.getFullYear();
  };

  return (
    <div className="expense-date">
      <div className="expense-date__month">{extractMonth()}</div>
      <div className="expense-date__year">{extractYear()}</div>
      <div className="expense-date__day">{extractDay()}</div>
    </div>
  );
};

export default ExpenseDate;
