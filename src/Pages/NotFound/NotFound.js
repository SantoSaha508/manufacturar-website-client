import React from 'react';

const NotFound = () => {
    return (
        <div class="hero min-h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">404! Not Found</h1>
                    <p class="mb-5">This page is not available at this moment.</p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;