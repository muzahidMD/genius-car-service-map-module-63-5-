import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

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

    const navigateLogin = event => {
        navigate('/login')
    }
    if (loading || updating) {
        return <Loading></Loading>
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/home');
    }

    return (
        <div className='register-form'>
            <h2 className='register-title'>Please Register </h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Your Email' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input onChange={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? 'ms-3 text-primary' : 'ms-3 text-danger'} htmlFor="terms">Accept genius car Terms and Condition</label> */}
                <label className={`ms-3 ${agree ? 'text-primary' : 'text-danger'}`} htmlFor="terms">Accept genius car Terms and Condition</label>
                <input
                    disabled={!agree}
                    className='w-75 d-block mx-auto mt-3 bg-primary'
                    type="submit"
                    value="Register"
                />
            </form>
            <p className='text-center my-3' > Already have an account? <Link className='text-danger text-decoration-none pe-auto' onClick={navigateLogin} to={'/login'}>Please Login</Link ></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;