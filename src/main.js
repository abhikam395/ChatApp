import React, { Component, Fragment } from 'react';

import Router from './common/router';
import NavbarComponent from './components/navbarcomponent';

export default class Main extends Component{

    render(){
        return(
            <Fragment>
                <NavbarComponent/>
                <Router></Router>
            </Fragment>
        )
    }
}