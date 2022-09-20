import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';   
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
	const { dispatch } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};

	return (
		<li className='list-group-item d-flex justify-content-between align-items-center'>
			{props.name}
			<div>
				<span className="bg-primary text-white rounded p-1 badge-primary badge-pill ml-5">£{props.cost}</span>
				<TiDelete size='1.5em' onClick={handleDeleteExpense} />
				{/* <TiDelete size='1.5em' /> */}
			</div>     
		</li>
	);
};

export default ExpenseItem;
