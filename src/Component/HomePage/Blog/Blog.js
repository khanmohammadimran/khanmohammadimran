import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
    const navigate = useNavigate()
    return (
        <div className='h-screen'>
            <div className='flex justify-center'>
                <button onClick={() => navigate('/')} className="btn btn-dark">Go Back</button>
            </div>
            <h2 className='font-nunito text-5xl text-center py-8'>Coming Soon!</h2>
        </div>
    );
};

export default Blog;