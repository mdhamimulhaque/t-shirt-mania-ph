import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Brother = () => {
    const ring = useContext(RingContext)
    return (
        <div className='wrapper_div'>
            <h2>Brother</h2>
            <p>{ring}</p>
        </div>
    );
};

export default Brother;