const Forecast = ()=>{
    let res;
    const getForecast = ()=>{
        res = {"coord":{"lon":-122.3321,"lat":47.6062},"weather":[{"id":804,"main":"Clouds",
        "description":"overcast clouds","icon":"04n"}],"base":"stations","main":{"temp":279.53,
        "feels_like":277.6,"temp_min":278.15,"temp_max":280.93,"pressure":1035,"humidity":93},
        "visibility":10000,"wind":{"speed":1.24,"deg":1},"clouds":{"all":90},"dt":1610971805,
        "sys":{"type":1,"id":5692,"country":"US","sunrise":1610985016,"sunset":1611017346},
        "timezone":-28800,"id":5809844,"name":"Seattle","cod":200};
        // res = res.json();
        
    }
    return(
        <>
        <button onClick={getForecast()}>Get</button>
        {JSON.stringify(res)}
        </>
    )
}

export default Forecast;