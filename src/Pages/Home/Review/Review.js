import React from 'react';

const Review = ({r}) => {
    const {name, comment, rating} = r;

    return (
        <div class="card  bg-base-100 shadow-xl border">
            <div class="card-body text-sm">
                <h2 class="text-rose-600">Name: {name}</h2>
                <small>Comment: {comment}</small>
                <h2>Rating: {rating}</h2> 
            </div>
        </div>
    );
};

export default Review;