import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Grid, Cell } from 'react-mdl'


class LinkInfo extends Component {
    render() {
        return (
            <div className='filter'>
                <Cell col={6}>
                    <div className="filter-product">
                        <div>
                            <Link to='/' className='link'>Trang chủ </ Link>
                        </div>
                        <div className='link'>Sản phẩm </div>
                        <div className='link'>Sản phẩm </div>
                        <div className='link'>Sản phẩm </div>
                        <div className='link'>Sản phẩm </div>
                    </div>
                </Cell>

                <Cell col={6}>
                    <div className='signUp'>
                        <Link to='/login'>Đăng nhập</Link>
                        <Link to='/shopping_cart'>Giỏ hàng</Link>
                    </div>
                </Cell>


            </div>
        )
    }
}

export default LinkInfo