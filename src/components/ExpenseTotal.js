import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


function ExpenseTotal() {
	const { expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
		return (total = total + item.cost);
	}, 0);

  return (
    <div className='alert alert-primary p-4'>
        <span>Spent so far: £{totalExpenses}</span>
    </div>
  )
}

export default ExpenseTotal