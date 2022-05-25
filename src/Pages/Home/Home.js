import React, { useState } from 'react';
import auth from '../../firebase.init';
import Footer from '../Shared/Footer';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Section1 from './Section1/Section1';

import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Section1></Section1>
            <Footer></Footer>
        </div>
    );
};

export default Home;