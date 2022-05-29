import React from 'react';

const Review = ({r}) => {
    const {name, comment, rating} = r;

    return (
        <div className="card  bg-base-100 shadow-xl border">
            <div className="card-body text-sm text-pink-700">
                <h2>Name: <span className='text-black'>{name}</span></h2>
                <small>Comment: <span className='text-black'>{comment}</span></small>
                <h2>Rating: <span className='text-black'>{rating}</span></h2> 
            </div>
        </div>
    );
};

export default Review;