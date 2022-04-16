import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';



const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if (loading || updating) {
        return <p>Loading...</p>;
    }

    if (user) {
        console.log('user', user);
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
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
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? "text-primary ps-2" : "ps-2 text-danger"} htmlFor="terms">Accept  genius terms and conditions</label> */}
                <label className={`ps-2 ${agree ? "" : "text-danger"}`} htmlFor="terms">Accept  genius terms and conditions</label>
                <input disabled={!agree} type="submit" value="Register" className="w-50 d-block my-2 mx-auto btn btn-primary" />
            </form>
            <p>Already have an account? <Link className='text-primary pe-auto text-decoration-none' to='/login' onClick={navigateLogin}>Please Login</Link>
            </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;