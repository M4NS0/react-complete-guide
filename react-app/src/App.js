import React from 'react'
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
];

  const addExpenseHandler = expense => {
    console.log('In app.js', expense);
  }

  return (   
    <div>
      <NewExpense  onAddExpense={addExpenseHandler}/>
      {/* 
        2nd step
        passing value *child-to-parent*
        onAddExpense={addExpenseHandler} is used recieve data from NewExpense.js
       */}
      

      <Expenses items={expenses} />
      {/* 
        1st step
        passing value *parent-to-child*
        items={expenses} is used to pass the array to the component
        obs:. props can only be used to pass from parent to child 
      */}
    </div>
  );
}

export default App;