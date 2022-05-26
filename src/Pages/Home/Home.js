import React, { useState } from 'react';
import auth from '../../firebase.init';
import Footer from '../Shared/Footer';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Section1 from './Section1/Section1';
import SeeReviews from './SeeReviews/SeeReviews';

import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <Tools></Tools>
            <hr /><br /><hr />
            <BusinessSummary></BusinessSummary>
            <hr /><br /><hr />
            <br />
            <Section1></Section1>
            <br />
            <hr /><br /><hr />
            <SeeReviews></SeeReviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;