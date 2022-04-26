import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        const url = `http://localhost:5000/services`;
        fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
            })

    };
    return (
        <div className="w-50 mx-auto">
            <h1>Please add Service</h1>
            <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                <input className="mb-2" placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className="mb-2" placeholder='Description' {...register("description")} />
                <input className="mb-2" placeholder='Price' type="number" {...register("price")} />
                <input className="mb-2" placeholder='Photo URL' type="text" {...register("img")} />
                <input type="submit" value='Add Service' />
            </form>
        </div>
    );
};

export default AddService;