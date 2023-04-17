import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { currency } = useContext(AppContext);
    const { budget } = useContext(AppContext);
    const { dispatch  } = useContext(AppContext);
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const trySetBudget = (value) => {
        if (value > 20000) {
            alert("Cannot exceed maximum Budget of 20000")
            return;
        }

        if (value < totalExpenses) {
            alert("You cannot reduce the budget lower than the spending")
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        })
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input value={budget} type="number" step="10" onChange={(event) => trySetBudget(event.target.value)}></input>
        </div>
    );
};
export default Budget;