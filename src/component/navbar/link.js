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
        signUp: {
            marginLeft: '260px',
            display: "flex"
        },
        link: {
            marginRight: "5px",
            fontFamily: "Consolas",
            positon: "relative",
            display: "inline-block",
            "&:hover > div": {
                display: "block"
            }
        },
        filter: {
            display: "flex",
            width: "100%",
            padding: "0 10px",
        },
        filterProduct: {
            display: "flex",
            fontFamily: " Consolas",
            "& > div": {
                width: " calc(100% / 4)",
                flexBasis: "calc(100% / 4)"
            }
        },
        dropbtn: {
            backgroundColor: "#d8d1c0",
            color: "black",
            fontSize: "16px",
            border: "none",
            cursor: "pointer",
            "&:hover+div": {
                display: "block"
            },
            "&+div": {
                display: "none",
                position: "absolute",
                backgroundColor: "#f9f9f9",
                minWidth: "160px",
                boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
                zIndex: "1",
                "& a:hover": {
                    backgroundColor: "#f1f1f1"
                },
            },
            "&+div a" : {
                color:" black",
                padding: "12px 16px",
                textDecoration: "none",
                display: "block"
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
                        <div className={classes.link}>
                            <button className={classes.dropbtn}>Sản phẩm</button>
                            <div className={classes.dropdownContent}>
                                <a href="#">Vape</a>
                                <a href="#">Tinh dầu Vape</a>
                                <a href="#">Vape pop system</a>
                                <a href="#">Tank Vape</a>
                                <a href="#">Phụ kiện</a>
                                
                            
                            </div>
                        </div>
                        <div className={classes.link}>
                            <button className={classes.dropbtn}>Thương hiệu</button>
                            <div className={classes.dropdownContent}>
                                <a href="#">Joyetech</a>
                                <a href="#">Eleaf</a>
                                <a href="#">Widmec</a>
                                <a href="#">Smoant</a>
                                <a href="#">Wismec</a>
                            </div>
                        </div>
                        <div className={classes.link}>
                            <button className={classes.dropbtn}>Tìm hiểu về vape</button>
                            <div className={classes.dropdownContent}>
                                <a href="#">Vape là gì</a>
                                <a href="#">Vape có hại không</a>
                                <a href="#">Giá vape</a>
                            </div>
                        </div>
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