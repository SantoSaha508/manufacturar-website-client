import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe('pk_test_51L3k5pJVgrGC19oqtLwtHdp39JLeNKBKwzg1YPyQ8inXSdYk5ADtAPmcudX1ttCZflBlJnoJBcmeWiIRE7WXkMtb00WcyO1vKR');

const Payment = () => {
    const { id } = useParams();


    const url = `https://vast-badlands-60767.herokuapp.com/order/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='grid justify-center my-10 bg-gray-300 p-5'>

            <div className="card w-50 max-w-md bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Pay for: {order.productName}</h2>
                    <p>Quantity: {order.quantity}</p>
                    <p>Total Price: ${order.total_price}</p>
                    
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100 mt-5">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckOutForm />
                    </Elements>

                </div>
            </div>
        </div>

    );
};

export default Payment;