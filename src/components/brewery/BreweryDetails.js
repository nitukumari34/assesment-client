// src/components/BreweryDetails.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBreweryDetails } from '../../utils/api';
import ReviewForm from '../reviewForm/ReviewForm';

const BreweryDetails = () => {
    const { id } = useParams();
    const [brewery, setBrewery] = useState(null);

    useEffect(() => {
        const fetchBreweryDetails = async () => {
            const details = await getBreweryDetails(id);
            setBrewery(details);
        };

        fetchBreweryDetails();
    }, [id]);

    const handleReviewSubmit = () => {
        // Implement any logic you need after a review is submitted, e.g., refreshing the reviews list
        // This function will be passed down to the ReviewForm component
    };

    return (
        <div>
            {brewery ? (
                <div>
                    <h1>{brewery.name}</h1>
                    <p>{brewery.address}</p>
                    {/* Display other details */}
                    {/* Display existing reviews */}
                    <ReviewForm breweryId={id} onReviewSubmit={handleReviewSubmit} />
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default BreweryDetails;

