import React, {useState} from 'react';
import Axios from 'axios';

function VeniceWeather () {

    const[weather,setWeather] = useState("")
 
    const getWeather = () => {
        Axios.get("https://api.openweathermap.org/data/2.5/weather?q=venice&units=metric&appid=09214dedee32fc1a66f4a5ce580b9e5c").then((response) => {
        setWeather(response.data)
        })
    }
    return <>
    
     
        <button onClick={getWeather} className="btn btn-blue bg-black p-3 shadow-lg rounded-xl  text-white ">GET WEATHER</button>
        <div  >
              
              </div>

              <div className="grid grid-cols-4 gap-4 py-3 ">

              <div className="col-start-1 lg:col-end-2 " >
                {weather.main ? <h1>{weather.main.temp.toFixed()}°C</h1> : null}
              </div>

              <div className="col-start-4 lg:col-end-4 ">
                {weather.weather ? <p>{weather.weather[0].main}</p> : null}
                
              </div>
            </div>
      
        </>

}

export default VeniceWeather;

