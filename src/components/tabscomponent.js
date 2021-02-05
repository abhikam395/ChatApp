import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './tabs.scss';


export default class TabsComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            tabs: [
                {name: 'RECENT', route: '/', id: "recent"},
                {name: 'FRIENDS', route: '/friends', id: "friends"},
                {name: 'ADD FRIEND', route: '/addfriend', id: "addfriend"},
                {name: 'ONLINE', route: '/online', id: "online"},
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
        return tabs.map((tab, index) => {
            return <li key={index} 
                    id={tab.id}
                    className={`tab tab--size tab--theme ${index == 0 ? 'active': ''}`}
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