import React, { Component, Fragment} from 'react';
import './user.scss';

import { followUser } from './../apis/friendapi';
import Toast from './../components/toasts/toast';

export default class UserComponent extends Component {

    constructor(){
        super();
        this.state = {
            apiCalled: false,
            status: false,
            error: {
                message: null,
            },
            message: null
        }
        this.startTimer = this.startTimer.bind(this);
    }

    follow(followeeId){
        followUser(2, followeeId)
        .then(response => {
            console.log(response.error)
            this.setState({apiCalled: true});
            let {status, message, error} = response;
            if(status){
                this.setState({status: status, message: message})
            }
            else{
                this.setState({status: status, error: error})
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    startTimer(){
        setTimeout(() => {
            this.setState({apiCalled: false})
        }, 1500)
    }

    render(){
        let context = this;
        let { user } = this.props;
        let {apiCalled, status, error, message } = this.state;

        function showApiResponse(){
            if(apiCalled){
                context.startTimer();
                if(status)
                    return <Toast className="success" message={message}/>
                else
                    return <Toast className="fail" message={error.message}/>    
            }
            else return <div></div>
        }
        
        return(
            <Fragment>
                {showApiResponse()}
                <li className="user user--size">
                    <img className="user__image user__image--size"/>
                    <h4 className="user__name">{user.name}</h4>
                    <button className="button" onClick={this.follow.bind(this, user.id)}>FOLLOW</button>
                </li>
            </Fragment>
        )
    }
}