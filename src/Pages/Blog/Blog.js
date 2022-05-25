import React from 'react';
import Footer from '../Shared/Footer';

const Blog = () => {
    return (
        <div className='bg-gray-200'>
            <div className='p-20'>
                <h2 className='text-xl font-bold'>1. How will you improve the performance of a React Application?
                </h2>
                <p>1- Keeping component state local where necessary. <br />
                    2- Memoizing React components to prevent unnecessary re-renders. <br />
                    3- Code-splitting in React using dynamic import(). <br />
                    4- Windowing or list virtualization in React. <br />
                    5- Lazy loading images in React.
                </p>
            </div>

            <div className='p-20'>
                <h2 className='text-xl font-bold'>2. What are the different ways to manage a state in a React application?
                </h2>
                <p>
                    there are four main types of state to manage in a React Application.
                    1. Local state: Local state is data we manage in one or another component. <br />
                    2. Global state: Global state is data we manage across multiple components. <br />
                    3. Server state: Data that comes from an external server that must be integrated with our UI state. <br />
                    4. URL state: Data that exists on our URLs, including the pathname and query parameters. <br />
                </p>
            </div>

            <div className='p-20'>
                <h2 className='text-xl font-bold'>3. What is a unit test? Why should write unit tests?
                </h2>
                <p>
                    Unit Testing is a method where JavaScript test code is written for a web page or web application module. It is then combined with HTML as an inline event handler and executed in the browser to test if all functionalities are working as desired. <br /><br />
                    Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.
                </p>
            </div>

            <div className='p-20'>
                <h2 className='text-xl font-bold'>3. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                </h2>
                <p>
                    
                </p>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;