import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error:{error?.message}</p>
    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value
        const password = passwordRef.current.value
        signInWithEmailAndPassword(email, password)
    }

    const resetPassword = async () => {
        const email = emailRef.current.value
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email')
        }
    }
    if (user) {
        navigate(from, { replace: true });
    }

    const navigateRegister = event => {
        navigate('/register')
    }
    return (
        <div className="container w-50 mx-auto mt-2">
            <PageTitle title="Login"></PageTitle>
            <h2 className="text-center text-primary">Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-50 d-block mb-2 mx-auto">
                    Login
                </Button>
                {errorElement}
            </Form>
            <p>New to genius car? <Link className='text-primary pe-auto text-decoration-none' to='/register' onClick={navigateRegister}>Please register</Link></p>
            <p>Forget Password? <button className='text-primary pe-auto text-decoration-none btn btn-link' onClick={resetPassword}>Reset password</button></p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;