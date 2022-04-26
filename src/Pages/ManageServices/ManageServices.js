import React from 'react';
import useServices from '../../hooks/UseServices';

const ManageServices = () => {
    const [services, setServices] = useServices()
    const handleDelete = id => {
        const procced = window.confirm('Are you want to delete?')
        if (procced) {
            const url = `http://localhost:5000/services/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = services.filter(service => service._id !== id)
                    setServices(remaining)
                })
        }
    }
    return (
        <div className="w-50 mx-auto">
            <h1>Manage your Service</h1>
            {
                services.map(service => <div key={service._id}>
                    <h5>{service.name} <button onClick={() => handleDelete(service._id)}>X</button> </h5>
                </div>)
            }
        </div>
    );
};

export default ManageServices;