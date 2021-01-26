import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.scss';

export default class SidebarCompoent extends Component{

    constructor(props){
        super(props);
        this.state = {
            menus: [
                {id: 1, name: 'Recent Chats', route: '/'},
                {id: 2, name: 'Friends', route: '/friends'},
                {id: 3, name: 'Online Friends', route: '/online'},
            ],
            selectedItem : Element
        }
    }

    componentDidMount(){
        this.setState({
            selectedItem: document.getElementsByClassName('sidebar__list-item')[0]
        })
    }

    onClick(route, event){
        let { history } = this.props;
        history.push(route)
        this.updateSelectedItem(event.target)
    }

    updateSelectedItem(selectedListItem){
        let alreadySelectedItem = this.state.selectedItem;
        alreadySelectedItem.style.backgroundColor = '#ffc107';
        alreadySelectedItem.style.color = 'white';
        alreadySelectedItem.style.border = 'none';

        let clickListItem = selectedListItem;
        clickListItem.style.backgroundColor = 'white';
        clickListItem.style.color = '#ffc107';
        clickListItem.style.border = '2px solid black';

        this.setState({
            selectedItem: clickListItem
        })
    }

    getMenuItem(menus){
        return menus.map((menu) => {
            return <li className="sidebar__list-item sidebar__list-item--size" key={menu.id} 
                onClick={this.onClick.bind(this, menu.route)}>
                {menu.name}
            </li>
        })
    }
    
    render(){
        let context = this;
        let { isOpen } = context.props;
        
        function openClose(){
            if(isOpen){
                return <div className="sidebar sidebar--size sidebar--theme">
                    <ul className="sidebar__list sidebar__list--size">
                        {context.getMenuItem(context.state.menus)}
                    </ul>
                </div>
            }
            return (
                <div></div>
            )
        }


        return(
            openClose()
        )
    }
}