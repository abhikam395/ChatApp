import React, { Component } from 'react';
import './followbutton.scss';

export default class Followbutton extends Component{

    constructor(props){
        super(props);
    }

    followUser(event){
        let { removeUser } = this.props;
        removeUser(2);
    }

    render(){
        return (
            <button className="follow-button" 
                onClick={this.followUser.bind(this)}>Follow</button>
        )
    }
}