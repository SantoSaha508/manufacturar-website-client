import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <BusinessSummary></BusinessSummary>
            <Footer></Footer>
        </div>
    );
};

export default Home;