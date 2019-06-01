import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import DeataiImage from '../../views/DetailScreen';
import { withStyles } from '@material-ui/core/styles';
import * as Config from "../../constants/Config"
import callApi from '../../utils/ApiCaller';



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
        const { classes } = this.props;
        let { product } = this.props;
        console.log(product)
        console.log(this.props)
        return (
            <div className={classes.vapeImage}> 
                <Link to={`/detal-products/${product.id}`} style={{ width: "25%" }}>
                    <img src={product.imgUrl} style={{ objectFit: "contain" }}></img>
                </Link>
                <div className={classes.infor}>
                    <Link to={`/detal-products/${product.id}`} style={{ width: "25%" }}>

                        <Link to={`/detal-products/${product.id}`}>{product.name}</Link>
                    </Link>
                    <p>{product.price}$</p>
                    <button className={classes.btnAddCart} onClick={() => this.onAddToCart(product)}>Add to cart</button>
                </div>
            </div>
        )
    }

    onAddToCart = (product) => {
        // callApi("api/products/order", "GET", {
        //     product: product
        // }).then(res => {
        //     console.log(res);
        //     // this.props.history.push("/shopping_cart")
        // })
        
        let cart = [];
        try {
            cart = JSON.parse(localStorage.getItem("CART-SHOPPING")) || [];
        } catch (error) {

        }

        if(cart.filter(item => item.product._id == product._id).length == 0) {
            cart.push({ product, quantity: 1 });
        } else {

            for(let i = 0; i < cart.length; i ++) {
                if(cart[i].product._id == product._id) {
                    cart[i].quantity += 1
                }
            }
        }

        localStorage.setItem("CART-SHOPPING", JSON.stringify(cart));
        this.props.history.push("/shopping_cart")
    }

}

export default withStyles(styles)(VapeImage)