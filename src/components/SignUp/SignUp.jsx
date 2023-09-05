import React, { useContext, useState } from 'react';
import './SignUp.css';
import googleLogo from '../../images/google.png';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
// import 'sweetalert2/src/sweetalert2.scss';

const SignUp = () => {
    const [showPass, setShowPass] = useState(false);
    const [error, setError] = useState('');
    const { createUser, auth } = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        setError('');
        if (password !== confirmPassword) {
            setError("Your password did not matched!");
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error,

            })
            return;
        }
        else if (password.length < 6) {
            setError("Password must be six character or longer!!");
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error,

            })
            return;
        }

        createUser(email, password)
            .then(result => {
                const registeredUser = result.user;
                updateProfile(auth.currentUser, {
                    displayName: name,
                })
                console.log(registeredUser);
                form.reset();

            })
            .catch(err => {
                setError(err.message)
                console.log(error);
            })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">SignUp now! It's Completely Free!!!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input required type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input required type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input required type={showPass ? "text" : "password"} name='password' placeholder="password" className="input input-bordered" />
                            <label htmlFor="password-show" className='mt-4'  >
                                <input id='password-show' type="checkbox" onClick={() => setShowPass(!showPass)} />
                                <p className='inline-block ml-2'>{showPass ? 'Hide Password' : "Show Password"} </p>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input required type="password" name='confirmPassword' placeholder="confirm password" className="input input-bordered" />

                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">SignUp</button>
                        </div>
                        <p>Already Have an Account? <Link to='/login' className='font-bold text-orange-600'>Please Login</Link></p>
                        <p className='text-3xl text-center text-white'>OR</p>
                        <button className='btn btn-info'> <img className='w-10' src={googleLogo} alt="" /> Continue With Google</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;