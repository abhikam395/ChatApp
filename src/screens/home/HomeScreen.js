import React, { Component, Fragment } from 'react';
import './home.scss';

import NavbarComponent from './../../components/navbar/NavbarComponent';
import SidebarCompoent from '../../components/sidebar/SidebarComponent';
import HomeRouter from './../../common/HomeRouter';
import { Route, Switch, useLocation } from 'react-router-dom';

export default class HomeScreen extends Component{

    constructor(props){
        super(props);
    }

    

    render(){
        return (
            <Fragment>
                <NavbarComponent {...this.props}/>
                <div className="row">
                    <div className="left">
                        <SidebarCompoent isOpen ="true" {...this.props}/>
                    </div>
                    <div className="right">
                        <HomeRouter></HomeRouter>
                    </div>
                </div>
               
            </Fragment>
        )
    }
}