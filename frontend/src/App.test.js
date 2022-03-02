import { fireEvent, render, screen } from '@testing-library/react';
import  userEvent from '@testing-library/user-event';
import * as axios from "axios";
import App from './App';
const moment = require('moment')
import React, {useState} from "react";



test('Frontend', () => {
  render(<App />);
  const linkElement = screen.getByText(/nothing/i);
  expect(linkElement).toBeInTheDocument();
});

test('Stress test backend', () => {
  let startTime = moment().toDate().getTime()
  for(let i=0; i<1000; i++){
    axios.post("http://localhost:8083/")
  }
  let stopTime = moment().toDate().getTime() - startTime
  expect(stopTime).toBeLessThan(60000);
 });

 test('Stress test frontend', () => {
  let startTime = moment().toDate().getTime()
  for(let i=0; i<1000; i++){
    axios.get("http://localhost:3000/")
  }
  let stopTime = moment().toDate().getTime() - startTime
  expect(stopTime).toBeLessThan(60000);
 });

 test('Integration test', () => {
  const onClick = jest.fn();
  const { getByPlaceholderText, getByText } = render(<App onClick={onClick} />);
  const text = getByPlaceholderText('text')
  userEvent.type(text,"I will kick your ass")
  fireEvent.submit(getByText(/Send/i));
  onClick()
  expect(onClick).toHaveBeenCalled();
  
});

test('text test', () => {
});


//expect(result).toBe("I will kick your ass {'toxicity': 0.99306595, 'severe_toxicity': 0.54969084, 'obscene': 0.9401245, 'threat': 0.82776445, 'insult': 0.6747525, 'identity_attack': 0.05281378}");


/*
I will kick your ass {'toxicity': 0.99306595, 'severe_toxicity': 0.54969084, 'obscene': 0.9401245, 'threat': 0.82776445, 'insult': 0.6747525, 'identity_attack': 0.05281378}

*/
