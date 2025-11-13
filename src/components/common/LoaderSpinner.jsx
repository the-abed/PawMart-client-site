import React from 'react';

const LoaderSpinner = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <span className="loading loading-bars loading-lg " style={{ color: "var(--color-text-primary)" }} ></span>
        </div>
    );
};

export default LoaderSpinner;