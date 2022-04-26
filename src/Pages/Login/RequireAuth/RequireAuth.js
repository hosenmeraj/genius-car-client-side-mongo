import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const [sendEmailVerification, sending, error1] = useSendEmailVerification(auth);
    const location = useLocation()
    if (loading) {
        return <p>Loading...</p>;
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }

    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className="text-center">
            <h2 className='text-danger'>Your email is not verify</h2>
            <h3>Please varify your emaill</h3>
            <button
                className="btn btn-primary "
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}
            >
                Send verification
            </button>
            <ToastContainer></ToastContainer>
        </div>
    }
    return children;
};

export default RequireAuth;