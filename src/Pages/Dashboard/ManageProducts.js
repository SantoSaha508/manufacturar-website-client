import React, { useEffect, useState } from 'react';
import ManageProduct from './ManageProduct';
import swal from 'sweetalert';


const ManageProducts = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/tool')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data);
        })
    },[])

    const handleDelete = id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const url =`http://localhost:5000/tool/${id}`;
                    console.log(url);
                    fetch(url, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            const remaining = products.filter(order => order._id !== id);
                            setProducts(remaining);
                        })
                    swal("Your order has been canceled!", {
                        icon: "success",
                    });
                } else {
                    swal("Please pay!");
                }
            });
    }
    return (
        <div className='mt-5 bg-gray-50 p-10'>
            <p className='text-center font-bold  text-2xl  mb-5'>Products</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5'>
                {
                    products.map(product=><ManageProduct
                    key={product._id}
                    product ={product}
                    handleDelete={handleDelete}
                    ></ManageProduct>)
                }
            </div>
            
        </div>
    );
};

export default ManageProducts;