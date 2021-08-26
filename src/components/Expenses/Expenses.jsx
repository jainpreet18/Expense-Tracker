import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpensesFilter.jsx";
import ExpensesList from "./ExpensesList.jsx";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const yearChangeHandler = (yearSelected) => {
    setSelectedYear(yearSelected);
  };
  // console.log(selectedYear);
  const currentExpense = props.expenseData.filter((expense) => {
    if (expense.date.toISOString().substring(0, 4) === selectedYear) {
      return true;
    }
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        onYearChange={yearChangeHandler}
        selected={selectedYear}
      ></ExpenseFilter>
      <ExpensesChart expenses={currentExpense} />
      <ExpensesList items={currentExpense} />
    </Card>
  );
};

export default Expenses;
