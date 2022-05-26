import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Tool = ({ tool, setPurchase }) => {
    const { _id, name, img, price, min_order, description, available, } = tool;

    const navigate = useNavigate()

    const handlePurchase = (id) => {
        navigate(`/home/${id}`);
    }


    return (
        <div className="card card-compact  bg-base-100 shadow-xl  bg-pink-900">
            <div className='mx-auto mt-5'>
                <img style={{ height: 250 }} className='lg:w-80 rounded' src={img} alt="Shoes" />
            </div>
            <div className="card-body text-white">
                <h2 className="card-title">Name: {name}</h2>
                <p className='bg-gray-200 rounded text-black'>Description: {description}</p>
                <h2 className="card-title">Price: $ {price}</h2>
                <h2 className="card-title">Min Order: {min_order}</h2>
                <h2 className="card-title">Available: {available}</h2>

                <button onClick={() => handlePurchase(_id)}
                    className='bg-rose-500 p-2 rounded text-xl'>Place Order
                </button>
                
            </div>
        </div>
    );
};

export default Tool;