import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

const expenses=[
    { id: "1", date: new Date(2023, 7, 15), title: "Insurance", price: 100,location:"Bangalore" },
    { id: "2", date: new Date(2023, 3, 25), title: "Book", price: 10, location: "Delhi" },
    { id: "3", date: new Date(2023, 10, 11), title: "Pen", price: 1, location: "Hyderabad" },
    { id: "4", date: new Date(2023, 1, 14), title: "Laptop", price: 200, location: "Mumbai" },
]

function Expenses(){
    return (
        <div>
            {expenses.map((expense)=>{
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            price={expense.price}
            location={expense.location}
          >
          </ExpenseItem>
        )
      })}
        </div>
    )
}

export default Expenses;