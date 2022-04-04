import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Card from '../Card/Card';

const CustomerReviews = () => {
    const [reviews] = useReviews([]);
    const reviewsItem = reviews.slice(0, 3);
    return (
        <div className='mt-12 mb-5'>
            <h1 className='text-5xl font-semibold text-center'>Customer Reviews({reviews.length})</h1>
            <div className='grid grid-cols-3 gap-8 md:m-14'>
                {
                    reviewsItem.map(review => <Card
                        key={review.id}
                        review={review}
                    ></Card>)
                }
            </div>
            <div className='bg-blue-700 w-1/4 text-center text-white rounded-md mx-auto'>
                <Link to='/reviews'>See All Reviews</Link>
            </div>
        </div>
    );
};

export default CustomerReviews;