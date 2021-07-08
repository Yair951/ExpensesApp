import React, { useState } from "react";
import "./ExpensesFilter.css";

interface IProps {
  onChangedExpense: Function;
  filteredYear: string;
}

const ExpensesFilter: React.FC<IProps> = (props: IProps) => {
  const { onChangedExpense, filteredYear } = props;
  const handlechangedOption: Function = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    onChangedExpense(e.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={filteredYear} onChange={(e) => handlechangedOption(e)}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
