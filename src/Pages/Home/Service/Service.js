import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, price, description, _id } = service
    const navigate = useNavigate();
    const handleServiceDetails = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div id='services' className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>{price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => handleServiceDetails(_id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;