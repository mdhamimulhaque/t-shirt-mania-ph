import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import "./Grandpa.css";


export const RingContext = createContext('This is ring context');
export const MoneyContext = createContext(1000)

const GrandPa = () => {
    const [money, setMoney] = useState(5000);
    return (
        <RingContext.Provider value='ring ring ring context'>
            <MoneyContext.Provider value={[money, setMoney]}>
                <div className='wrapper_div'>
                    <h2>GrandPa</h2>
                    <h3>Salary : {money}</h3>
                    <div className="flex">
                        <Father />
                        <Uncle />
                        <Aunty />
                    </div>
                </div>
            </MoneyContext.Provider>
        </RingContext.Provider>
    );
};

export default GrandPa;