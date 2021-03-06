import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const SeeReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect( () => {
        fetch(`https://vast-badlands-60767.herokuapp.com/seereview`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    return (
        <div  className='text-center font-bold text-3xl p-4 text-black my-5'>
            <h2 className='text-pink-700'>Consumer Reviews</h2>

            <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-6 p-10'>
                {
                    reviews.map(r => <Review
                        key={r._id}
                        r={r}
                    ></Review>)  
                }
            </div>
        </div>
    );
};

export default SeeReviews;