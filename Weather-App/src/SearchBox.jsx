import TextField from '@mui/material/TextField';
import './SearchBox.css'
import Button from '@mui/material/Button';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { colors } from '@mui/material';

export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="3b812254a4239f7ed7b076ecd2aa106d";
    
    let getWeatherInfo= async()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse=await response.json();
            console.log(jsonResponse);
            let result={
               city:jsonResponse.name,
               Temp: jsonResponse.main.temp,
               min_temp: jsonResponse.main.temp_min,
               max_temp: jsonResponse.main.temp_max,
               humidity: jsonResponse.main.humidity,
               feelsLike: jsonResponse.main.feels_like,
               weather: jsonResponse.weather[0].description,
            }
            console.log(result);
            return result;
        }
        catch(err){
            throw err;
        }

    }

    let handleChange=(event)=>{
        setCity(event.target.value);        
    }

    let handleSubmit= async(event)=>{
         event.preventDefault();
         try{
            console.log(city);
            setCity("");
            let newInfo=await getWeatherInfo();
            updateInfo(newInfo);
         }
         catch(err){
              setError(true);
         }
    }

    return(
        <div className="searchBox">
            <form onSubmit={handleSubmit} id="city2"> <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
            <br></br><br></br>
            <Button  id="search" variant="outlined" type="submit" >Search&nbsp;{<SearchIcon/>}</Button>
            {error && <p style={{color:"red"}}><b>No Such place exists!</b></p>}
            </form>
            
        </div>
    );
}