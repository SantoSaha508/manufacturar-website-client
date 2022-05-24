import React, { useState } from 'react';
import auth from '../../firebase.init';
import Footer from '../Shared/Footer';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Review from './Review/Review';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;