import React from 'react';

const Purchase = () => {
    

    return (
        <div class="flex w-full">
            <div class="grid p-2 flex-grow card bg-base-300 rounded-box place-items-center">
                <div class="card bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center ">
                        <h2 className="card-title">Name: { }</h2>
                        <p className='bg-gray-200 rounded text-black'>Description: { }</p>
                        <h2 className="card-title">Price: $ { }</h2>
                        <h2 className="card-title">Min Order: { }</h2>
                        <h2 className="card-title">Available: { }</h2>

                    </div>
                </div>
            </div>

            <div class="divider divider-horizontal">OR</div>

            <div class="grid p-2 flex-grow card bg-base-300 rounded-box place-items-center">
                <h2>Purchase Order</h2>
                <form>
                    <span class="label-text">What is your name?</span><br />
                    <input type="text" placeholder="Name" class="input input-bordered w-100 max-w-xs my-2" /> <br />

                    <span class="label-text">Your Email</span><br />
                    <input type="email" placeholder="Enter Email" class="input input-bordered w-100 max-w-xs" /> <br />

                    <span class="label-text">Your address?</span><br />
                    <input type="text" placeholder="Address" class="input input-bordered w-100 max-w-xs my-2" /> <br />

                    <span class="label-text">Your contact</span> <br />
                    <input type="number" placeholder="Phone number" class="input input-bordered w-100 max-w-xs" /> <br />

                    <span class="label-text">Quantity</span><br />
                    <input type="number" placeholder='min quantity' class="input input-bordered w-100 max-w-xs my-2" /> <br />

                    <input type="submit" className='btn bg-pink-800 w-80 mx-auto' value="Order" />
                </form>
            </div>
        </div>
    );
};

export default Purchase;