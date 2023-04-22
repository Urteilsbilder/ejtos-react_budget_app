import React, { useContext } from 'react';
import { Dropdown } from 'react-bootstrap';
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
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ backgroundColor: 'lightgreen', color: 'white' }}>
                    <button class="btn" style={{ backgroundColor: 'lightgreen', color: 'white' }}
                        type="button">    
                        {getCurrency()}
                    </button>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ backgroundColor: 'lightgreen' }}>
                    <Dropdown.Item class="dropdown-item" href="#" onClick={() => dispatch({
            type: 'CHG_CURRENCY',
            payload: '$',
        })}>$ Dollar</Dropdown.Item>
                    <Dropdown.Item class="dropdown-item" href="#" onClick={() => dispatch({
            type: 'CHG_CURRENCY',
            payload: '£',
        })}>£ Pound</Dropdown.Item>
                    <Dropdown.Item class="dropdown-item" href="#" onClick={() => dispatch({
            type: 'CHG_CURRENCY',
            payload: '€',
        })}>€ Euro</Dropdown.Item>
                    <Dropdown.Item class="dropdown-item" href="#" onClick={() => dispatch({
            type: 'CHG_CURRENCY',
            payload: '₹',
        })}>₹ Ruppee</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};
export default Budget;