import React, { Component } from "react";
import axios from "axios";
import './WeatherApp.css';
// import { withRouter } from "react-router";

export default class Weather extends Component {
    constructor(props)  {
        super(props);
        this.state = {
            location: "",
            weather: "",
            search:"",
            isSearched: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // updates the location variable as location is typed into input box
    handleChange = (event) => {
        this.setState({
            location: event.target.value
        });
    }
    
    handleSubmit = (event) => {
        console.log(this.state.location);
        this.setState({search: this.state.location});
        this.setState({isSearched: true});
        axios.get(`/weatherRequest?loc=${this.state.location}`).then(response => {
            this.setState({
                weather: Math.round(response.data.temp - 273.15)
            }); 
        });
        event.preventDefault();
    };

    render() {
        const isSearched = this.state.isSearched;
        let searchLabel;
        if (isSearched) {
            searchLabel= <h1> The weather in {this.state.search} is: {this.state.weather}°C</h1>
            // searchLabel= `The weather in ${this.state.search} is: ${this.state.weather}°C`
        } else {
            searchLabel = <h1>Enter a location</h1>
        }
        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <label id="searchLabel">
                        <input id="inputBox" type="text" placeholder="Search for a city..." defaultValue={this.state.location} onChange={this.handleChange} autoComplete="off"></input>
                    </label>
                    <input id="submitButton" type="submit" value="Go"></input>
                </form>
                <label>
                    {searchLabel}
                </label>
            </div>
        );
    }
}
