import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import { toast } from "react-toastify";
// import auth from "../firebase.init";


const Purchase = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {

        fetch(`https://vast-badlands-60767.herokuapp.com/tool/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [id]);

    const { name: productName, price, img, min_order, available } = product;
    const [quantity, setQuantity] = useState(parseInt(product.min_order));

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        let order = { productName, quantity: quantity || min_order, img, price, name: data.name, address: data.address, phone: data.phone, email: user?.email };
        const total_price = order.quantity * order.price;
        order = { ...order, total_price };
        console.log(order);
        fetch('https://vast-badlands-60767.herokuapp.com/orders', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(order),
        })
            .then(res => res.json())
            .then(data => console.log(data))
        toast('Order successful.');
        reset()
    };
    


    return (
        <div className="px-2">
            <h3 className="text-5xl text-center  font-bold  text-rose-700 py-12 px-4">
                Your Order For
            </h3>

            <div className="card max-w-5xl mx-auto md:card-side bg-base-100 shadow-xl lg:flex-row-reverse md:flex-row-reverse">
                <figure>
                    <img className="p-4" src={img} alt="Album" />
                </figure>
                <div className="card-body flex items-center  justify-center">
                    <h2 className="card-title text-amber-900">{productName}</h2>
                    <div className="card-actions items-center justify-around">
                        <div>
                            <p className=" decoration-sky-500">
                                Price: ${price}
                                <sub className="text-[#FF0000]"> /piece</sub>
                            </p>
                        </div>
                        <div className="flex gap-4 py-2">
                            <div
                                className="badge badge-outline tooltip text-white bg-[#6a4f64]"
                                data-tip="Min order quantity"
                            >
                                Min: {min_order}
                            </div>
                            <div
                                className="badge badge-outline tooltip text-white bg-[#6a4f64]"
                                data-tip="Available quantity"
                            >
                                Stock : {available}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-4 ">


                    </div>


                    {/* form  */}
                    <div className="w-full">
                        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-2 p-4">
                            <input
                                onChange={(e) => setQuantity(parseInt(e.target.value))}
                                type="number"
                                defaultValue={min_order}
                                placeholder="Order Quantity"
                                className="input input-bordered w-full drop-shadow-2xl"

                            />
                            {
                                quantity > available && <p className="text-[#FF0000]">You've to Order Less than or equal {available}</p>
                            }
                            {
                                quantity < min_order && <p className="text-[#FF0000]">You've to Order more than or equal {min_order}</p>
                            }
                            <input   {...register("name", { required: true })} placeholder="Name" defaultValue={user?.displayName} className="input input-bordered drop-shadow-2xl" />
                            <input   {...register("email", { required: true })} placeholder="Name" defaultValue={user?.email} className="input input-bordered drop-shadow-2xl" />

                            <input  {...register("address", { required: true })} placeholder="Address" type="text" className="input input-bordered drop-shadow-2xl" />
                            <input  {...register("phone", { required: true })} placeholder="Phone" type="text" className="input input-bordered drop-shadow-2xl" />
                            <button
                                disabled={quantity < min_order || quantity > available}
                                className="btn btn-dark drop-shadow-2xl"
                            >
                                Place Order
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;