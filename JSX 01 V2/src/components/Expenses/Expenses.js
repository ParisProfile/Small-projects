import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesDate from "./ExpensesDate";

function Expenses(props) {

  return (
    <div className="expenses">
         <ExpenseItem 
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
        />
    </div>
  );
  }
export default Expenses;
