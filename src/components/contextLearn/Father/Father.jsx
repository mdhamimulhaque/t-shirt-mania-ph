import React from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Father = () => {
    return (
        <div className='wrapper_div'>
            <h2>Father</h2>
            <div className="flex">
                <Myself />
                <Brother />
                <Sister />
            </div>
        </div>
    );
};

export default Father;