import {useState} from 'react';
import classes from './Forecast.module.css';
import Component from './../component/Component';
const Forecast = ()=>{
    let [city,setCity] = useState('');
    let [units,setUnits] = useState('imperial');
    let [responseObj,setResponseObj] = useState();
    const uriEncodedCity = encodeURIComponent(city);


    function getForecast(e){
        // fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${uriEncodedCity}&units=${units}`, {
        //     "method": "GET",
        //     "headers": {
        //         "x-rapidapi-key": "9f9bcdd758msh8f45bd9580c94a0p1e50bajsnc53f1c6d1416",
        //         "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
        //     }
        // })
        // .then(response =>{ 
        //     console.log(response);
        //     response.json();
        // })
        // .then(setResponseObj((response)=>{
        //     responseObj = response;
        // }))
        // .catch(err => {
        //     console.error(err);
        // });
        console.log(`Units = ${units}`);
        console.log(`City = ${uriEncodedCity}`);
        
    }
    responseObj = {"coord":{"lon":-122.3321,"lat":47.6062},"weather":[{"id":804,"main":"Clouds",
        "description":"overcast clouds","icon":"04n"}],"base":"stations","main":{"temp":279.53,
        "feels_like":277.6,"temp_min":278.15,"temp_max":280.93,"pressure":1035,"humidity":93},
        "visibility":10000,"wind":{"speed":1.24,"deg":1},"clouds":{"all":90},"dt":1610971805,
        "sys":{"type":1,"id":5692,"country":"US","sunrise":1610985016,"sunset":1611017346},
        "timezone":-28800,"id":5809844,"name":"Seattle","cod":200};
    return(
        <div>
            <form onSubmit={getForecast()}>
                <input
                    id="city"
                    type="text"
                    placeholder="Enter City"
                    className={classes.textInput}
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                <label>
                    <input
                        type="radio"
                        name="units"
                        checked={units === "imperial"}
                        className={classes.Radio}
                        value="imperial"
                        onChange={(e) => setUnits(e.target.value)}
                        />
                    Fahrenheit
                </label>
                <label>
                    <input
                        type="radio"
                        name="units"
                        checked={units === "metric"}
                        className={classes.Radio}
                        value="metric"
                        onChange={(e) => setUnits(e.target.value)}
                        />
                    Celcius
                </label>

                <button className={classes.Button} type="submit">Get Weather</button>

            </form>
            <Component responseObj={responseObj}/>
        </div>
    );
}

export default Forecast;