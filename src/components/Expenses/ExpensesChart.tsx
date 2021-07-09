import React from "react";
import { IDataPoints } from "../../Interfaces/DataPointsInterface";
import { IExpenses } from "../../Interfaces/ExpenseInterface";
import Chart from "../Chart/Chart";

interface IProps {
  expenses: IExpenses[];
}

const ExpensesChart: React.FC<IProps> = (props: IProps) => {
  const { expenses } = props;

  let chartDataPoints: Array<IDataPoints> = [];

  const initializeChartDataPoints: Function = (): void => {
    for (let i = 12; i > 0; i--)
      chartDataPoints.push({
        label: new Date(2020, i, 1).toLocaleString("he-IL", {
          timeZone: "UTC",
          month: "short",
        }),
        value: 0,
      });
  };
  initializeChartDataPoints();
  for (const expense of expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[11 - expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};
export default ExpensesChart;
