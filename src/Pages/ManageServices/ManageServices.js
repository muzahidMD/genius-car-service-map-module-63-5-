import React from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
    const [services, setServices] = useServices;

    return (
        <div>
            <h2>Manage your services</h2>
            {
                services.map(service => <div key={service._id}>
                    <h4>{service.name}</h4>
                </div>)
            }
        </div>
    );
};

export default ManageServices;