import React,{useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseData";
import Card from "../UI/Card.js";

function ExpenseItem(props){
    const [title,setTitle]=useState(props.title);
    function changeTitleHandler(){
        setTitle("New Title");
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />  
            <div className="expense-item__location">{props.location}</div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.price}</div>
            </div>
            <button onClick={changeTitleHandler}>Change Title</button>
        </Card>
    )
}
export default ExpenseItem;