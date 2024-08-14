import React from 'react';
import '../assets/Home.css'; 
import petReviews from '../petreview';
import productReviews from '../ProductReview';
import serviceReviews from '../ServiceReview';

const ReviewCard = ({ review }) => (
  <div className="review-card">
    {review.image_url && (
      <img src={review.image_url} alt={`${review.reviewer_name}'s review`} className="review-image" />
    )}
    <h3>{review.reviewer_name}</h3>
    <p>Rating: {review.rating} ★</p>
    <p>{review.comment}</p>
  </div>
);

const Home = () => {
  return (
    <div className="home-container">
      <section className="reviews-section">
        <h2>Pet Reviews</h2>
        <div className="reviews-container">
          {petReviews.map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </section>

      <section className="reviews-section">
        <h2>Product Reviews</h2>
        <div className="reviews-container">
          {productReviews.map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </section>

      <section className="reviews-section">
        <h2>Service Reviews</h2>
        <div className="reviews-container">
          {serviceReviews.map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
