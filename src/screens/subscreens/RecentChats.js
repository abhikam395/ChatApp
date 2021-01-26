import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './recentchats.scss';

export default class RecentChats extends Component{

    constructor(props){
        super(props);
        console.log(this.props.location)
    }

    render(){
        return (
            <div>
                sdfsd
                <Link to={`${this.props.location.pathname}friends`}>Next</Link>
            </div>
        )
    }
}