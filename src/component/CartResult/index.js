import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom'
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { connect } from "react-redux"
import * as Config from "../../constants/Config"
import PaypalSuccess from ".././PaypalSuccess"


const Styles = () => {
    return {
        sum: {
            position: "absolute",
            right: "15%",
            fontSize: "1.5rem"
            // top: "0"
        },
        btnBackPay: {
            width: "100%",
            display: "flex",
            marginTop: "30%",
            justifyContent: "center"
        },
        btnBack: {
            position: "absolute",
            top: "90px",
            width: "300px",
            height: "30px",
            "&:hover": {
                opacity: "0.7",
                cursor: "pointer"
            }
        },
        btnPay: {
            width: "200px",
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
    constructor(props) {
        super(props)
    }

    backPage() {
        this.props.history.push("/")
    }

    render() {
        const { classes, item, authReducer } = this.props;
        const client = {
            sandbox: 'Ab08l9Y7JSilOoLFLR7eoYuIux9YiA9zpIJue_AWMFTb2dI2eXh29VDvLlepOIRCKyD_9U2k2EyFrPVl',
            production: 'Ab08l9Y7JSilOoLFLR7eoYuIux9YiA9zpIJue_AWMFTb2dI2eXh29VDvLlepOIRCKyD_9U2k2EyFrPVl',
        }
        const onSuccess = (payment) => {
            // 1, 2, and ... Poof! You made it, everything's fine and dandy!
            console.log("Payment successful!", payment);
            this.props.history.push("/paypalSucces")
            // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
        }

        const onCancel = (data) => {
            // The user pressed "cancel" or closed the PayPal popup
            console.log('Payment cancelled!', data);
            // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
        }

        const onError = (err) => {
            // The main Paypal script could not be loaded or something blocked the script from loading
            console.log("Error!", err);
            // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
            // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
        }

        // console.log(item)

        console.log(this.props)

        return (
            <div>
                <a className={classes.btnBack} onClick={() => this.backPage()}><i class="fas fa-chevron-left"></i>&nbsp;&nbsp;Trở lại shop</a>
                <div>
                    <strong className={classes.sum} >Tổng: {this.showTotalAmout(item).toLocaleString('us')}$</strong>
                    {/* <strong className={classes.sum} >Tổng: 10đ</strong> */}
                </div>
                <div style={{ margin: "0 30px" }}>
                    <div className={classes.btnBackPay}>

                        {
                            authReducer ?
                                <PaypalExpressBtn
                                    client={client}
                                    currency={'USD'}
                                    total={this.showTotalAmout(item).toLocaleString('us')}
                                    onError={onError} onSuccess={onSuccess} onCancel={onCancel}
                                /> : <span style={{ width: "200px", fontSize: "1.5rem", lineHeight: "30px", color: "red" }}><i class="fas fa-exclamation"></i> Xin quý khách vui lòng đăng nhập để thanh toán </span>
                        }
                    </div>
                </div>
            </div>
        )
    }

    showTotalAmout = (item) => {
        let total = 0;
        if (item.length > 0) {
            for (var i = 0; i < item.length; i++) {
                total += parseInt(item[i].product.price) * item[i].quantity;
            }
        }
        return total
    }
}

const Store = state => state

export default withStyles(Styles)(connect(Store, null)(CartResult))