import React, { Component } from 'react';
import './searchbar.scss';

import { Search } from '@material-ui/icons';

export default class SearchbarComponent extends Component {

    render(){
        return(
            <form className="searchbar searchbar--size">
                <Search className="searchbar__icon"/>
                <input type="name" className="searchbar__input" 
                    id="searchbar-user"
                    placeholder="Search User"
                    onChange={this.props.queryListener}/>
            </form>
        )
    }
}