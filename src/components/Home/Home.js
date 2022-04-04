import React from 'react';

const Home = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 mt-8 md:ml-12 ml-5'>
            <div className='md:mt-16 md:mx-5 '>
                <h1 className='md:text-6xl text-2xl font-semibold'>Your best camera</h1>
                <h1 className='md:text-6xl text-2xl text-blue-700 font-semibold'>Your next camera</h1>
                <p className='mt-5 text-slate-500'>All camera users, even beginners, will be able to capture amazing images and movies with this DSLR camera, which is equipped with a 24.1-megapixel APS-C-size CMOS sensor and an optical viewfinder for an authentic DSLR shooting experience</p>
                <button className='bg-sky-200 text-purple-700 px-5 py-3 rounded mt-8 md:mb-0 mb-5'>Live demo</button>
            </div>
            <div className='w-11/12'>
                <img src="https://images.unsplash.com/photo-1613631883052-454579eb648f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=821&q=80" alt="" />
            </div>
        </div>
    );
};

export default Home;