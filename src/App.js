import React from 'react';
import { hot } from 'react-hot-loader';
import './App.css';

    // "webpack": "^5.4.0",
    // "webpack-cli": "^4.2.0",
    // "webpack-dev-server": "^3.11.0"


const App = () => (
    <div className="App">
        <h1> Hello World! </h1>
    </div>
);

export default hot(module)(App);