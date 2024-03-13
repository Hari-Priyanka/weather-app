import React from 'react';
import './CurrentWeather.css';
import { FaTemperatureLow, FaTemperatureHigh } from 'react-icons/fa';
import { WiStrongWind, WiHumidity } from 'react-icons/wi';

const CurrentWeather = ({ weather }) => {
  const ICON_URL = 'https://openweathermap.org/img/wn';

  return (
    <div className='weather_card'>
      <div className='weather_card_container'>
        <div className='name'>
          <h2>{weather.name}, {weather.sys.country}</h2>
        </div>
        <div className='temperature'>
          <div>
            <p>{weather.main.temp} &deg;C</p>
            <h3>{weather.weather[0].description}</h3>
          </div>
          <img
            src={`${ICON_URL}/${weather.weather[0].icon}.png`}
            alt={weather.weather[0].description}
          />
        </div>
        <div className='weather_conditions'>
          <p><FaTemperatureLow className='icon' />Min Temp: {weather.main.temp_min}°C</p>
          <p><FaTemperatureHigh className='icon' />Max Temp: {weather.main.temp_max}°C</p>
          <p><WiStrongWind className='icon' />Wind: {weather.wind.speed}M/S</p>
          <p><WiHumidity className='icon' />Humidity: {weather.main.humidity}%</p>
        </div>
      </div>
    </div>
  )
};

export default CurrentWeather;
