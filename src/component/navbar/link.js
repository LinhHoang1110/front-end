import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Grid, Cell } from 'react-mdl'
import { withStyles } from '@material-ui/core/styles'
import { connect } from "react-redux"

const styles = () => {
    return {
        login: {
            minWidth: "145px"
        },
        shoppingCart: {
            "& a": {
                textDecoration: "none"
            }
        },
        signUp: {
            marginLeft: '260px',
            display: "flex",
            textDecoration :" none",
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
        dropdownContent: {
            transition : "all 1s",
        },
        category: {
            textDecoration :"none"
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
                width: " calc(100%/4)",
                flexBasis: "calc(100%/4)"
            }
        },
        dropbtn: {
            color: "black",
            fontSize: "16px",
            border: "none",
            cursor: "pointer",
            "&:hover+div": {
                display: "block",
                // transition: "all 1s",

            },
            "&:hover .dropdownContent":{
                display: "none",
            },
            "&+div": {
                display: "none",
                position: "absolute",
                backgroundColor: "black",
                opacity :"0.8",
                minWidth: "160px",
                boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
                zIndex: "1",
                "& a:hover": {
                    backgroundColor: "black",
                    opacity : "0.5",
                    
                },
            },
            "&+div a": {
                color: " white",
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
        const { classes, VapeProducts } = this.props
        // if (!VapeProducts) {
        //     return "Loading..."
        // }
        console.log(VapeProducts)
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
                                <Link to={`/caterory/vape`}>Vape</ Link>
                                <Link to={`/caterory/tinhdau`}>Tinh dầu Vape</Link>
                                <Link to={`/caterory/pods`}>Vape pod system</Link>
                                <Link to={`/caterory/tankVape`}>Tank Vape</Link>
                                <Link cto={`/caterory/phuKien`}>Phụ kiện</Link>


                            </div>
                        </div>
                        <div className={classes.link}>
                            <button className={classes.dropbtn}>Thương hiệu</button>
                            <div className={classes.dropdownContent}>
                                <Link to={`/brand/Joyetech`}>Joyetech</Link>
                                <Link to={`/brand/Eleaf`}>Eleaf</Link>
                                <Link to={`/brand/Widmec`}>Widmec</Link>
                                <Link to={`/brand/Smoant`}>Smoant</Link>
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
                        <div className={classes.login} >
                            <Link className={classes.category} to='/login'>Đăng nhập</Link>
                        </div>
                        <div className={classes.shoppingCart}>
                            <Link className={classes.category} to='/shopping_cart'>Giỏ hàng</Link>
                        </div>
                    </div>
                </Cell>


            </div>
            
        )
    }
}

export default withStyles(styles)(LinkInfo)