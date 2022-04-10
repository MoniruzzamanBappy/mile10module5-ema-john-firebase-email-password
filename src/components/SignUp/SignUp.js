import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import { FcGoogle } from 'react-icons/fc';
import './SignUp.css'
import auth from './../../firebase.init';

const SignUp = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [error,setError] = useState('');
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()


    const handleEmailBlur = event =>{
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value)
    }

    if(user){
        navigate('/shop')
    }

    const handleCreateUser = (event)=>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError("Password didn't match");
            return;
        }
        setError('');
        createUserWithEmailAndPassword(email, password)
        
    }

    

    return (
        <div className="form-container">
        <div>
        <h2>This is Sign Up</h2>
        <form onSubmit={handleCreateUser}>
            
        <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="email" placeholder='enter your email' id="input-email" />
        </div>
        <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={handlePasswordBlur} type="password" name="password" placeholder='enter your password' id="input-password" />
        </div>
        <div className="input-group">
            <label htmlFor="password">Confirm Password</label>
            <input onBlur={handleConfirmPasswordBlur} type="password" name="password" placeholder='Again enter your password' id="input-password" />
        </div>
        <p>{error}</p>
        <input className="btn-submit" type="submit" value="Sign Up" />
        </form>
        <div className="line-or">
            <hr />
            <p>Or</p>
            <hr />
        </div>
        <button className="btn-google"><span className="google-icon"><FcGoogle></FcGoogle></span> Continue With Google</button>
        </div>
    </div>
    );
};

export default SignUp;