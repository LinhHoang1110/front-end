import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import DeataiImage from '../../views/DetailScreen';
import { withStyles } from '@material-ui/core/styles';
import * as Config from "../../constants/Config"
import callApi from '../../utils/ApiCaller';
import { connect } from "react-redux"
import { actProductQuantity } from "../../actions/quantityAction"

const styles = () => {
    return {
        vapeImage: {
            padding: " 15px 0 15px 0",
            width: "100%",
            flexFlow: "column",
            display: "flex",
            boxShadow: "0px 2px 4px #ccc",
            borderRadius: 3
        },
        infor: {
            // width: "100%",
            textAlign: "center",
            fontFamily: "Consolas",
        },
        btnAddCart: {
            width: "141px",
            height: "30px",
            background: "#000000",
            borderRadius: "99px",
            fontFamily: "Consolas",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "14px",
            lineHeight: "16px",
            color: "#FFFFFF",
            marginBottom: "5px",
            transition: "transform 0.3s ease-in-out 0s",
            "&:hover": {
                transform: "translateY(-6px)"
        }
    },
        item: {
        width: "25%",
            padding: 16,
        }
}
}

class VapeImage extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            productQuantity: 0
        })
    }

    render() {
        const { classes } = this.props;
        let { product, quantityProduct } = this.props;
        // console.log(quantityProduct)
        console.log(product)
        // console.log(this.props)
  
        return (
            <div className={classes.item}>
                <div className={classes.vapeImage}>
                    <Link to={`/detal-products/${product.id}`} style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                        <img src={product.imgUrl} style={{ maxWidth: "100%", maxHeight: "100%" }}></img>
                    </Link>
                    <div className={classes.infor}>
                        <Link to={`/detal-products/${product.id}`} >

                            <Link to={`/detal-products/${product.id}`}>{product.name}</Link>
                        </Link>
                        <p>{product.price}$</p>
                        {
                            product.quantity === 0 ? 
                            "Tiếc thay là hết hàng r :(" : 
                            <button className={classes.btnAddCart} onClick={() => this.onAddToCart(product)}>Add to cart</button>
                        }
                        
                    </div>
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
        let total = JSON.parse(localStorage.getItem("TOTAL"))
        try {
            cart = JSON.parse(localStorage.getItem("CART-SHOPPING")) || [];
        } catch (error) {

        }

        

        if (cart.filter(item => item.product._id == product._id).length == 0) {
            localStorage.setItem("TOTAL", total += product.price)
            console.log(product)
            cart.push({ product, quantity: 1 });
        } else {

            for (let i = 0; i < cart.length; i++) {
                if (cart[i].product._id == product._id) {
                    cart[i].quantity += 1
                    cart[i].product.quantity -= 1;
                    // console.log(cart[i].product.quantity)
                    localStorage.setItem("TOTAL", total += (cart[i].product.price + cart[i].quantity))
                    if(cart[i].product.quantity === 0) {
                        return alert("Số lượng bạn thêm vào vượt quá kho hàng, chịu khó đợi chút nhé :3 ")
                    }
                }
            }
        }

        localStorage.setItem("CART-SHOPPING", JSON.stringify(cart));
        alert("Thêm sản phẩm thành công")
        const shoppingCart =  JSON.parse(localStorage.getItem("CART-SHOPPING"))
        this.setState({
            productQuantity: shoppingCart.length
        })
        this.props.actProductQuantity(shoppingCart.length)
    }
}

const Store = (state) => state
const action = {
    actProductQuantity
}
export default withStyles(styles)(connect(Store, action)(VapeImage))