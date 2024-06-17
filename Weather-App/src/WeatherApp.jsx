import SearchBox from "./SearchBox";
import InfoBox from './InfoBox'
import { useState } from "react";
import './WeatherApp.css'
export default function WeatherApp(){
    
    const [weatherInfo,setWeatherInfo]=useState({ 
        Temp: 33.75,
        feelsLike: 40.75,
        humidity: 66,
        max_temp: 33.88,
        min_temp: 32.69,
        weather: "few clouds",
        city:"Delhi",});

        let updateInfo=(newInfo)=>{
            setWeatherInfo(newInfo);
        }

    return(
        <div>
            <h2>WEATHER APP</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}