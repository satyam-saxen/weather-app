import React from 'react';
import ReactDOM from 'react-dom';
import Component from './../Component';
import { render,cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it("renders without crashing",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Component></Component>,div);
})

it("checks for the error props to be true",()=>{
    const {getByTestId} = render(<Component error={true}></Component>);
    expect(getByTestId('miss-city')).toHaveTextContent("Please enter the city name");
})


it("checks for the error props to be false and responseObj undefined",()=>{
    const responseObj = undefined;
    const {getByTestId} = render(<Component error={false} responseObj={responseObj}></Component>);
    expect(getByTestId('undefined-res')).toBeDefined();
})


it("checks for the response to be 200",()=>{
    const responseObj = {"coord":{"lon":-122.3321,"lat":47.6062},"weather":[{"id":804,"main":"Clouds",
    "description":"overcast clouds","icon":"04n"}],"base":"stations","main":{"temp":279.53,
    "feels_like":277.6,"temp_min":278.15,"temp_max":280.93,"pressure":1035,"humidity":93},
    "visibility":10000,"wind":{"speed":1.24,"deg":1},"clouds":{"all":90},"dt":1610971805,
    "sys":{"type":1,"id":5692,"country":"US","sunrise":1610985016,"sunset":1611017346},
    "timezone":-28800,"id":5809844,"name":"Seattle","cod":200};
    const {getByTestId} = render(<Component error={false} responseObj={responseObj}></Component>);
    expect(getByTestId('status200')).toHaveTextContent("City Seattle");
})


it("checks for the response not to be 200",()=>{
    const responseObj = {"cod":404,"message":"Not Found"};
    const {getByTestId} = render(<Component error={false} responseObj={responseObj}></Component>);
    expect(getByTestId('statusNot200')).toHaveTextContent("Not Found");
})