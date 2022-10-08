import React from 'react';
import Cousin from '../Cousin/Cousin';

const Uncle = () => {
    return (
        <div className='wrapper_div'>
            <h2>Uncle</h2>
            <Cousin />
            <Cousin />
        </div>
    );
};

export default Uncle;