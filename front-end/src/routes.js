import React from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import App from './App';
import test from './test';


const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/test" component={test} />
        </Switch>
    </Router>
);

export default Routes;
