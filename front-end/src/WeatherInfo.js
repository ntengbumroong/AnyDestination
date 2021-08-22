import React, { Component } from "react";
import './WeatherInfo.css'
import { Row, Col , Container, ListGroup, ListGroupItem } from "reactstrap"
import { Link } from "react-router-dom";


export default class WeatherInfo extends Component {

    render() {
        const locationInfo = this.props.location.state[0];
        const tempInfo = this.props.location.state[1];
        const extraInfo = this.props.location.state[2];
        const images = this.props.location.state[3];
        const rdmNum = Math.floor(Math.random() * 3);

        return (
            <div className="info">
                <div id="background">
                    <img key={images[rdmNum].id} src={images[rdmNum].urls.regular} alt={images[rdmNum].alt_description}></img>
                </div>
                <Container id="info-con">
                    <Row>
                        <Col>
                            <h1 id="leftlabel"><span>{locationInfo}</span></h1>
                            <ListGroup id="info-list">
                                <ListGroupItem>Current weather: {Math.round(tempInfo[0][1])}°F</ListGroupItem>
                                <ListGroupItem>Feels like: {Math.round(tempInfo[1][1])}°F</ListGroupItem>
                                <ListGroupItem>Low: {Math.round(tempInfo[2][1])}°F</ListGroupItem>
                                <ListGroupItem>High: {Math.round(tempInfo[3][1])}°F</ListGroupItem>
                                <ListGroupItem>Conditions: {extraInfo[2][1]}</ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col>
                            <h1 id="rightlabel"><span>Activities To Do</span></h1>
                            <dl id="act">
                                <dt>Hot Weather</dt>
                                <dd>- Swimming, Eating cold dessert</dd>
                                <dt>Mild Weather</dt>
                                <dd>- Biking, Taking a walk</dd>
                                <dt>Cold Weather</dt>
                                <dd>- Sledding, Hiking</dd>
                            </dl>
                        </Col>                      
                    </Row>
                </Container>
                <Container id="return">
                    <Row>
                        <Link to="/" className="link">Return to search</Link>
                    </Row>
                </Container>
       
            </div>
            
        );
    }
}