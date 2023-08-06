import React from 'react';
import './weather.css';
import { useState } from 'react';
import DisplayWeather from './DisplayWeather';

function Weather() {

    const APIKEY = '7f186a28518e67147dcb91fe22122c6a';

    const [form, setForm] = useState({
        city: '',
        country: '',
    });

    const [weather, setWeather] = useState({})

    async function weatherData(e){
        e.preventDefault();

        if(form.city ==""){
            alert("Add values");
        }else{
            
            // making the API call
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country},&appid=${APIKEY}`
            )
            
            const data = await res.json();
            // console.log(data);
            setWeather({data : data});
        }
    }


    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value;

        if(name == 'city'){
            setForm({
                ...form,
                city: value
            })
        }
        if(name == 'country'){
            setForm({
                ...form,
                country: value 
            })
        }

        // console.log(form.city, form.country)
    };

  return (
    <div className='weather'>
        <span className="title">Weather App</span>
        <br />

        <form action="">
            <input type="text" name="city" placeholder="city" onChange={handleChange} />
            &nbsp; &nbsp; &nbsp; &nbsp;
            <input
             type="text" 
             name="country" 
             placeholder="country" 
             onChange={handleChange} 
             />
            <button className="getweather" onClick={weatherData}>
                Submit
            </button>
        </form>

        {weather.data !== undefined ? (
            <div>
                <DisplayWeather data={weather.data}/>
            </div>
        ) : null} 
        
    </div>
  );
}

export default Weather