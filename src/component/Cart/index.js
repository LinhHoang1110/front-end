import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import CartItem from "../CartItem";
import _ from "lodash"


class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Message: ""
        }
    }

    render() {
        const { children } = this.props;
        const Addvertise = localStorage.getItem("CART-SHOPPING")
        console.log(typeof(Addvertise))

        return (
            <div style = {{margin: "5% 10%"}}>
                <h3>
                    <span className="badge amber darken-2">
                    {
                        Addvertise === "[]" ? "Không có sản phẩm nào trong giỏ hàng" : ""
                        }
                    </span>
                </h3>
                <div className="table-responsive">
                    <table className="table
                    ">
                        <thead>
                            <tr style={{fontFamily: "Consolas"}}>
                                <th></th>
                                <th>Sản phẩm</th>
                                <th>Thông tin bảo hành</th>
                                <th>Giá(USD)</th>
                                <th>Số lượng</th>
                                <th>Tổng</th>
                            </tr>
                        </thead>
                        <tbody>
                            { children }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Cart