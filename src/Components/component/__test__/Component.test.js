import React from 'react';
import ReactDOM from 'react-dom';
import Component from './../Component';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

it("renders without crashing",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Component></Component>,div);
})

it("check for rendering the component",()=>{
    const {getByTestId} = render(<Component error={true}></Component>);
    expect(getByTestId('miss-city')).toHaveTextContent("Please enter the city name");
})