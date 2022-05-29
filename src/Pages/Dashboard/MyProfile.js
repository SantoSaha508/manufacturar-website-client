import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';

import auth from '../../firebase.init';


const MyProfile = () => {
    const [user] = useAuthState(auth)
    const [singleUser, setUserinfo] = useState({})



    let email = user?.email;

    useEffect(() => {
        fetch(`http://localhost:5000/user/${email}`)
            .then(res => res.json())
            .then(data => { setUserinfo(data) })
    }, [email])



    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = async data => {

        let updateUser = { name: singleUser.name, email: singleUser.email, linkedIn: data.linkedIn, education: data.education, location: data.location, phone: data.phone }
        console.log(data);
        fetch(`http://localhost:5000/user/${email}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(updateUser),
        })
            .then(res => res.json())
            .then(data => {
                const refetch = () => {
                    fetch(`http://localhost:5000/user/${email}`)
                        .then(res => res.json())
                        .then(data => { setUserinfo(data) })
                }
                refetch()
                console.log(data)
            }

            )
        reset()

    }

    return (
        <div className='bg-gray-200'>
            <h1 className="text-xl font-bold text-center my-2">My Profile</h1>

            <div className="hero  bg-base-200">

                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://icon-library.com/images/profile-image-icon/profile-image-icon-21.jpg" alt='profile' className="w-40 max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{singleUser?.name}</h1>
                        <p className='text-xl'><span className='font-bold'>Linkedin:</span> {singleUser?.linkedIn}</p>
                        <p className='text-xl'><span className='font-bold'>Email:</span> {singleUser?.email}</p>
                        <p className='text-xl'><span className='font-bold'>Education:</span> {singleUser?.education}</p>
                        <p className='text-xl'><span className='font-bold'>Location:</span> {singleUser?.location}</p>
                        <p className='text-xl'><span className='font-bold'>Phone No:</span> {singleUser?.phone}</p>

                    </div>
                </div>
            </div>

            <div className='mt-5 flex h-screen justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-xl font-bold text-rose-600">Update profile</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"

                                    defaultValue={singleUser?.name}
                                    placeholder="Your Name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">LinkedIn</span>
                                </label>
                                <input

                                    type="text"

                                    placeholder="Your LinkedIn"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("linkedIn", {
                                        required: {
                                            value: true,
                                            message: 'LinkedIn is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.linkedIn?.type === 'required' && <span className="label-text-alt text-red-500">{errors.linkedIn.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email Address</span>
                                </label>
                                <input
                                    type="text"

                                    defaultValue={singleUser?.email}
                                    placeholder="Your Email Address"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email Address is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Education</span>
                                </label>
                                <input

                                    type="text"

                                    placeholder="Your Education"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("education", {
                                        required: {
                                            value: true,
                                            message: 'Education is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.education?.type === 'required' && <span className="label-text-alt text-red-500">{errors.education.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input

                                    type="text"

                                    placeholder="Your Location"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("location", {
                                        required: {
                                            value: true,
                                            message: 'Location is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.location?.type === 'required' && <span className="label-text-alt text-red-500">{errors.location.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Phone No</span>
                                </label>
                                <input

                                    type="number"

                                    placeholder="Your Phone No"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: 'Phone No is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                                </label>
                            </div>

                            <input className='btn w-full max-w-xs text-white' type="submit" value="Save" />
                        </form>


                    </div>
                </div>
            </div >

        </div>
    );
};

export default MyProfile;