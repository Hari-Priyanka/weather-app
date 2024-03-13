import React from 'react';
import './ForecastWeather.css';
import moment from 'moment';

const ForecastWeather = ({ forecastWeather, dailyForecastData }) => {
  const ICON_URL = 'https://openweathermap.org/img/wn';

  return (
    <>
      <div className='forecast_card'>
        <h2>3 hour forecast</h2>
        <div className='forecast_container'>
          {forecastWeather.map((weather, index) => {
            return (
              <div key={index} className='forecast_card_item'>
                <p>{moment(weather.dt_txt).format('MMMM D YYYY,')}</p>
                <p>{moment(weather.dt_txt).format('h:mm A')}</p>
                <div className='temperature'>
                  <p>{weather.main.temp} &deg;C</p>
                  <img
                    src={`${ICON_URL}/${weather.weather[0].icon}.png`}
                    alt={weather.weather[0].description}
                  />
                  <h3>{weather.weather[0].description}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className='forecast_card'>
        <h2>5 hour forecast</h2>
        <div className='forecast_container'>
          {dailyForecastData.map((weather, index) => {
            return (
              <div key={index} className='forecast_card_item'>
                <p>{moment(weather.dt_txt).format('MMMM D YYYY,')}</p>
                <p>{moment(weather.dt_txt).format('h:mm A')}</p>
                <div className='temperature'>
                  <p>{weather.main.temp} &deg;C</p>
                  <img
                    src={`${ICON_URL}/${weather.weather[0].icon}.png`}
                    alt={weather.weather[0].description}
                  />
                  <h3>{weather.weather[0].description}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
};

export default ForecastWeather;
