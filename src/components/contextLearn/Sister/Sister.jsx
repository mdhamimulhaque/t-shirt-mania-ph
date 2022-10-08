import React, { useContext } from 'react';
import { MoneyContext } from '../GrandPa/GrandPa';



const Sister = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div className='wrapper_div'>
            <h2>Sister</h2>
            <h4>Salary : {money}</h4>
            <button onClick={() => setMoney(money + 5)}>Increase</button>
        </div>
    );
};

export default Sister;