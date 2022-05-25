import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Footer from '../Shared/Footer';

const Purchase = () => {
    const [user, loading, error] = useAuthState(auth);

    // useEffect( () => {
    //     fetch(`http://localhost:5000/tool/${}`)
    // },[])

    return (
        <div>
            <div className="flex w-full my-5">
                <div className="grid p-2 flex-grow card bg-base-300 rounded-box place-items-center">
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center ">
                            <h2 className="card-title">Name: { }</h2>
                            <p className='bg-gray-200 rounded text-black'>Description: { }</p>
                            <h2 className="card-title">Price: $ { }</h2>
                            <h2 className="card-title">Min Order: { }</h2>
                            <h2 className="card-title">Available: { }</h2>

                        </div>
                    </div>
                </div>

                <div className="divider divider-horizontal">OR</div>

                <div className="grid p-2 flex-grow card bg-base-300 rounded-box place-items-center">
                    <h2>Purchase Order</h2>
                    <form>
                        <span className="label-text">What is your name?</span><br />
                        <input type="text" disabled value={user?.displayName} name='name' className="input input-bordered w-100 max-w-xs my-2" /> <br />

                        <span className="label-text">Your Email</span><br />
                        <input type="email" disabled value={user?.email} name='email' className="input input-bordered w-100 max-w-xs" /> <br />

                        <span className="label-text">Your address?</span><br />
                        <input type="text" placeholder="Address" name='address' className="input input-bordered w-100 max-w-xs my-2" /> <br />

                        <span className="label-text">Your contact</span> <br />
                        <input type="number" placeholder="Phone number" name='phone' className="input input-bordered w-100 max-w-xs" /> <br />

                        <span className="label-text">Quantity</span><br />
                        <input type="number" placeholder='min quantity' name='quantity' className="input input-bordered w-100 max-w-xs my-2" /> <br />

                        <input type="submit" className='btn bg-pink-800 w-80 mx-auto' value="Order" />
                    </form>

                </div>
            </div>
            <div className='my-4'>
                <Link to="/review" className='bg-success p-2 '>Give a Review</Link>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Purchase;