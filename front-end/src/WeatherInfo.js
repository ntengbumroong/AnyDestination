import React, { Component } from "react";
import './WeatherInfo.css'
import { Container, ListGroup, ListGroupItem } from "reactstrap"

export default class WeatherInfo extends Component {
    render() {
        const locationInfo = this.props.location.state[0];
        const tempInfo = this.props.location.state[1];
        const extraInfo = this.props.location.state[2]

        return (
            <div className="info">
                <Container>
                    <h1>{locationInfo}</h1>
                    <ListGroup id="info-list">
                        <ListGroupItem>Current weather: {Math.round(tempInfo[0][1])}°F</ListGroupItem>
                        <ListGroupItem>Feels like: {Math.round(tempInfo[1][1])}°F</ListGroupItem>
                        <ListGroupItem>Low: {Math.round(tempInfo[2][1])}°F</ListGroupItem>
                        <ListGroupItem>High: {Math.round(tempInfo[3][1])}°F</ListGroupItem>
                        <ListGroupItem>Conditions: {extraInfo[2][1]}</ListGroupItem>
                    </ListGroup>
                </Container>
                
            </div>
            
        );
    }
}