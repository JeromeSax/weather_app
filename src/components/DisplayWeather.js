import React from 'react'
import './displayWeather.css'

function DisplayWeather({data}) {
    console.log(data)

    const iconurl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`


  return (
    <div className='displayweather'>
      <div className='maincard'>
        <span className='cardtitle'>
          {data.name}, {data.sys.country}, weather
        </span>
        <span className="cardsubtitle">
          As of {new Date().toLocaleTimeString()}
        </span>
        <h1>
        {Math.floor((data.main.temp - 273.15)*1.8)+32} &#176;F 
        </h1>
        <span className="weather-main">
          {data.weather[0].main}
          <img src={iconurl} alt="weather image" className="weather-icon" />
        </span>
        <span className="weather-description">{data.weather[0].description}</span>
      </div>

      <div className="weatherdetails">
        <div className="section">
          <table>
            <tr>
              <td>
                <h4>High/Low</h4>
              </td>
              <td>
                <span>
                {Math.floor((data.main.temp_max - 273.15)*1.8)+32} &#176;F / {Math.floor((data.main.temp_min - 273.15)*1.8)+32} &#176;F 
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <h4>Humidity</h4>
              </td>
              <td>
                <span>
                  {data.main.humidity} % 
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <h4>Pressure</h4>
              </td>
              <td>
                <span>
                {data.main.pressure}
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <h4>Visibility</h4>
              </td>
              <td>
                <span>
                {data.main.visibility} 
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <h4>Wind</h4>
              </td>
              <td>
                <span>
                  {data.wind.speed} 
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <h4>Wind Direction</h4>
              </td>
              <td>
                <span>
                  {data.wind.deg} 
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <h4>Sunrise</h4>
              </td>
              <td>
                <span>
                {data.main.sunrise} 
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <h4>Sunset</h4>
              </td>
              <td>
                <span>
                  {data.main.sunset} 
                </span>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default DisplayWeather