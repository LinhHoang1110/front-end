import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const Styles = () => {
    return {
        sum: {
            textAlign: "right",
            fontFamily: "Consolas"
        },
        btnBackPay: {
            width: "100%",
            display: "flex",
            marginTop: "30px",
            justifyContent: "center"
        },
        btnBack: {
            width: "240px",
            height: "56px",
            fontFamily: "Consolas",
            fontStyle: 'normal',
            fontWeight: "bold",
            fontSize: "20px",
            lineHeight: "23px",
            background: "#FFFFFF",
            boxShadow: "0px 0px 2px rgba(9, 30, 74, 0.3)",
            borderRadius: "50px"
        },
        btnPay: {
            width: "240px",
            height: "56px",
            fontFamily: "Consolas",
            fontStyle: 'normal',
            fontWeight: "bold",
            fontSize: "20px",
            lineHeight: "23px",
            color: "#FFFFFF",
            boxShadow: "0px 0px 2px rgba(9, 30, 74, 0.3)",
            background: "black",
            borderRadius: "50px",
        }
    }
}

class CartResult extends Component {
    render() {
        const { classes } = this.props;
        const { cart } = this.props
        return (
            <div style={{ margin: "0 30px" }}>
                <div>
                    <strong className={classes.sum} >Tổng: { this.showTotalAmout(cart)}đ</strong>
                </div>
                <div className={classes.btnBackPay}>
                    <button className={classes.btnBack}>Trở lại shop</button>
                    <button className={classes.btnPay}>Check out</button>
                </div>
            </div>
        )
    }

    showTotalAmout = (cart) => {
        let total = 0;
        if(cart.length > 0 ) {
            for(var i = 0; i < cart.length; i++) {
                total +=  parseInt(cart[i].product.price) * cart[i].quantity; 
            }
        }
        return total 
    }
}

export default withStyles(Styles)(CartResult)