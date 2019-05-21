import React, { Component } from 'react';
import NavBar from '../component/navbar/navbar';
import { Grid, Cell } from 'react-mdl'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LinkInfo from '../component/navbar/link';
import Login from './Login';
import Footer from '../component/Footer';
import "./homescreen.css";
import Body from '../component/Body';
import ImageBody from './image';

class HomeScreen extends Component {
    render() {
        return (
            <div className="wrapper">
                <ImageBody/>
                <Body/>
                <Footer />
            </div>
        )
    }
}

export default HomeScreen