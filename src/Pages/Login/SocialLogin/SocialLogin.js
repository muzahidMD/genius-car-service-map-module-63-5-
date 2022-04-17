import React from 'react';
import googleLogo from "../../../images/Social/Google-logo.png";
import facebookLogo from "../../../images/Social/facebook logo.png";
import './SocialLogin.css';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;

    if (error || error1) {
        errorElement = <p className='text-danger text-center'>Error: {error?.message} {error1?.message}</p>;
    }
    if (user || user1) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center justify-content-around'>
                <div style={{ height: "1px", width: "35%" }} className=' bg-dark'></div>
                <p className='mt-2'>or</p>
                <div style={{ height: "1px", width: "35%" }} className=' bg-dark'></div>
            </div>
            {errorElement}
            <div >
                <button
                    onClick={() => signInWithGoogle()}
                    className='my-3 btn btn-info w-50 d-block mx-auto rounded-pill'
                >
                    <img src={googleLogo} alt="" />
                    <span className='px-3'>Google Sign In</span>
                </button>
                <button
                    className='my-3 btn btn-info w-50 d-block mx-auto rounded-pill'
                >
                    <img src={facebookLogo} alt="" />
                    <span className='px-3'>Facebook Sign In</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='my-3 btn btn-info w-50 d-block mx-auto rounded-pill'
                >
                    <img src={facebookLogo} alt="" />
                    <span className='px-3'>Github Sign In</span>
                </button>
            </div>
        </div >
    );
};

export default SocialLogin;