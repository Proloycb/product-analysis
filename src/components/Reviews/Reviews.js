import React from 'react';
import useReviews from '../../hooks/useReviews';
import Card from '../Card/Card';

const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <div className='grid grid-cols-3 gap-8 md:m-14'>
            {
                reviews.map(review => <Card
                    key={review.id}
                    review={review}
                ></Card>)
            }
        </div>
    );
};

export default Reviews;