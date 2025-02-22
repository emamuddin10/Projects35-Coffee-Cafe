import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center gap-5 h-screen'>
            <span className="loading loading-spinner loading-xl"></span>
            <span className="loading loading-spinner loading-xl"></span>
            <span className="loading loading-spinner loading-xl"></span>
        </div>
    );
};

export default Loading;