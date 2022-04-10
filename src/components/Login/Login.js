import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import './Login.css'

const Login = () => {
    return (
        <div className="form-container">
            <div>
            <h2>This is Login</h2>
            <form>
                
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder='enter your email' id="input-email" />
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder='enter your password' id="input-password" />
            </div>
            <input className="btn-submit" type="submit" value="Login" />
            </form>
            <p>
                New to Ema Jhon? <Link to="/signup" className="new-account">Create New Account</Link>
            </p>
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

export default Login;