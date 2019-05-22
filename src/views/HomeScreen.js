import React, { Component, Fragment } from 'react';
import NavBar from '../component/navbar/navbar';
import { Grid, Cell } from 'react-mdl'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LinkInfo from '../component/navbar/link';
import Login from './Login';
import "./homescreen.css";
import Body from '../component/Body';
import ImageBody from '../component/ImageBody';

class HomeScreen extends Component {
    render() {
        return (
            <Fragment>
                <ImageBody/>
                <Body/>
            </Fragment>
        )
    }
}

export default HomeScreen