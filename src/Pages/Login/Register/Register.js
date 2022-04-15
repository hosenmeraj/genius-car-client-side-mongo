import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const navigateLogin = event => {
        navigate('/login')
    }
    if (user) {
        navigate('/home')
    }
    const handleRegister = event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        createUserWithEmailAndPassword(email, password)

    }
    return (
        <div className='register-form'>
            <h2 className="register-title text-primary">Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' id='' placeholder='Name' />
                <br />
                <input type="email" name="email" id="" placeholder='Enter email' required />
                <br />
                <input type="password" name="password" id="" placeholder='password' required />
                <br />
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link className='text-danger pe-auto text-decoration-none' to='/login' onClick={navigateLogin}>Please Login</Link>
            </p>
        </div>
    );
};

export default Register;