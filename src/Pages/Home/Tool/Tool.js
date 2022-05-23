import React from 'react';
import { Link } from 'react-router-dom';


const Tool = ({ tool }) => {
    const { name, img, price, min_order, description, available, } = tool;
    return (
        <div class="card card-compact  bg-base-100 shadow-xl  bg-pink-900">
            <div className='mx-auto mt-5'>
                <img style={{ height: 250 }} className='lg:w-80 rounded' src={img} alt="Shoes" />
            </div>
            <div class="card-body text-white">
                <h2 class="card-title">Name: {name}</h2>
                <h2 class="card-title">Price: {price}</h2>
                <h2 class="card-title">Min Order: {min_order}</h2>
                <h2 class="card-title">Available: {available}</h2>
                <p>Description: {description}</p>

                <Link className='bg-rose-500 p-2 rounded text-xl' to="/purchase">PlaceOrder</Link>
            </div>
        </div>
    );
};

export default Tool;