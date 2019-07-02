import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Main, Menu, Invitation, Location } from '../Screens'


const Routes = () => (
    <Router>
        <div>
            <Route path="/" exact component={Main} />
            <Route path="/invitation" component={Invitation} />
            <Route path="/Menu" exact component={Menu} />
            <Route path="/location" component={Location} />
        </div>
    </Router>
);

export default Routes;