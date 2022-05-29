import React, { useState } from 'react';
import auth from '../../firebase.init';
import Footer from '../Shared/Footer';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';
import SeeReviews from './SeeReviews/SeeReviews';

import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <BusinessSummary></BusinessSummary>

            <Tools></Tools>
            
            <Section1></Section1>
            
            <SeeReviews></SeeReviews>

            <Section2></Section2>

            <Footer></Footer>
        </div>
    );
};

export default Home;