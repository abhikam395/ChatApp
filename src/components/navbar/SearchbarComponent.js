import React, { Component } from 'react';
import './searchbar.scss';

import { Search } from '@material-ui/icons';

export default class SearchbarComponent extends Component{

    query(event){
        console.log(event.target.value)
    }

    render(){
        return (
            <div className="searchbar searchbar--size searchbar--theme">
                <Search/>
                <input className="input-search" 
                    placeholder="Search User ..." 
                    onChange={this.query.bind(this)}/>
            </div>
        )
    }
}