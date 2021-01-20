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
                "x-rapidapi-key":process.env.REACT_APP_API_KEY,
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
            <Form city={city} getForecast={getForecast} setCity={setCity} units={units} setUnits={setUnits}></Form>
            <Component responseObj={responseObj} error={error} loading={loading}/>
        </div>
    );
}

const Form = (props)=>{
    return(
        <form onSubmit={props.getForecast} className={classes.Form}>
            <City city={props.city} setCity={props.setCity}></City>
            <Fahrenheit units={props.units} setUnits={props.setUnits}></Fahrenheit>
            <Celcius units={props.units} setUnits={props.setUnits}></Celcius>
            <button className={classes.Button} type="submit">Get Weather</button>
        </form>
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