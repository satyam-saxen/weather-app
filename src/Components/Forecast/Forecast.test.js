import React from 'react';
import ReactDOM from 'react-dom';
import City from './Forecast';
import Form from './Forecast';
import { render,cleanup , screen,fireEvent} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

describe("Forecast component",()=>{
    it("test for city name",()=>{
        render(<City></City>);
        // screen.debug();
        fireEvent.change(screen.getByPlaceholderText('Enter City'), {
        target: { value: 'Agra' },
        });
        // expect(screen.getByPlaceholderText('Enter City')).toBe('Agra');
        // screen.debug();
    });

});