import React from 'react';
import { render } from 'react-dom';
// import { StorePicker } from './components/StorePicker' // if export { StorePicker };
import Router from "./components/Router";
import "./css/style.css";

render(<Router />, document.getElementById('main'));
