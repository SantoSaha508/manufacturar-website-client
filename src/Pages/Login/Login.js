import React, { useEffect } from 'react';
import google from '../../image/icon/google1.png';
import Footer from '../Shared/Footer';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import useToken from '../../hooks/useToken';


const Login = () => {
    // google sign in
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    // use form
    const { register, formState: { errors }, handleSubmit } = useForm();
    // email pass sign in
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    // *
    const [token] = useToken(user || gUser);
    
    const navigate = useNavigate();
    const location = useLocation();

    let signInError;
    let from = location.state?.from?.pathname || "/";

      // * update with useEffect & token
    useEffect( () => {
        if (token) {
            navigate(from, { replace: true });
        }
    },[token, from, navigate])

    // for (google & email/pass) sign in
    if (gError || error) {
        signInError = <small className='text-red-500'>{error?.message || gError?.message}</small>
    }
    if (gLoading || loading) {
        return <Loading></Loading>
    }


    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);

    };

    return (
        <div>
            <div className='flex my-10 justify-center items-center'>
                <div className="card w-96 bg-gray-300 shadow-xl p-5">
                    <h2 className="text-center text-3xl font-bold">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                                
                            </label>
                            <input 
                                type="email"         placeholder="Enter email" className="input input-bordered w-full max-w-xs" 
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required.'
                                    },
                                    pattern: {
                                      value: /[A-Za-z]{3}/,
                                      message: 'Provide a valid email' 
                                    }
                                  })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}

                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                                
                            </label>
                            <input 
                                type="password"         placeholder="Enter password" className="input input-bordered w-full max-w-xs" 
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'password is required.'
                                    },
                                    minLength: {
                                      value: 6,
                                      message: 'Must be 6 character or longer.' 
                                    }
                                  })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}

                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                            </label>
                        </div>

                        {signInError}

                        <input type="submit" className='btn bg-pink-800 w-80 mx-auto' value="Login"/>
                    </form>

                    <p className='my-2'>New to colors Paint LTD? <Link to="/signup" className='text-pink-500 font-bold'>Sign Up</Link></p>

                    <div className="divider">OR</div>

                    <button
                        onClick={() => signInWithGoogle()}
                        className='btn w-80 mx-auto my-4'>
                        <img className='w-20 mx-auto' src={google} alt="" />
                    </button>

                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Login;