import React from 'react';
import revenue from '../../../image/icon/revenew.jpg';
import review from '../../../image/icon/review.jpg';
import product from '../../../image/icon/product.png';

const BusinessSummary = () => {
    return (
        <div className='my-20 bg-gray-400 p-5 mx-auto grid'>
            <div className='text-center text-3xl font-bold p-4'>
                <h2>Business Summary</h2>
            </div>
            <div class="stats  stats-vertical lg:stats-horizontal text-center">
                <div class="stat my-3">
                    <div class="stat-figure text-primary">
                        <img className='w-10' src={revenue} alt="" />
                    </div>
                    <div class="stat-title">Revenue</div>
                    <div class="stat-value text-primary">$550/y</div>
                    <div class="stat-desc">13% more than last month</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <img className='w-10' src={review} alt="" />
                    </div>
                    <div class="stat-title">Reviews</div>
                    <div class="stat-value text-secondary">3.5k</div>
                    <div class="stat-desc">30% more than last month</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <img className='w-10' src={product} alt="" />
                    </div>
                    <div class="stat-title">Products</div>
                    <div class="stat-value text-secondary">2.8M</div>
                    <div class="stat-desc">This month available</div>
                </div>



            </div>
        </div>
    );
};

export default BusinessSummary;