import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user, loading] = useAuthState(auth);

    const submitReview = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const comment = event.target.comment.value;
        const rating = event.target.rating.value;

        const review = {name, comment, rating};
        // console.log(review);

        fetch('https://vast-badlands-60767.herokuapp.com/reviews', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(review),
        })
        .then(res => res.json())
        .then(data => console.log(data))
        toast('Thanks for your opinion.');
    }


    return (
        <div className='border-4 my-2'>
            <div className='card p-5 '>
                <h2 className='text-center text-3xl font-bold text-rose-600 p-4'>Feel free to review!</h2>
                <form onSubmit={submitReview} className="formDesign mx-auto border p-5 bg-gray-400 rounded">

                    <label>Your name</label><br />
                    <input type="text" name="name" value={user.displayName} className="input input-bordered w-full max-w-xs my-2" />

                    <label>Comments</label><br />
                    <input type="text" name="comment" placeholder="Write your comment" className="input input-bordered w-full max-w-xs my-2" /><br />

                    <label>Rating</label><br />
                    <input type="text" name="rating" placeholder="Out of 5" className="input input-bordered w-full max-w-xs my-2" /><br />

                    <input className='mb-3 bg-pink-600 text-white border rounded p-2 ' type="submit" value="Add Review" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;