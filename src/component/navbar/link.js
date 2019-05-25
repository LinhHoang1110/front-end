import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Grid, Cell } from 'react-mdl'
import { withStyles } from '@material-ui/core/styles'

const styles = () => {
    return {
        login: {
            minWidth: "145px"
        },
        shoppingCart: {
         
        },
        signUp : {
            marginLeft: '260px',
            display: "flex"
        },
        link : {
            marginRight: "5px",
            fontFamily: "Consolas"
        },
        filter: {
            display: "flex",
            width: "100%",
            padding: "0 10px",
        },
        filterProduct: {
            display: "flex",
            fontFamily:" Consolas",
            "& > div": {
                width:" calc(100% / 4)",
                flexBasis: "calc(100% / 4)"
            }
        },
    }
}

class LinkInfo extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { classes } = this.props
        return (
            <div className={classes.filter}>
                <Cell col={6}>
                    <div className={classes.filterProduct}>
                        <div>
                            <Link to='/' className='link'>Trang chủ </ Link>
                        </div>
                        <div className={classes.link}>Sản phẩm </div>
                        <div className={classes.link}>Thương hiệu </div>
                        <div className={classes.link}>Tìm hiểu về Vape </div>
                    </div>
                </Cell>

                <Cell col={6}>
                    <div className={classes.signUp}>
                        <div className={classes.login} style={{ 'font-family': 'Consolas' }}>
                            <Link to='/login'>Đăng nhập</Link>
                        </div>
                        <div className={classes.shoppingCart} style={{ 'font-family': 'Consolas' }}>
                            <Link to='/shopping_cart'>Giỏ hàng</Link>
                        </div>
                    </div>
                </Cell>


            </div>
        )
    }
}

export default withStyles(styles)(LinkInfo)