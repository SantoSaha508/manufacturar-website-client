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
                <h2 className='text-xl font-bold'>4. How does prototypical inheritance work?
                </h2>
                <p>
                When we ask for a property or method from an object, JavaScript tries to read the property from the object itself. If the object lacks the property, then JavaScript looks for the property in the prototype object. And if that prototype object also does not contain the property, then JavaScript looks in its prototype. This process continues until it reaches the Object.prototype. The prototype of Object.prototype is NULL. Hence the search stops there and returns the undefined value. When we call student.specialSession(), The javascript searches for specialSession() method in the student object. It does not find it there. So it looks for it in the proto of student. The proto of student points to Person.prototype. It finds the method there, hence executes it, and returns the result.
                </p>

            </div>

            <div className='p-20'>
                <h2 className='text-xl font-bold'>5. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts.
                </h2>
                <p>
                In React, whenever a component is rendering either in theMounting phase or in Updating Phase, it always renders all the components that are in its tree. useState is a function that takes the initial state as an argument and returns an array with two items.If we mutate the state directly, it will change the reference of the state in the previous virtual DOM as well. So, React won't be able to see that there is a change of the state and so it won't be reflected in the original DOM until we reload.
                </p>

            </div>


            <Footer></Footer>
        </div>
    );
};

export default Blog;