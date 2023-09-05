import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import googleLogo from '../../images/google.png'
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const [error,setError] = useState('');
    const {signIn,setUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('from logIn page : ',location);
    const from = location.state?.from?.pathname || '/';


    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        setError('');
        signIn(email,password)  
            .then(result => {
                const loggedUser  = result.user;
                setUser(loggedUser);
                console.log(loggedUser);
                form.reset();
                navigate(`${from}`,{replace:true});
            })
            .catch(err => {
                setError(err.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error,
                })
                return;
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login now! It's Completely Free!!!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPass ? "text" : "password"} name='password' placeholder="password" className="input input-bordered" />
                            <label htmlFor="password-show" className='mt-4'  >
                                <input id='password-show' type="checkbox" onClick={() => setShowPass(!showPass)} />
                                <p className='inline-block ml-2'>{showPass ? 'Hide Password' : "Show Password"} </p>
                            </label>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>New to this site? <Link to='/sign-up' className='font-bold text-orange-600'>Please Sign Up</Link></p>
                        <p className='text-3xl text-center text-white'>OR</p>
                        <button className='btn btn-info'> <img className='w-10' src={googleLogo} alt="" /> Continue With Google</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;