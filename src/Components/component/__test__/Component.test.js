import React from 'react';
import ReactDOM from 'react-dom';
import Component from './../Component';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

it("renders without crashing",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Component></Component>,div);
})

it("checks for the error props to be true",()=>{
    const {getByTestId} = render(<Component error={true}></Component>);
    expect(getByTestId('miss-city')).toHaveTextContent("Please enter the city name");
})


it("checks for the error props to be false and responseObj undefined",()=>{
    const {getByTestId} = render(<Component error={false} responseObj={undefined}></Component>);
    expect(getByTestId('undefined-res')).toHaveLength(0);
})