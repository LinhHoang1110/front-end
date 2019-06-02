import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import SearchField from './searchField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LinkInfo from './link';
import { withStyles } from '@material-ui/core/styles';


const styles = () => {
    return {
        navbar: {
            padding: "8px 100px!important",
            boxShadow: "0px 2px 4px #ccc",
            position: "fixed",
            width: "100%",
            background: "white",
            zIndex: "1"
        },
        containarNavbar: {
            display: 'flex',
            justifyContent: "center",
            position: "relative",
            width: "100%",
            height: "100%",

        },
        logo: {
            marginTop: "20px",
            fontSize: '48px',
            fontFamily: "Consolas"
        },
        SearchField : {
            position: "relative",
        }
    }
}



class NavBar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.navbar}>
               
                <LinkInfo />
            </div>
        )
    }
}

export default withStyles(styles)(NavBar);