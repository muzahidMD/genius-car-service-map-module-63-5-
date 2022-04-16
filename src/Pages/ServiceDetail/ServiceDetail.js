import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div className='text-center'>
            <h2 className='text-primary mt-4 mb-4'>Welcome to Detail: {serviceId} </h2>
            <Link to={'/checkout'}>
                <button className='btn btn-primary'>Proceed CheckOut</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;