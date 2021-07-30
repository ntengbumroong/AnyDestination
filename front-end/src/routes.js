import React from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import App from './App';
import WeatherInfo from './WeatherInfo';


const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/WeatherInfo" component={WeatherInfo} />
            </Switch>
        </Router>
    );
}

export default Routes;
