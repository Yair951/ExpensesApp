import React, { ReactNode, useEffect, useState } from "react";
import { IExpenses } from "../../Interfaces/ExpenseInterface";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

interface IProps {
  item: IExpenses[];
}

const Expenses: React.FC<IProps> = (props: IProps) => {
  const { item } = props;
  const [filteredYear, setFilteredYear] = useState<string>("2021");

  const handleExpenseChanged: Function = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  const filterItemsByYear: IExpenses[] = item.filter((expenseValue) => {
    return expenseValue.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangedExpense={handleExpenseChanged}
          filteredYear={filteredYear}
        />
        <ExpensesChart expenses={filterItemsByYear} />
        <ExpensesList item={filterItemsByYear} />
      </Card>
    </div>
  );
};

export default Expenses;
