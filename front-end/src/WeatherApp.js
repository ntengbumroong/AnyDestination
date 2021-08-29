import React, { Component } from "react";
import axios from "axios";
import './WeatherApp.css';
import { withRouter } from "react-router";
import { Container, Row } from "reactstrap";

class Weather extends Component {
    constructor(props)  {
        super(props);
        this.state = {
            location: "",
            weather: "",
            search:"",
            isSearched: false,
            error: false,
            imgs: [],
            getImg: false
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
        axios.get(`https://any-destination.herokuapp.com/weatherRequest?loc=${this.state.location}`).then(async response => {
            console.log(response);
            if (response.data !== "Error") {
                
                const usResponse =  await axios.get(`https://any-destination.herokuapp.com/imgRequest?img=${this.state.location}`);

                // turns JSON repsonse into arrays to be pushed
                const allInfo = [this.state.location, Object.entries(response.data.parsedBody.main), Object.entries(response.data.parsedBody.weather[0]), usResponse.data.results]
                console.log(allInfo);
                this.props.history.push({
                    pathname: '/WeatherInfo',
                    state: allInfo
                }) 
            }
            else {
                this.setState({error: true})
            }
            
        });
        event.preventDefault();
        
    };


    render() {
        const isSearched = this.state.error;
        let searchLabel;
        if (isSearched) {
            searchLabel = <h2 id="invalid">Invalid location</h2>
        } 
        return (
            <div id="search">
                <Container >
                    <Row>
                        <form className="form" onSubmit={this.handleSubmit}>
                            <label id="searchLabel">
                                <input id="inputBox" type="text" placeholder="Search for a city..." defaultValue={this.state.location} onChange={this.handleChange} autoComplete="off"></input>
                            </label>
                            <input id="submitButton" type="submit" value="Go"></input>
                        </form>
                        <label>
                            {searchLabel}
                        </label>
                    </Row>
                </Container>
                
            </div>
        );
    }
}

export default withRouter(Weather);