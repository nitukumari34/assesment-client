




import React, { useState } from 'react';
import { searchBreweriesByCity } from '../../utils/api';
import { Link } from 'react-router-dom';

const Search = () => {
    const [city, setCity] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [breweries, setBreweries] = useState([]);

    const handleSearch = async () => {
        const results = await searchBreweriesByCity(city);
        setBreweries(results);
    };

    const handleSearch1 = async () => {
        const results = await searchBreweriesByCity(name);
        setBreweries(results);
    };

    const handleSearch2 = async () => {
        const results = await searchBreweriesByCity(type);
        setBreweries(results);
    };



    return (
        <div>
            <h1>Search Breweries</h1>
            <input type="text" placeholder="Enter city" onChange={(e) => setCity(e.target.value)} />
            <button onClick={handleSearch}>Search</button><br />
            <input type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
            <button onClick={handleSearch1}>Search</button><br />

            <input type="text" placeholder="Enter Type" onChange={(e) => setType(e.target.value)} />
            <button onClick={handleSearch2}>Search</button>
            <ul>
                {breweries.map((brewery) => (
                    <li key={brewery.id}>
                        <Link to={`/brewery/${brewery.id}`}>{brewery.name}</Link>

                    </li>
                ))}
            </ul>
            <ul>
                {breweries.map((brewery) => (
                    <li key={brewery.id}>

                        <Link to={`/brewery/${brewery.id}`}>{brewery.city}</Link>

                    </li>
                ))}
            </ul>

            <ul>
                {breweries.map((brewery) => (
                    <li key={brewery.id}>

                        <Link to={`/brewery/${brewery.id}`}>{brewery.brewery_type}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Search;




