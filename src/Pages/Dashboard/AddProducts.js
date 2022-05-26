import React from 'react';
import { useForm } from 'react-hook-form';

const AddProducts = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = async data => {
        console.log(data);
        const product = { name: data.name, price: data.price, img: data.img, description: data.description, minQuantity: data.minQuantity, stockQuantity: data.stockQuantity }
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('product added successfully');
                reset();
            })
    }
    return (
        <div>
            <div className='flex justify-center items-center'>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body bg-gray-400">
                        <h2 className="text-center text-2xl font-bold">Add new Product</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input

                                    type="text"

                                    placeholder="Price"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("price", {
                                        required: {
                                            value: true,
                                            message: 'price is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.Price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.Price.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input
                                    type="text"


                                    placeholder="Product description"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("description", {
                                        required: {
                                            value: true,
                                            message: 'Description is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Product image</span>
                                </label>
                                <input

                                    type="text"

                                    placeholder="Image Link"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("img", {
                                        required: {
                                            value: true,
                                            message: 'img is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.img?.type === 'required' && <span className="label-text-alt text-red-500">{errors.img.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Minimum quantity for Order</span>
                                </label>
                                <input

                                    type="text"

                                    placeholder="Minimum Piece"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("minQuantity", {
                                        required: {
                                            value: true,
                                            message: 'Minimum Piece is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.minQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minQuantity.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Give Stock </span>
                                </label>
                                <input

                                    type="number"

                                    placeholder="Stock"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("stockQuantity", {
                                        required: {
                                            value: true,
                                            message: 'stockQuantity No is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.stockQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.stockQuantity.message}</span>}
                                </label>
                            </div>

                            <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
                        </form>


                    </div>
                </div>
            </div >
        </div>
    );
};

export default AddProducts;