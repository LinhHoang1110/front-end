import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import SearchField from './searchField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LinkInfo from './link';
import { withStyles } from '@material-ui/core/styles'

const styles = () => {
    return {
        navbar: {
            padding: "8px 100px!important",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 1)"
        },
        containarNavbar: {
            display: 'flex',
            justifyContent: "center",
            position: "relative",
            width: "100%",
            height: "100%"
        },
        logo: {
            marginTop: "40px",
            fontSize: '48px',
            fontFamily: "Consolas"
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
                <div className={classes.containarNavbar}>
                    <Cell col={6}>
                        <p className={classes.logo}>SHOPVAPE</p>
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

export default withStyles(styles)(NavBar)