import React from 'react';
import dateimg from '../../../image/banner/banner6.jpg';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Section2 = () => {
    return (
        <div className="hero  bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={dateimg} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <DayPicker />
                </div>
            </div>
        </div>
    );
};

export default Section2;