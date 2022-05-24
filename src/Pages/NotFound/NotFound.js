import React from 'react';

const NotFound = () => {
    return (
        <div className="hero min-h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">404! Not Found</h1>
                    <p className="mb-5">This page is not available at this moment.</p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;