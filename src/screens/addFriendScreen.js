import React, { Component } from 'react';
import './addfriend.scss';

import SearchbarComponent from './../components/searchbarComponent';

export default class AddFriendScreen extends Component{

    render(){
        return(
            <div className="add-friend add-friend--size">
                <div className="add-friend__searchbar add-friend__searchbar--size">
                    <SearchbarComponent/>
                </div>
            </div>
        )
    }
}