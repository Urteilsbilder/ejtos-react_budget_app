import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { currency } = useContext(AppContext);
    const { dispatch  } = useContext(AppContext);
    const getCurrency = () => {
        let label = 'Currency ('
        switch (currency) {
            case '$':
                label += "$ Dollar"
                break;
            case '£':
                label += "£ Pound"
                break;
            case '€':
                label += "€ Euro"
                break;
            case '₹':
                label += "₹ Ruppee"
                break;
            default:
                break;
        }
        label += ")"
        return label
    }

    return (
        <div className='alert alert-secondary'>
            <div class="dropdown">
                <button class="btn btn-success dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false">    
                    {getCurrency()}
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li class="dropdown-item" href="#" >$ Dollar</li>
                    <li class="dropdown-item" href="#" >£ Pound</li>
                    <li class="dropdown-item" href="#" >€ Euro</li>
                    <li class="dropdown-item" href="#" >₹ Ruppee</li>
                </ul>
            </div>
        </div>
    );
};
export default Budget;