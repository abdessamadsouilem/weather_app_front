import axios from 'axios';
import { API_BASE_URL } from '../utils/apiConfig';

export const getWeatherByCity = async (city) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/city/${city}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
};
