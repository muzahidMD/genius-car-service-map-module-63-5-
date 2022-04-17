import React from 'react';
import googleLogo from "../../../images/Social/Google-logo.png";
import facebookLogo from "../../../images/Social/facebook logo.png";
import './SocialLogin.css';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center justify-content-around'>
                <div style={{ height: "1px", width: "35%" }} className=' bg-dark'></div>
                <p className='mt-2'>or</p>
                <div style={{ height: "1px", width: "35%" }} className=' bg-dark'></div>
            </div>
            <div >
                <button className='my-3 btn btn-info w-50 d-block mx-auto rounded-pill'>
                    <img src={googleLogo} alt="" />
                    <span className='px-3'>Google Sign In</span>
                </button>
                <button className='my-3 btn btn-primary w-50 d-block mx-auto rounded-pill'>
                    <img src={facebookLogo} alt="" />
                    <span className='px-3'>Facebook Sign In</span>
                </button>
                <button className='my-3 btn btn-primary w-50 d-block mx-auto rounded-pill'>
                    <img src={facebookLogo} alt="" />
                    <span className='px-3'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;