import React, { useContext } from 'react';
import { RingContext, MoneyContext } from '../GrandPa/GrandPa';

const Cousin = () => {
    const ring = useContext(RingContext);

    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div className='wrapper_div'>
            <h2>Cousin</h2>
            <p>{ring}</p>
            <h4>Salary: {money}</h4>
            <button onClick={() => setMoney(money - 1000)}>Decrease</button>
        </div>
    );
};

export default Cousin;