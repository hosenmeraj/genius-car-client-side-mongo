import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams()
    const [services, setServices] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/services/${serviceId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div >
            <h1>You are to book: {services.name}</h1>
            <div className='text-center '>
                <Link to='/checkout'>
                    <button className='btn btn-primary '>Procced Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;