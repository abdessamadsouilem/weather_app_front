import React, { useState, useEffect } from 'react';
import { getWeatherByCity } from '../../services/weatherService';
import styles from './Weather.module.css';

const Weather = ({ city }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        setError('')
        setWeatherData(null)
        getWeatherByCity(city)
            .then(data => setWeatherData(data))
            .catch(err => setError(err.message));
    }, [city]);

    if (error) return <div>Error: {error}</div>;
    if (!weatherData) return <div>Loading...</div>;

    return (
        <div className={styles.weather}>
            <h1>Weather in {weatherData.location.name}</h1>
            <p>{weatherData.current.condition.text}</p>
            <p>Temperature: {weatherData.current.temp_c}°C</p>
        </div>
    );
};

export default Weather;
