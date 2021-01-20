import React from 'react';
import ReactDOM from 'react-dom';
import Weather from '../WeatherInfo';
import { render,cleanup , screen} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

describe('Weather',()=>{
    it("renders Weather",()=>{
        render(<Weather></Weather>);
    });
    
    it("checks for the error props to be true",()=>{
        const {getByTestId} = render(<Weather error={true}></Weather>);
        expect(getByTestId('miss-city')).toHaveTextContent("Please enter the city name");
    });
    
    
    it("checks for the error props to be false and responseObj undefined",()=>{
        const responseObj = undefined;
        const {getByTestId} = render(<Weather error={false} responseObj={responseObj}></Weather>);
        expect(getByTestId('undefined-res')).toBeDefined();
    });
    
    
    it("checks for the response to be successful",()=>{
        const responseObj = {"coord":{"lon":-122.3321,"lat":47.6062},"weather":[{"id":804,"main":"Clouds",
        "description":"overcast clouds","icon":"04n"}],"base":"stations","main":{"temp":279.53,
        "feels_like":277.6,"temp_min":278.15,"temp_max":280.93,"pressure":1035,"humidity":93},
        "visibility":10000,"wind":{"speed":1.24,"deg":1},"clouds":{"all":90},"dt":1610971805,
        "sys":{"type":1,"id":5692,"country":"US","sunrise":1610985016,"sunset":1611017346},
        "timezone":-28800,"id":5809844,"name":"Seattle","cod":200};
        render(<Weather error={false} responseObj={responseObj}></Weather>);
        expect(screen.getByText(/City/)).toHaveTextContent(responseObj.name);
        expect(screen.getByText(/Temp/)).toHaveTextContent(Math.round(responseObj.main.temp));
        expect(screen.getByText(/Pressure/)).toHaveTextContent(responseObj.main.pressure);
        expect(screen.getByText(/Humidity/)).toHaveTextContent(responseObj.main.humidity);

    });
    
    
    it("checks for the response not to be successful",()=>{
        const message = "Not Found";
        const responseObj = {"cod":404,"message":message};
        render(<Weather error={false} responseObj={responseObj}></Weather>);
        expect(screen.getByText(/Unsuccessful/)).toHaveTextContent(responseObj.message);

    });
});