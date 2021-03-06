import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyAllOrder = () => {
    const [myorders, setMyorders] = useState([]);
    const [user, loading] = useAuthState(auth);

    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`https://vast-badlands-60767.herokuapp.com/orders?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        navigate('/home');
                    }

                    return res.json()
                })
                .then(data => {

                    setMyorders(data);
                })
        }
    }, [user]);

    const handleDelete = (email) => {
        fetch(`https://vast-badlands-60767.herokuapp.com/orders/${email}`,{
                method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                toast.success('order cancel');
            }
        })
    }


    return (
        <div className='border-4 p-2 my-3'>
            <h2 className='text-2xl my-2'>My Orders: {myorders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Product name</th>
                            <th>Quantity</th>
                            <th>Total price</th>
                            <th>Pay Status</th>
                            <th>Cancel Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myorders.map((mo, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{mo.name}</td>
                                <td>{mo.productName}</td>
                                <td>{mo.quantity} p</td>
                                <td>${mo.total_price}</td>

                                <td>
                                    {(mo.total_price && !mo.paid) && <Link to={`/dashboard/payment/${mo._id}`}><button className='btn btn-xs btn-success'>Payment</button></Link>}
                                    {(mo.total_price && mo.paid) && <span className='text-success'>Paid</span>}
                                </td>



                                <td><button onClick={()=> handleDelete(user.email)} className="btn btn-xs">Cancel</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAllOrder;