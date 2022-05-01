import react, { useState } from "react";
import "./ExpenseItem.css";
import ExpensesDate from "./ExpensesDate";
import Card from '../UI/Card';

function ExpenseItem(props) {
  useState();
  let title = props.title;

  const clickHandler = () => {
    title = 'Updated';
    console.log(title)
  }
  return (
    <Card className="expense-item">
     <ExpensesDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
