import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Search from './components/Search/Search';
import CurrentWeather from './components/Current Weather/CurrentWeather';
import ForecastWeather from './components/Forecast Weather/ForecastWeather';

const FetchApi = () => {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecastWeather, setForecastWeather] = useState([]);
    const [dailyForecastData, setDailyForecastData] = useState([]);

    const API_KEY = "12f5a72ab13201e526cfdfcbb24f3886";
    const API_BASE_URL = "https://api.openweathermap.org/data/2.5";

    const fetchWeatherData = async (url) => {
        try {
            const response = await axios.get(url);
            setCurrentWeather(response.data);
        } catch (error) {
            console.log("Error fetching weather data", error);
        }
    };

    const fetchCurrentLocationWeather = async () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                const currentLocationUrl = `${API_BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
                const forecastUrl = `${API_BASE_URL}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

                fetchWeatherData(currentLocationUrl);
                fetchForecastData(forecastUrl);
            });
        }
    };

    const fetchWeatherDataByCity = async (city) => {
        const weatherUrl = `${API_BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`;
        const forecastUrl = `${API_BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`;

        fetchWeatherData(weatherUrl);
        fetchForecastData(forecastUrl);
    };

    const fetchForecastData = async (url) => {
        try {
            const response = await axios.get(url);
            setForecastWeather(response.data.list.slice(0, 5));
            setDailyForecastData(response.data.list.filter(item => item.dt_txt.includes('12:00:00')));
        } catch (error) {
            console.log("Error fetching forecast weather data", error);
        }
    };

    useEffect(() => {
        fetchCurrentLocationWeather();
    }, [fetchCurrentLocationWeather]);

    return (
        <div className='weather_app'>
            <div className='container'>
                <div className='title'>
                    <h2>Weather Forecast App</h2>
                </div>
                <div className='content'>
                    <Search onSearch={fetchWeatherDataByCity} />
                    {currentWeather && <CurrentWeather weather={currentWeather} />}
                    {forecastWeather.length > 0 && <ForecastWeather forecastWeather={forecastWeather} dailyForecastData={dailyForecastData} />}
                </div>
            </div>
        </div>
    );
};

export default FetchApi;
