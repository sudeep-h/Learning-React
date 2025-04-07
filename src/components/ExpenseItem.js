import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseData";
import Card from "./Card.js";

function ExpenseItem(props){
    function changeTitleHandler(){
        console.log("Button clicked");
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />  
            <div className="expense-item__location">{props.location}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.price}</div>
            </div>
            <button onClick={changeTitleHandler}>Change Title</button>
        </Card>
    )
}
export default ExpenseItem;