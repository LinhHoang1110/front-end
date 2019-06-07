import React, { Component } from "react";
import callApi from "../../utils/ApiCaller"
import { connect } from "react-redux"

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
                        <p>{products.product.name}</p>
                        <p>{products.quantity}</p>
                    </div>
                )
            })
        }
        return result
    }

    render() {
        const orderProducts = JSON.parse(localStorage.getItem("CART-SHOPPING"));
        const orderEmail = localStorage.getItem("ORDER-EMAIL");
        const orderUsername = localStorage.getItem("ORDER-USERNAME");
        const orderCity = localStorage.getItem("ORDER-CITY")
        console.log(orderProducts, orderCity, orderEmail, orderUsername)

        return (
            <div>
                <p>
                    {orderEmail}
                </p>

                <p>
                    {orderUsername}
                </p>

                <p>
                    {orderCity}
                </p>

                {
                    this.showAllproductOrder(orderProducts)
                }

            </div>
        )
    }
}

const Store = (state) => state

export default connect(Store, null)(PaypalSuccess)