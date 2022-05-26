import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAllOrder = () => {
    const [myorders, setMyorders] = useState([]);
    const [user, loading] = useAuthState(auth);

    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res',res);
                    if(res.status === 401 || res.status === 403){
                        navigate('/home');
                    }
                    
                    return res.json()
                })
                .then(data => {

                    setMyorders(data);
                })
        }
    }, [user])


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
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myorders.map( (mo, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{mo.name}</td>
                                <td>{mo.productName}</td>
                                <td>{mo.quantity} p</td>
                                <td>${mo.total_price}</td>
                                <td><button className="btn btn-xs">Tiny</button></td>
            <td><button className="btn btn-xs">Tiny</button></td>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAllOrder;