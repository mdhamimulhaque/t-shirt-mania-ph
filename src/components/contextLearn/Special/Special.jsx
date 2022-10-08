import React, { useContext } from 'react';
import { RingContext, MoneyContext } from '../GrandPa/GrandPa';

const Special = () => {
    const ring = useContext(RingContext);
    const [money] = useContext(MoneyContext);
    return (
        <div className='wrapper_div'>
            <h2>special</h2>
            <p>{ring}</p>
            <h2>Salary : {money}</h2>
        </div>
    );
};

export default Special;