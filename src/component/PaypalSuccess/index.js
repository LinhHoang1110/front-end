import React, { Component } from "react";
import callApi from "../../utils/ApiCaller"
import { connect } from "react-redux"


const style = () => {
    return {
        order: {
            positition: "absolute",
            top: "50%",
            right: "50%",
            textAlign: "center"
        }
    }
}


class PaypalSuccess extends Component {
    constructor(props) {
        super(props)
    }

    showAllproductOrder(orderList) {
        let result = null;
        if (orderList.length > 0) {
            result = orderList.map((products) => {
                return (
                    <div>
                        <div>
                            <div style={{
                            color: "#aebecd",
                            fontSize: "12px",
                        }}>
                                Tên sản phẩm
                            </div>
                            <p>{products.product.name}</p>
                        </div>
                        <div>
                            <div style={{
                            color: "#aebecd",
                            fontSize: "12px",
                        }}>Số lượng mua</div>
                            <p>{products.quantity}</p>
                        </div>
                        
                    </div>
                )
            })
        }
        return result
    }

    render() {
        const classes = this.props;
        const orderProducts = JSON.parse(localStorage.getItem("CART-SHOPPING"));
        // console.log(orderProducts);
        const orderEmail = localStorage.getItem("ORDER-EMAIL");
        const orderUsername = localStorage.getItem("ORDER-USERNAME");
        const orderCity = localStorage.getItem("ORDER-CITY")
        console.log(orderProducts, orderCity, orderEmail, orderUsername)

        return (
            <div style={{marginBottom: "40px"}} className="container">
                <p style={{ position: "absolute", top: "15%", left: "45%",fontWeight: "bold", fontSize: "20px" }}>Hoá đơn của bạn</p>
                <div style={{
                    width: "30%", position: "absolute", top: "20%", left: "35%", boxSizing: "border-box",
                    height: "auto",
                    display: "flex",
                    flexDirection: "column",
                    // webkitBoxAlign: "center",
                    // alignItems: "center",
                    boxShadow: "rgba(9, 30, 74, 0.3) 0px 7px 20px 2px",
                    padding: "2rem",
                    borderRadius: "8px"
                }} >
                    <div>
                        <div style={{
                            color: "#aebecd",
                            fontSize: "12px",
                        }}>Email:</div>
                        <p>
                            {orderEmail}
                        </p>
                    </div>

                    <div>
                        <div style={{
                            color: "#aebecd",
                            fontSize: "12px",
                        }}>Tên</div>
                        <p>
                            {orderUsername}
                        </p>
                    </div>

                    <div>
                        <div style={{
                            color: "#aebecd",
                            fontSize: "12px",
                        }}>Địa chỉ:</div>
                        <p>
                            {orderCity}
                        </p>
                    </div>

                    {
                        
                        this.showAllproductOrder(orderProducts)
                    }
                    
                </div>
            </div>

        )
    }
}
// console.log(orderProducts)

const Store = (state) => state

export default connect(Store, null)(PaypalSuccess)