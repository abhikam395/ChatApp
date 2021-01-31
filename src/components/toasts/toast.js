import React, { Component } from 'react';
import { unmountComponentAtNode } from 'react-dom';
import './toast.scss';

export default class SuccessToast extends Component {

    constructor(props){
        super(props);
    }

    render(){
        let {className, message} = this.props;

        return(
            <div className={`toast ${className}`}>
                {message}
            </div>
        )
    }
}