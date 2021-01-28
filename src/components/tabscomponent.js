import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './tabs.scss';


export default class TabsComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            tabs: [
                {id: 1, name: 'RECENT', route: '/'},
                {id: 2, name: 'FRIENDS', route: '/friends'},
                {id: 3, name: 'ADD FRIEND', route: '/addfriend'},
                {id: 4, name: 'ONLINE', route: '/online'},
            ],
            alreadySelectedTab: Element
        }
    }

    componentDidMount(){
        this.setState({
            alreadySelectedTab: document.getElementsByClassName('tab')[0]
        })
    }

    selectTab(route, selectedTab){
        let tab = selectedTab.target;
        let { alreadySelectedTab } = this.state;

        alreadySelectedTab.classList.remove('active');
        tab.classList.add('active');
        this.setState({alreadySelectedTab: tab})

        let { history } = this.props;
        history.push(route)
    }

    getTabItems(tabs){
        return tabs.map((tab) => {
            return <li key={tab.id} 
                className={`tab tab--size tab--theme ${tab.id == 1 ? 'active': ''}`}
                onClick={this.selectTab.bind(this, tab.route)}>
                    {tab.name}
                </li>
        })
    }

    render(){
        return(
            <ul className="tabs tabs--size tabs--theme">
                {this.getTabItems(this.state.tabs)}
            </ul>
        )
    }
}