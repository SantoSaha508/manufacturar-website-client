import React from 'react';
import revenue from '../../../image/icon/revenew.jpg';
import review from '../../../image/icon/review.jpg';
import product from '../../../image/icon/product.png';

const BusinessSummary = () => {
    return (
        <div className='   mx-auto grid shadow-xl'>
            <div className='text-center text-3xl font-bold py-5'>
                <hr/>
                <h2 className='text-pink-700 shadow-lg p-4 rounded'>Business Summary</h2>
            </div>
            <div className="stats  stats-vertical lg:stats-horizontal text-center mb-10 p-5">
                <div className="stat my-3">
                    <div className="stat-figure text-primary">
                        <img className='w-10' src={revenue} alt="" />
                    </div>
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value text-primary">$550/y</div>
                    <div className="stat-desc">13% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <img className='w-10' src={review} alt="" />
                    </div>
                    <div className="stat-title">Reviews</div>
                    <div className="stat-value text-secondary">3.5k</div>
                    <div className="stat-desc">30% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <img className='w-10' src={product} alt="" />
                    </div>
                    <div className="stat-title">Products</div>
                    <div className="stat-value text-secondary">2.8M</div>
                    <div className="stat-desc">This month available</div>
                </div>



            </div>
        </div>
    );
};

export default BusinessSummary;