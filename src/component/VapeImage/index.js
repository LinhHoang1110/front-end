import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import DeataiImage from '../../views/DetailScreen';
import { withStyles } from '@material-ui/core/styles';

const styles = () => {
    return {
        vapeImage: {
            padding: " 15px 0 0 0",
            width: "25%",
            flexFlow: "column",
            display: "flex"
        },
        infor: {
            textAlign: "center",
            fontFamily: "Consolas",
        },
        btnAddCart: {
            width: "141px",
            height: "19px",
            background: "#000000",
            borderRadius: "99px",
            fontFamily: "Consolas",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "14px",
            lineHeight: "16px",
            color: "#FFFFFF"
        }
    }
}

class VapeImage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { id, content, product_name } = this.props;
        const { classes } = this.props;
        let { product } = this.props;
        return (
            <div className={classes.vapeImage}>
                <Link to={`/detal-products/${id}`} style={{ width: "25%" }}>
                    <img src={product.image} style={{ objectFit: "contain" }}></img>
                </Link>
                <div className={classes.infor}>
                    <Link to={`/detal-products/${id}`} style={{ width: "25%" }}>

                        <Link to='/detal-products'>{product.name}</Link>
                    </Link>
                    <p>{product.price}</p>
                    <button className={classes.btnAddCart} onClick={() => this.onAddToCart(product)}>Add to cart</button>
                </div>
            </div>
        )
    }

    onAddToCart = (product) => {
        this.props.onAddToCart(product)
    }
}

export default withStyles(styles)(VapeImage)