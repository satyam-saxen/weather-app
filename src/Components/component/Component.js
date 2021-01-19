const Component = (props)=>{
    return(
        <>
            {props.responseObj === undefined ? <div></div> : 
                props.responseObj.cod === 200 ?
                <div>
                    <h2>City {props.responseObj.name}</h2>
                    <div>Temp: {Math.round(props.responseObj.main.temp)}</div>
                    <div>Humidity: {props.responseObj.main.humidity}</div>
                </div>
                : null
            }
        </>
    );
}

export default Component;