import React from "react";
import {Router, Route, hashHistory, IndexRedirect} from "react-router";
import SearchContainer from "search/SearchContainer";
import QueryConsoleContainer from "queryConsole/QueryConsoleContainer";
import NotFoundView from "views/NotFoundView";
import AppFrame from "./AppFrame";
import docs from "../docs/routes"


export default  (
    <Router history={hashHistory}>
        <Route path="/" component={AppFrame}>
            <IndexRedirect to="/docs/intro"/>
            {docs}
            <Route path="/search" component={SearchContainer}/>
            <Route path="/console" component={QueryConsoleContainer}/>
            <Route path="*" component={NotFoundView}/>
        </Route>
    </Router>
)
