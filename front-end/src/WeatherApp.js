import React, { Component } from "react";
import axios from "axios";
import './WeatherApp.css';
import { withRouter } from "react-router";

class Weather extends Component {
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
            console.log(response);
            // this.setState({
            //     // weather: Math.round(response.data.temp - 273.15)
            //     weather: response.data
            // });
            
            // turns JSON repsonse into arrays to be pushed
            const allInfo = [this.state.location, Object.entries(response.data.parsedBody.main), Object.entries(response.data.parsedBody.weather[0])]
            console.log(allInfo);
            this.props.history.push({
                pathname: '/WeatherInfo',
                state: allInfo
            }) 
        });
        event.preventDefault();
        
    };

    render() {
        const isSearched = this.state.isSearched;
        let searchLabel;
        if (isSearched) {
            // searchLabel= <h1> The weather in {this.state.search} is: {this.state.weather}°C</h1>
            searchLabel = <h2>Loading...</h2>
        } else {
            searchLabel = <h2>Enter a location</h2>
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

export default withRouter(Weather);