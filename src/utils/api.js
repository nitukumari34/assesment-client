// src/services/api.js

import axios from 'axios';

const API_BASE_URL = 'https://api.openbrewerydb.org/breweries';
const API_LOGIN_URL = 'http://localhost:4000/api'


export const login = async (credentials) => {
    const response = await axios.post(`${API_LOGIN_URL}/login`, credentials);
    return response.data;
};


export const searchBreweriesByCity = async (city) => {
    const response = await axios.get(`${API_BASE_URL}?by_city=${city}`);
    return response.data;
};

export const getBreweryDetails = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
};

export const submitReview = async (breweryId, reviewData) => {
    // Implement the review submission logic here
};


