import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox(){
    let [city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "67151272edc648cfc74dd6c919c6616e";
   

    let getWeatherInfo = async () =>{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();

        let result ={
            city: city,
            temp: jsonResponse.main.temp,
            minTemp: jsonResponse.main.temp_min,
            maxTemp: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feels_Like: jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].description,
        };
        console.log(result);
    };

    let handleCityChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    };

    return(
        <div className="SearchBox">
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit}>
            <TextField 
               id="city" 
               label="City Name" 
               variant="filled" 
               required 
               value={city} 
               onChange={handleCityChange}
            />
            <br></br><br></br>
            <Button variant="contained" type="submit" >Search</Button>
            </form>
        </div>
    );
}