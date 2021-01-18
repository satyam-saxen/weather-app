import {useState} from 'react';
const Forecast = ()=>{
    let [res,setResponse] = useState();
    const getForecast = ()=>{
        fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Firozabad", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "15da8dc131msh798f7df504566b1p1295f8jsnc548d0e30281",
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            }
        })
        .then(response=>{
            response = response.json();
            setResponse((response)=>{
                res = response;
            })
        })
        .catch(err => {
            console.error(err);
        });
    }

    return(
        <>
            <button onClick={getForecast()}>Get Forecast</button>
            <div>
                {JSON.stringify(res)}
            </div>

        </>
    )


}

export default Forecast;