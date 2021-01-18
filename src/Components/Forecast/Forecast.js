import {useState} from 'react';
const Forecast = ()=>{
    let [res,setResponse] = useState({});
    const getForecast = ()=>{
        fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Seattle", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "9f9bcdd758msh8f45bd9580c94a0p1e50bajsnc53f1c6d1416",
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            }
        })
        .then(response=>response.json())
        .then(res=>{
            setResponse(res)
        })
        .catch(err => {
            console.error(err);
        });
    }

    return(
        <>
            <button onClick={getForecast()}>Get Forecast</button>
            <div>
                <p>{JSON.stringify(res)}</p>
            </div>

        </>
    )


}

export default Forecast;