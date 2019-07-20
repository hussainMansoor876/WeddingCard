import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Main, Menu, Invitation, Location, Songs } from '../Screens'


const Routes = () => (
    <Router>
        <div>
            <Route path="/" exact component={Main} />
            <Route path="/invitation" component={Invitation} />
            <Route path="/Menu" exact component={Menu} />
            <Route path="/location" component={Location} />
            <Route path="/Songs" component={Songs} />
        </div>
    </Router>
);

export default Routes;