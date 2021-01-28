import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

export default class NavbarComponent extends Component{

    render(){
        return (
           <nav className="navbar navbar--size navbar--theme">
               <Link to="/" className="navbar__name">
                   ChatApp
               </Link>
           </nav>
        )
    }
}