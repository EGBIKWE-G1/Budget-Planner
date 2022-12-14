import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import { AppProvider } from './context/AppContext'



function App() {
  return (
    <AppProvider>
    <div className="container">  
      <h1 className='mt-3 text-center'>My Budget Planner</h1>
      <div className="m-auto bg-primary p-1" style={{width: "350px"}}  ></div>
      <div className='row mt-3'>
        <div className='col-sm'>
          <Budget />
        </div>
        <div className='col-sm'>
          <Remaining />
        </div>
        <div className='col-sm'>
          <ExpenseTotal />
        </div>
      </div>
      <h3 className='mt-3'>Expenses</h3>
      <div className="bg-primary p-1" style={{width: "113px"}}  ></div>
      <div className='row mt-3'>
					<div className='col-sm'>
            <ExpenseList />
					</div>
				</div>
        <h3 className='mt-3'>Add Expense</h3>
      <div className="bg-primary p-1" style={{width: "163px"}}  ></div>
				<div className='row mt-3'>
					<div className='col-sm'>
						{/* <AddExpenseForm /> */}
            <AddExpenseForm />
					</div>
				</div>
    </div>
    </AppProvider>
  );
}

export default App;
