import React, { Component } from "react";
import { withStyles } from '@material-ui/core';
import * as Message from "../../constants/Message"

const Styles = () => {
    return {
        containerCart: {
            display: "flex",
            padding: "20px 50px"
        },
        imgInfor: {
            display: "flex",
            flexFlow: "coloumn",
            height: "100px",
        },
        quantity: {
            display: "flex",
            paddingRight: "10px",
        },
        btnPlus: {
            margin: "0 10px 0 0",
            width: "39.11px",
            height: "54px"
        },
        number: {
            margin: "15px 20px 0 12px",
            textAlign: "center",
            fontSize: "24px"
        },
        btnMinus: {
            margin: "0 10px",
            width: "39.11px",
            height: "54px"
        },
        guaranteeShip: {
            margin: "0 0 0 30px",
            flexFlow: "column",
            fontFamily: "Consolas",
            width: "200px"
        },
        price: {
            margin: "0 30px",
            fontFamily: "Consolas",
        },
        sub: {}
    }
}

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1
        }
    }

    render() {
        const { classes } = this.props;
        const { item } = this.props;
        console.log(item);
        let { quantity } = item.quantity > 0 ? item : this.state;
        console.log(quantity)

        return (
            <div className={classes.containerCart}>
                <div className={classes.imgInfor}>
                    <img style={{ height: "100px", width: "100px" }} src={item.product.image}></img>
                    <strong style={{ margin: "0 0 0 30px", fontFamily: "Consolas" }}>{item.product.name}</strong>
                    <a style={{ color: "red", cursor: "pointer" }} onClick={() => this.onDelete(item.product)} >_ Remove</a>
                </div>

                <div className={classes.guaranteeShip}>
                    <div>
                        - bảo hành 3 tháng
                    </div>
                    <div>
                        - free ship toàn quốc
                    </div>
                </div>

                <div className={classes.price}>
                    {item.product.price}
                </div>

                <div className={classes.quantity}>
                    <button className={classes.btnMinus} onClick={() => this.onUpdateQuantity(item.product, item.quantity - 1)}>-</button>
                    <p className={classes.number}>{quantity}</p>
                    <button className={classes.btnPlus} onClick={() => this.onUpdateQuantity(item.product, item.quantity + 1)}>+</button>

                </div>

                <div className={classes.sub}>
                    {this.showSubTotal(item.product.price, item.quantity)}đ
                </div>
            </div>
        )
    }

    onDelete(product) {
        console.log(product);
        let { onDeleteProductInCart, onChangeMessage } = this.props;
        onDeleteProductInCart(product);
        onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS)
    }

    showSubTotal = (price, quantity) => {
        console.log(parseFloat(price) * quantity)
        return parseInt(price) * quantity
    }

    onUpdateQuantity = (product, quantity) => {
        if (quantity > 0) {
            this.setState({
                quantity: quantity
            });
            this.props.onUpdateProductInCart(product, quantity);
        }
    }
}

export default withStyles(Styles)(CartItem)