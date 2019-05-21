import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SearchField from './searchField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LinkInfo from './link';




class NavBar extends Component {
    render() {
        return (
            <div className='navbar'>
                <div className='container-navbar'>
                    <Cell col={6}>
                        <p className='logo'>SHOPVAPE</p>
                    </Cell>

                    <Cell col={6}>
                        <SearchField />
                    </Cell>
                </div>
                <LinkInfo />
            </div>
        )
    }
}

export default NavBar