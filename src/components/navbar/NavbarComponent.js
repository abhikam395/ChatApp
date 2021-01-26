import React, { Component } from 'react';
import './navbar.scss';

import { Menu } from '@material-ui/icons';
import SearchbarComponent from './SearchbarComponent';


export default class NavbarComponent extends Component{

    constructor(props){
        super(props);
    }

    showInUserScreen(){
        let location = this.props.location || null;
        if(location.pathname == '/users')
            return (
                <div className="navbar__right">
                    <SearchbarComponent/>
                </div>
            )
    }

    render(){

        return (
            <nav className="navbar navbar--size navbar--theme">
                <div className="navbar__left">
                    <Menu className="navbar__icon"/>
                </div>
                <div className="navbar__center"></div>
                { this.showInUserScreen() }
            </nav>
        )
    }
}