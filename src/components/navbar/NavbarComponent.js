import React, { Component } from 'react';
import './navbar.scss';

import SearchbarComponent from './SearchbarComponent';


export default class NavbarComponent extends Component{

    render(){
        return (
            <nav className="navbar navbar--size navbar--theme">
                <div className="navbar__left"></div>
                <div className="navbar__center"></div>
                <div className="navbar__right">
                    <SearchbarComponent/>
                </div>
            </nav>
        )
    }
}