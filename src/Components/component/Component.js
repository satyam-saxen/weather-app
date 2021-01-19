import classes from './Component.module.css';

const Component = (props)=>{
    return(
        <div className={classes.Response}>  { props.error === true ? <div data-testid="miss-city">Please enter the city name</div>
            : props.responseObj === undefined ? <div data-testid="undefined-res"></div> : 
                props.responseObj.cod === 200 ?
                <div>
                    <h4 data-testid="status200">City {props.responseObj.name}</h4>
                    <div>Temp: {Math.round(props.responseObj.main.temp)}</div>
                    <div>Humidity: {props.responseObj.main.humidity}</div>
                    <div>Pressure: {props.responseObj.main.pressure}</div>
                    <div>Weather: {props.responseObj.weather[0].description}</div>
                </div>
                : <div data-testid="statusNot200">{props.responseObj.message}</div>
            }
        </div>
    );
}

export default Component;