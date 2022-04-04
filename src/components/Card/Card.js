import React from 'react';
import { StarIcon } from '@heroicons/react/solid';

const Card = ({ review }) => {
    const { name, image, description, rating } = review;
    return (
        <div className='border border-gray-300 shadow-lg rounded-lg'>
            <div className='my-5'>
                <img className='w-52 h-52 rounded-full mx-auto' src={image} alt="" />
            </div>
            <div className='m-5'>
                <p className='text-2xl font-semibold mb-4'>Review by: <span className='text-purple-700'>{name}</span></p>
                <p className='text-slate-700'>{description}"</p>
                <p className='mt-3 font-semibold text-lg flex items-center'>Rating: {rating}<StarIcon className="h-5 w-5 text-yellow-400"/></p>
            </div>
        </div>
    );
};

export default Card;