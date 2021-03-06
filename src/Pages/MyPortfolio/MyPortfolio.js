import React from 'react';
import mypic from '../../image/portfolio/myImage.jpg';
import Footer from '../Shared/Footer';

const MyPortfolio = () => {
    return (
        <div className='bg-gray-200'>
            <h2 className='text-center font-bold text-4xl p-5 text-pink-700'>My Portfolio</h2>

            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row ">
                        <img src={mypic} className="max-w-sm rounded-lg shadow-2xl" />
                        <div className='ml-20'>
                            <h1 className="text-4xl font-bold my-4">Name: Santo Saha
                            </h1>
                            <h1 className="text-xl font-bold">Email: shantosaha508@gmail.com
                            </h1>
                            <h1 className="text-xl font-bold my-3">Education: B.Sc in CSE at Daffodil International University
                            </h1>
                            <h1 className="text-xl font-bold">Tools: HTML, CSS, JavaScript, React, Node.js, MongoDB, 
                            </h1>
                            <p className='my-3'>
                                Projects: <br /> 1. <a href="https://dress-warehouse-assgn11.web.app" target="_blank">Dress WareHouse</a><br /> 
                                2. <a href="https://photography-assgn10.web.app/" target="_blank">Photography World</a> <br />
                                <a href="https://assignment9-product-review.netlify.app/" target="_blank">3.Annapurna Bastralaya.com</a>
                            </p>
                         
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyPortfolio;