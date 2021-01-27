import React, { Component } from 'react';
import './navbar.scss';

export default class NavbarComponent extends Component{

    render(){
        return (
           <nav className="navbar navbar--size navbar--theme">
               <a href="/" className="navbar__name">
                   ChatApp
               </a>
           </nav>
        )
    }
}