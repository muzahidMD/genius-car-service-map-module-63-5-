import React from 'react';
import sleeping from '../../../images/404.jpg'

const NotFound = () => {
    return (
        <div>
            <h1 className='text-primary text-center mt-4 mb-4'>Mechanic is Sleeping</h1>
            <img className='w-100' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;