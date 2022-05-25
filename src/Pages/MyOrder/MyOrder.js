import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyOrder = () => {
    const [myorders, setMyorders] = useState([]);
    const [user, loading] = useAuthState(auth);

    console.log(user.email);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders?email=${user.email}`)
                .then(res => res.json())
                .then(data => setMyorders(data))
        }
    }, [user])

    


    return (
        <h2>this is my order: {myorders.length}</h2>
    );
};

export default MyOrder;