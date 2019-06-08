import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Grid, Cell } from 'react-mdl'
import { withStyles } from '@material-ui/core/styles'
import { connect } from "react-redux"
import searchField from './searchField';
import Modal from 'react-modal';
import { withRouter } from "react-router-dom";
import SearchField from "./searchField";
import _ from "lodash";
import { clearAuthReducer } from "../../actions/vapeActions";
import classNames from "classnames";


const styles = () => {
    return {
        login: {
            minWidth: "115px",
            "& > a": {
                color: "black",
                border: "1px solid black",
                padding: "0 3px",
                textDecoration: "none"
            }
        },
        shoppingCart: {
            "& a": {
                textDecoration: "none"
            }
        },
        signUp: {
            // marginLeft: '150px',
            display: "flex",
            textDecoration: " none",
            flexDirection: "row-reverse"

        },
        link: {
            marginRight: "5px",
            // fontFamily: "Consolas",
            positon: "relative",
            display: "inline-block",
            "&:hover > div": {
                display: "block"
            },

        },
        dropdownContent: {
            transition: "all 1s",
        },
        category: {
            position: "absolute",
            right: "15%",
            textDecoration: "none",
            width: "96px",
            borderRadius: "16px",
            border: "1px solid",
            transition: "all 0.3s",
            padding: "5px 5px",
            "&:hover ": {
                backgroundColor: "black",
                color: "white"
            }
        },
        filter: {
            display: "flex",
            width: "100%",
            padding: "0 10px",
        },
        filterProduct: {
            display: "flex",
            alignItems: "center",
            paddingTop: "5px",
            // fontFamily: " Consolas",
            "& > div": {
                width: " calc(100%/4)",
                flexBasis: "calc(100%/4)"
            },
        },
        home: {
            "& > a": {
                textDecoration: "none",
                color: "black",
            },
            "& > a:hover": {
                color: "black"
            }
        },
        login_cart: {
            display: "flex",
            justifyContent: "start-end",
            alignItem: "center"
        },
        cart: {
            cursor: "pointer",
            marginTop: "5%"
        },
        dropbtn: {
            backgroundColor: "white",
            color: "black",
            fontSize: "16px",
            border: "none",
            cursor: "pointer",
            "&:hover+div": {
                display: "block",
                // transition: "all 1s",

            },
            "&:hover .dropdownContent": {
                display: "none",
            },
            "&+div": {
                display: "none",
                position: "absolute",
                backgroundColor: "black",
                opacity: "0.8",
                minWidth: "160px",
                boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
                zIndex: "1",
                "& a:hover": {
                    backgroundColor: "black",
                    opacity: "0.5",

                },
            },
            "&+div a": {
                color: " white",
                padding: "12px 16px",
                textDecoration: "none",
                display: "block"
            }
        },
        FAQ: {
            "& a": {
                textDecoration: "none",
                cursor: "pointer"
            },
            "& a:hover": {
                color: "black",
                opacity: "0.5"
            }
        },
        fas: {
            position: "absolute",
            top: "15%",
            // right: "15%",
            paddingTop: "10px",
            fontSize: "25px"
        }
    }
}

class LinkInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalIsOpen: false,
        };
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.checkLoginLogOut = this.checkLoginLogOut.bind(this)
    }


    checkLoginLogOut() {
        const { history, clearAuthReducer, authReducer } = this.props
        if (authReducer) {
            localStorage.setItem("CART-SHOPPING", null);
            localStorage.setItem("TOKENLOCAL", null);
            localStorage.setItem("USERLOCAL", null);
            clearAuthReducer();
            history.push('/')
            console.log("Sign in")
        } else {
            history.push("/login");
            console.log("Sign up")
        }
    }

    openModal() {
        this.props.history.push('/shopping_cart');
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    render() {
        const { classes, VapeProducts, authReducer, quantityProduct } = this.props
        const User = localStorage.getItem("USERLOCAL")
        const shoppingCart =  JSON.parse(localStorage.getItem("CART-SHOPPING"))
        console.log(quantityProduct);
        console.log(authReducer)

        // console.log(VapeProducts)
        return (

            <div className={classes.filter}>
                <Cell col={7}>
                    <div className={classes.filterProduct}>
                        <div className={classes.home}>
                            <Link to='/' style={{ fontSize: "30px", fontWeight: "600" }}>SHOPVAPE</ Link>
                        </div>
                        <div className={classes.link}>
                            <button className={classes.dropbtn}>Sản phẩm</button>
                            <div className={classes.dropdownContent}>
                                <Link to={`/caterory/vape`}>Vape</ Link>
                                <Link to={`/caterory/tinhdau`}>Tinh dầu Vape</Link>
                                <Link to={`/caterory/pods`}>Vape pod system</Link>
                                <Link to={`/caterory/tankVape`}>Tank Vape</Link>
                                <Link to={`/caterory/phuKien`}>Phụ kiện</Link>


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
                        <div className={classes.FAQ} >
                            <Link className={classes.dropbtn} to="/faq">FAQ</Link>
                        </div>
                    </div>
                </Cell>

                <Cell col={5}>
                    <div className={classes.signUp}>
                        <SearchField />
                        <div className={classes.login_cart}>
                            <div className={classes.login} >
                                <button className={classes.category} onClick={this.checkLoginLogOut}>{_.isEmpty(authReducer) ? 'Đăng Nhập' : 'Đăng Xuất'}</button>
                            </div>
                            <div className={classes.shoppingCart}>
                                <a className={classes.cart} to='/shopping_cart' onClick={this.openModal} ><i className={classNames("fas", "fa-shopping-cart", classes.icon, classes.fas)}></i></a>
                                {
                                    shoppingCart ? <div style={{position: "absolute",right: "5%",top: "20%",width: "20px",height:"20px",backgroundColor: "black",color: "white",textAlign: "center",borderRadius: "50%"}}>
                                        { 
                                         shoppingCart.length 
                                        }</div> : ""
                                }
                                
                            </div>
                            
                            <span style={{position: "absolute", top: "30%" }}>
                                {
                                    User === "null" ? " " : User 
                                }
                            </span>
                        </div>


                    </div>
                </Cell>


            </div>

        )
    }
}

const Store = state => state
const actions = {
    clearAuthReducer,
}

export default withStyles(styles)(withRouter(connect(Store, actions)(LinkInfo)))