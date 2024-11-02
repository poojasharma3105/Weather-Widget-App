import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo]= useState({
        city: "Jaipur",
        feels_Like: 42.55,
        humidity: 26,
        maxTemp: 40.62,
        minTemp: 40.62,
        temp: 40.62,
        weather: "haze"
    });

    let updateInfo = (newResult) => {
        setWeatherInfo(newResult);
    }
    return(
        <div className="weather-app">
        <h2>Check the Weather</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
    </div>
    );
}