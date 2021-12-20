import React from 'react';
import { Link } from 'react-router-dom';


const ReviewList = ({ reviews, title }) => {
  if (!reviews.length) {
    return <h3>No Reviews Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {reviews &&
        reviews.map(review => (
          <div key={review._id}>
              <p>
                <Link
                  to={`/profile/${review.username}`}
                  style={{ fontWeight: 700 }}
                >
                  {review.username}
                </Link>{' '}
                review on {review.createdAt}
            </p>
            <div>
              <Link to={`/review/${review._id}`}>
                <p>{review.reviewText}</p>
                <p>
                  Reactions: {review.reactionCount} || Click to{' '}
                  {review.reactionCount ? 'see' : 'start'} the discussion!
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ReviewList