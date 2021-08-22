import React from 'react';
import Weather from "./WeatherApp"
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id="appname">AnyDestination</h1>
        <Weather/>
      </header>
    </div>
  );
}

export default App;
