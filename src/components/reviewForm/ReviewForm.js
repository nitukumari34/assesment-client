// src/components/ReviewForm.js

import React, { useState } from 'react';
import { submitReview } from '../../utils/api';

const ReviewForm = ({ breweryId, onReviewSubmit }) => {
    const [rating, setRating] = useState('');
    const [description, setDescription] = useState('');

    const handleReviewSubmit = async () => {
        // Validate input if needed
        if (!rating || !description) {
            alert('Please provide both a rating and a description.');
            return;
        }

        // Submit the review
        await submitReview(breweryId, { rating, description });

        // Clear the form
        setRating('');
        setDescription('');

        // Notify parent component about the new review
        if (onReviewSubmit) {
            onReviewSubmit();
        }
    };

    return (
        <div>
            <h2>Add a Review</h2>
            <label>
                Rating:
                <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
            </label>
            <label>
                Description:
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <button onClick={handleReviewSubmit}>Submit Review</button>
        </div>
    );
};

export default ReviewForm;
