import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
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
        fetch(`http://localhost:5000/orders/${email}`,{
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
        <div>
            <h2>this is my all orders: {myorders.length}</h2>
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
                                <td><button className="btn btn-xs">Pay</button></td>
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