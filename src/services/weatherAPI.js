import axios from 'axios';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (city) => {
  try {
    const { data } = await axios.get(BASE_URL, {
      params: {
        q: city,
        units: 'metric', // You can change to 'imperial' for °F
        appid: API_KEY,
      },
    });
    return data;
  } catch (error) {
    throw new Error('City not found');
  }
};
