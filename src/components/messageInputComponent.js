import React, { Component, Fragment} from 'react';
import './messageinput.scss';
import { Clear, Send, Title } from '@material-ui/icons';

const STATE = {
    TYPING: 'TYPING',
    OPEN: 'OPEN',
    CLOSE: 'CLOSE',
    EMPTY: 'EMPTY'
}

export default class MessageInputComponent extends Component {

    constructor(){
        super();
        this.state = {
            selfState: STATE.CLOSE,
            message: ""
        }
    }

    onChange(event){
        let { value } = event.target;
        if(value == "")
            this.setState({selfState: STATE.OPEN})
        else{
            this.setState({selfState: STATE.TYPING, message: value})
    
        }
    }

    buttonType(selfState){
        if(selfState == STATE.TYPING){
            return (
                <Fragment>
                    <input className="messageinput__message messageinput__message--size" 
                        placeholder="Type message"
                        id="message-input"
                        onChange={this.onChange.bind(this)}/>
                    <div className="messageinput__button" onClick={this.onButtonClick.bind(this)}>
                        <Send/>
                    </div>
                </Fragment>
               
            )
        }
        else if(selfState == STATE.OPEN){
            return(
                <Fragment>
                    <input className="messageinput__message messageinput__message--size" 
                        placeholder="Type message"
                        id="message-input"
                        onChange={this.onChange.bind(this)}/>
                    <div className="messageinput__button" onClick={this.onButtonClick.bind(this)}>
                        <Clear/>
                    </div>
                </Fragment>

            )
        }
        else
            return(
                <Fragment>
                    <div className="messageinput__button" onClick={this.onButtonClick.bind(this)}>
                        <Title/>
                    </div>
                </Fragment>
               
            )
    }

    onButtonClick(){
        let { selfState } = this.state;
        if(selfState == STATE.CLOSE){
            this.setState({selfState: STATE.OPEN })
        }
        else if (selfState == STATE.OPEN){
            this.setState({selfState: STATE.CLOSE})
        }
        else if (selfState == STATE.TYPING){
            this.setState({selfState: STATE.OPEN, message: null})
            let messageInput = document.getElementById("message-input");
            messageInput.value = "";
        }
    }

    render(){
        return(
            <div className="messageinput messageinput--size">
               <div className="row">
               {this.buttonType(this.state.selfState)}
               </div>
            </div>
        )
    }
}