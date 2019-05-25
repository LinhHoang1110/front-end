import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import DeataiImage from './DetailScreen';
import { withStyles } from '@material-ui/core/styles'

const styles = () => {
    return {
        vapeImage: {
            padding: " 15px 0 0 0",
            width: "100%",
            flexFlow: "column",
            display : "flex"
        },
        infor: {
            textAlign: "center",
            fontFamily: "Consolas",
        }
    }
}

class VapeImage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { id, content, product_name } = this.props;
        const { classes } = this.props
        return (
            <Link to={`/detal-products/${id}`} style={{width: "25%"}}>
                    <div className={classes.vapeImage}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUh2l5H-5gargJqvv9TvaUg77a0HlRIzQeyanDDu3toWw2fNZG_A" style={{objectFit: "contain"}}></img>
                        <div className={classes.infor}>
                            <Link to='/detal-products'>SMOK NOVO Vape Pod Starter Kit</Link>
                            <p>100.000.000đ</p>
                        </div>
                    </div>
            </Link>
        )
    }
}

export default withStyles(styles)(VapeImage)