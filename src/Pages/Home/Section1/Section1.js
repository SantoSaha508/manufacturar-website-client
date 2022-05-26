import React from 'react';
import factory1 from '../../../image/banner/factory.jpg';
import bg from '../../../image/banner/banner7.jpg';

const Section1 = () => {
    return (
        <div style={{
            background: `url(${bg})`
        }} className="bg-rose-700 my-5">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content text-center p-5">

                <label htmlFor="my-drawer" className="btn bg-rose-600 drawer-button w-80 ml-20">Click to visit Factory</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="flex menu p-4 overflow-y-auto  bg-red-500 text-base-content">

                    <li><img style={{height: 300}} className="w-300" src={factory1} alt="" /></li>
                    

                </ul>
            </div>
        </div>
    );
};

export default Section1;