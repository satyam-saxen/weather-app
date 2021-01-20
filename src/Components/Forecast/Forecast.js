import {useState} from 'react';
import classes from './Forecast.module.css';
import Component from './../component/Component';
const Forecast = ()=>{
    let [city,setCity] = useState('');
    let [units,setUnits] = useState('imperial');
    let [responseObj,setResponseObj] = useState();
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);
    const uriEncodedCity = encodeURIComponent(city);


    function getForecast(e){
        e.preventDefault();
        if(city.length === 0){
            return setError(true);
        }
        setError(false);
        setResponseObj({});
        setLoading(true);
        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${uriEncodedCity}&units=${units}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key":"9f9bcdd758msh8f45bd9580c94a0p1e50bajsnc53f1c6d1416",
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            }
        })
        .then(response =>response.json())
        .then(response=>{
            setResponseObj(response);
            setLoading(false);
        })
        .catch(err => {
            setError(true);
            setLoading(false);
            console.error(err);
        })
        
    }
    return(
        <div>
            <form onSubmit={getForecast} className={classes.Form}>
                <City city={city} setCity={setCity}></City>
                <Fahrenheit units={units} setUnits={setUnits}></Fahrenheit>
                <Celcius units={units} setUnits={setUnits}></Celcius>
                <button className={classes.Button} type="submit">Get Weather</button>
            </form>
            <Component responseObj={responseObj} error={error} loading={loading}/>
        </div>
    );
}

const City = (props)=>{
    return(
        <label >
            <input
                id="city"
                type="text"
                placeholder="Enter City"
                className={classes.textInput}
                maxLength="50"
                value={props.city}
                onChange={(e) => props.setCity(e.target.value)}
                />
                City 
        </label>
    );
}

const Fahrenheit = (props)=>{
    return(
        <label className={classes.rad}>
            <input
                type="radio"
                name="units"
                checked={props.units === "imperial"}
                className={classes.Radio}
                value="imperial"
                onChange={(e) => props.setUnits(e.target.value)}
                />
            Fahrenheit
        </label>
    );
}

const Celcius = (props)=>{
    return(
        <label className={classes.rad}>
            <input
                type="radio"
                name="units"
                checked={props.units === "metric"}
                className={classes.Radio}
                value="metric"
                onChange={(e) => props.setUnits(e.target.value)}
                />
            Celcius
        </label>
    );
}

export default Forecast;