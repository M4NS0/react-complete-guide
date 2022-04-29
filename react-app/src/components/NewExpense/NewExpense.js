import React from "react"
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm"


const NewExpense = (props) => {
    const saveExpenseDataHandler = (enterExpenseData) => {
        const expenseData = {
            ...enterExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }

    return (
        <div className="new-expense">
            {/* 
                1st step
                passing value *child-to-parent*
                data must be passed to App.js to be added into the array
            */}
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}
export default NewExpense;