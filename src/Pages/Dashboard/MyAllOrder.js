import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAllOrder = () => {
    const [myorders, setMyorders] = useState([]);
    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders?email=${user.email}`)
                .then(res => res.json())
                .then(data => setMyorders(data))
        }
    }, [user])


    return (
        <div>
            <h2>this is my all orders: {myorders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    
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
                            </tr>)
                        }
                        
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAllOrder;