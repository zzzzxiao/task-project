import React, { Component } from "react";
import { Route, Router, browserHistory } from "react-router";

import Index from "../components/index/Index";

export default class Root extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={'/'} component={Index}>
                    {/* <IndexRoute /> */}
                </Route>
            </Router>
        );
    }
}
