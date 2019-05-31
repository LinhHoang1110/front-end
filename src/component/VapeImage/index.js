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
                <Link to={`/detal-products/${product._id}`} style={{ width: "25%" }}>
                    <img src={Config.API_URL + product.imageUrl} style={{ objectFit: "contain" }}></img>
                </Link>
                <div className={classes.infor}>
                    <Link to={`/detal-products/${product._id}`} style={{ width: "25%" }}>

                        <Link to='/detal-products'>{product.title}</Link>
                    </Link>
                    <p>{product.price}</p>
                    <button className={classes.btnAddCart} onClick={() => this.onAddToCart(product)}>Add to cart</button>
                </div>
            </div>
        )
    }

    onAddToCart = (product) => {
        callApi("api/images", "POST", {
            name: "abc",
            price: 10, 
            image: " asfaf",
            quantity: 12
        }).then(res => {
            console.log(res);
            this.props.history.push("/shopping_cart")
        })
        // console.log(product)
       
    }

}

export default withStyles(styles)(VapeImage)