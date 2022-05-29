import React from 'react';
import swal from 'sweetalert';

const ManageProduct = ({ product, handleDelete }) => {
    const { _id, name, img, description, min_order, available, price } = product;

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10">
                <img src={img} alt="Shoes" className="rounded-xl w-36" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title  ">Name: {name}</h2>
                <h2 className="card-title">Description: {description}</h2>
                <h2 className="card-title">Available:{available} Piece</h2>
                <h2 className="card-title">Min Order : {min_order}</h2>
                <h2 className="card-title">Price: $ {price}</h2>

                <button className="btn bg-rose-700" onClick={() => handleDelete(_id)} >Delete Item</button>
            
            </div>
        </div>
    );
};

export default ManageProduct;