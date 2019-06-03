import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import CartItem from "../CartItem";


class Cart extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { children } = this.props;

        return (
            <div style = {{margin: "5% 10%"}}>
                <div className="table-responsive">
                    <table className="table
                    ">
                        <thead>
                            <tr style={{fontFamily: "Consolas"}}>
                                <th></th>
                                <th>Sản phẩm</th>
                                <th>Thông tin bảo hành</th>
                                <th>Giá(VNĐ)</th>
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