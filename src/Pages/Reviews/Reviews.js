import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Reviews = () => {
    const [user, loading] = useAuthState(auth);
    

    const submitReview = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const comment = event.target.comment.value;
        const rating = event.target.rating.value;

        const review = {name, comment, rating};
        // console.log(review);

        fetch('http://localhost:5000/reviews', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(review),
        })
        .then(res => res.json())
        .then(data => console.log(data))

    }

    return (
        <div>
            <div className='card p-5 '>
                <form onSubmit={submitReview} className="formDesign mx-auto border p-5 bg-gray-400 rounded">

                    <label>Your name</label><br />
                    <input type="text" name="name" value={user.displayName} class="input input-bordered w-full max-w-xs my-2" />

                    <label>Comments</label><br />
                    <input type="text" name="comment" placeholder="Write your comment" class="input input-bordered w-full max-w-xs my-2" /><br />

                    <label>Rating</label><br />
                    <input type="text" name="rating" placeholder="Out of 5" class="input input-bordered w-full max-w-xs my-2" /><br />


                    <input className='mb-3 bg-pink-600 text-white border rounded p-2 ' type="submit" value="Add Review" />
                </form>
            </div>
        </div>
    );
};

export default Reviews;