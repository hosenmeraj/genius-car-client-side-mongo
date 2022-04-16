import React from 'react';
import google from '../../../images/social/google.png'
import github from '../../../images/social/github.png'
import facebook from '../../../images/social/facebook.png'
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
    let errorElement;
    if (error || error1 || error2) {
        errorElement = <p className='text-danger'>Error:{error?.message}</p>
    }
    if (user || user1 || user2) {
        navigate('/home')
    }
    return (
        <div>
            <div className="d-flex align-items-center">
                <div style={{ height: "1px" }} className='bg-primary w-50'></div>
                <p className="mt-2 px-2">Or</p>
                <div style={{ height: "1px" }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-dark w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'> Google SignIn</span>
                </button>
                <button onClick={() => signInWithGithub()} className='btn btn-dark w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={github} alt="" />
                    <span className='px-2'> Github SignIn</span>
                </button>
                <button onClick={() => signInWithFacebook()} className='btn btn-dark w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={facebook} alt="" />
                    <span className='px-2'> Facebook SignIn</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;