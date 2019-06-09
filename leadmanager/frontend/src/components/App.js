import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Header from './layout/Header';
import Dashboard from './leads/Dashboard';
import Dashboard2 from './group/Dashboard2';

import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                <Fragment>
                    <Header />
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={Dashboard} />
                            <Route exact path="/group" component={Dashboard2} />
                        </Switch>
                    </div>
                </Fragment>
                </Router>
            </Provider>
         )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));