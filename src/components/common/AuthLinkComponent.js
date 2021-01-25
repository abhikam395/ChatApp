import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './authlink.scss';

import { NavigateNext } from '@material-ui/icons';

export default class AuthLinkComponent extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="auth-link">
                <Link to={`/${this.props.routename}`} className="link">{this.props.navTo}</Link>
                <NavigateNext/>
            </div>
        )
    }
}