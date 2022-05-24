import React from 'react';
import google from '../../image/icon/google1.png';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Footer from '../Shared/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Loading from '../Shared/Loading';

const Signup = () => {
    // google sign in
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    // use form
    const { register, formState: { errors }, handleSubmit } = useForm();
    // create user by email/pass 
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    let signInError;

    // for (google & email/pass) sign in
    if (gError || error || updateError) {
        signInError = <small className='text-red-500'>{error?.message || gError?.message || updateError?.message}</small>
    }
    if (gLoading || loading || updating) {
        return <Loading></Loading>
    }
    if (gUser || user) {
        console.log(gUser);
    }
    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log("update done");
        navigate('/home');
    };

    return (
        <div>
            <div className='flex my-10 justify-center items-center'>
                <div className="card w-96 bg-gray-300 shadow-xl p-5">
                    <h2 className="text-center text-3xl font-bold">Sign Up</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text" placeholder="Enter your name" className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required.'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>
                            <input
                                type="email" placeholder="Enter email" className="input input-bordered w-full max-w-xs"
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
                                type="password" placeholder="Enter password" className="input input-bordered w-full max-w-xs"
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

                        <input type="submit" className='btn bg-pink-800 w-80 mx-auto' value="Sign Up" />
                    </form>

                    <p className='my-2'>Have an account? <Link to="/login" className='text-pink-500 font-bold'>Login</Link></p>

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

export default Signup;