import React from 'react';
import ReactDOM from 'react-dom';
import Component from './../Component';

it("renders without crashing",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Component></Component>,div);
})