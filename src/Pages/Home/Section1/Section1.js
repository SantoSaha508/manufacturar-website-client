import React from 'react';
import factory1 from '../../../image/banner/factory.jpg';
import bg from '../../../image/banner/banner7.jpg';

const Section1 = () => {
    return (
        <div style={{
            background: `url(${bg})`
        }} class="bg-rose-700 my-5">
            <input id="my-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content text-center p-5">

                <label for="my-drawer" class="btn bg-rose-600 drawer-button w-80 ml-20">Click to visit Factory</label>
            </div>
            <div class="drawer-side">
                <label for="my-drawer" class="drawer-overlay"></label>
                <ul class="flex menu p-4 overflow-y-auto  bg-red-500 text-base-content">

                    <li><img style={{height: 300}} class="w-300" src={factory1} alt="" /></li>
                    

                </ul>
            </div>
        </div>
    );
};

export default Section1;