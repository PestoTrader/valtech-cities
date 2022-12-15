import React, {useState} from 'react';
import axios from 'axios';






function WeatherAppi () {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=09214dedee32fc1a66f4a5ce580b9e5c`;

const searchLocation = (event) => {
  if (event.key === 'Enter') {
  axios.get(url).then((response) => {
    setData(response.data)
    console.log(response.data)
    })
  }
}

  return (

    <div className="SurfApp">
      <div className="SurfApp">
        <input 
        
        type="text" 
        value={location}
        className="input"
          onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter City" 
      />
      </div>
     
      <div className="SurfContainer">
          
          <div className="Top">

              <div className="Location" >
                <p>{data.name}</p>
              </div>

              <div className="Temp">
                {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
              </div>

              <div className="Description">
                {data.weather ? <p>{data.weather[0].main}</p> : null}
                
              </div>
        
          </div>

          {data.name != undefined &&
          <div className="Bottom">
          <div className="Feels">
          {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
            <p>Feels Like</p>
          </div>

          <div className="Humidity">
          {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>

          <div className="Wind">
          {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
            <p>Wind</p>
          </div>

        </div>
          
          }
          
      </div>
    </div>
  );
}

export default WeatherAppi;
