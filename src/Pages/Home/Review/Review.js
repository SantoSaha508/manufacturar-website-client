import React from 'react';

const Review = ({r}) => {
    const {name, comment, rating} = r;

    return (
        <div className="card  bg-base-100 shadow-xl border">
            <div className="card-body text-sm">
                <h2 className="text-rose-600">Name: {name}</h2>
                <small>Comment: {comment}</small>
                <h2>Rating: {rating}</h2> 
            </div>
        </div>
    );
};

export default Review;