import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { withStyles } from '@material-ui/core/styles'
import { actSearchProductId } from "../../actions/vapeActions"
import _ from "lodash";
import { connect } from "react-redux";
import CommentForm from "../CommentForm"
import ReactLoading from "react-loading";

const styles = () => {
    return {
        detailItem: {
            display: "flex",
            marginTop: "5%",
            // boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px"
        },
        addCartContainer: {
            display: "flex",
            paddingRight: "10px",
        },
        detailInfor: {
            margin: "0",
        },
        btnPlus: {
            margin: "0 10px 0 0",
            width: "50px",
            height: "50px",
            borderRadius: "50%"

        },
        number: {
            margin: "15px 14px 0 12px",
            textAlign: "center",
            fontSize: "24px"
        },
        btnMinus: {
            margin: "0 10px 0 0",
            width: "50px",
            height: "50px",
            borderRadius: "50%"
        },
        addItem: {
            margin: "10px 10px",
            color: "white",
            backgroundColor: "black",
            width: "141px",
            height: "30px",
            borderRadius: "30px"
        },
        detailImg: {
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignContent: "center"
        }
    }
}

class Detail_Vape extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            detailData: []
        }

    }

    componentDidMount() {
        const { VapeProducts, id } = this.props
        console.log('asfasgfasf')
        this.props.actSearchProductId(VapeProducts, id)
    }


    plus() {
        const { VapeProducts, id } = this.props
        let { quantity } = this.state
        this.setState({ quantity: this.state.quantity += 1 })
        // this.state.detailData.push(VapeProducts)
        // this.state.detailData.push(quantity)
    }

    minus() {
        if (this.state.quantity > 1) {
            this.setState({ quantity: this.state.quantity -= 1 })
        }
        const { VapeProducts, id } = this.props
        let { quantity } = this.state
        // this.state.detailData.push(VapeProducts)
        // this.state.detailData.push(quantity)
    }

    ThemVaoGio() {
        const { VapeProducts } = this.props;
        const { quantity } = this.state;
        const listFromLocal = _.uniqBy(JSON.parse(localStorage.getItem("CART-SHOPPING")), 'product.id');
        const indexOfVapeProducts = listFromLocal.findIndex(el => el.product.id === VapeProducts.id);
        if (indexOfVapeProducts === -1) {
            localStorage.setItem("CART-SHOPPING", JSON.stringify([...listFromLocal, { product: VapeProducts, quantity }]));
            this.props.history.push('/shopping_cart')
        } else {
            listFromLocal[indexOfVapeProducts].quantity += 1;
            localStorage.setItem("CART-SHOPPING", JSON.stringify(listFromLocal));
            this.props.history.push('/shopping_cart')
        }
        
    }

    showCommentUser(listComment) {
            const orderUsername = localStorage.getItem("USERLOCAL");
            let result = null;
            console.log(listComment)
            if (listComment) {
                result = listComment.map((comment) => {
                    return (
                        <ul>
                            <li>{orderUsername}</li>
                            <li>{comment.comment}</li>
                        </ul>
                    )
                })
            }
            return result
        }

    render() {
        const { classes, img, id, VapeProducts } = this.props;
        // const { detailData } = this.state
        // console.log(detailData)
        console.log(id)
        console.log(VapeProducts.review)
        // console.log(this.props)
        // if (_.isArray(VapeProducts)) {
        //     return  <ReactLoading style={{ margin:"300px 750px",width: "100px", height: "100px"}}  color="#000000" />

        //     console.log("hiiiiiii")
        // }
        

        return (
            <div className = "container">
                <div className={classes.detailItem}>
                    <Cell col={6}>

                        <div className={classes.detailImg}>
                            <img src={VapeProducts.imgUrl} />
                        </div>
                    </Cell>
                    <Cell style={{marginLeft: "100px", marginTop: "30px"}} col={6}>
                        <div className={classes.detailInfor}>
                            <p style = {{fontWeight: "bold", fontSize: "30px"}}>{VapeProducts.name}</p>
                            <p style={{color: "red", paddingLeft: "30px",fontSize: "20px"}}>{VapeProducts.price}$</p>
                            <ul>
                                <li>{VapeProducts.description}</li>
                            </ul>

                            {/* <p>Đánh giá khách hàng</p> */}

                            {/* {this.showCommentUser(VapeProducts.review)} */}
                        </div>
                        <div className={classes.addCartContainer}>
                            {
                                VapeProducts.quantity === 0 ? " " : <button className={classes.btnMinus} onClick={this.minus.bind(this)}>-</button>
                            }
                            
                            {
                                VapeProducts.quantity === 0 ? " " : <p className={classes.number}>{this.state.quantity}</p>
                            }

                            {
                                VapeProducts.quantity === 0 ? " " : <button className={classes.btnPlus} onClick={this.plus.bind(this)}>+</button>
                            }
                            
                            {
                                VapeProducts.quantity === 0 ? "Tiếc thay là hết hàng r :(" :  <button className={classes.addItem} onClick={() => this.ThemVaoGio()}>THÊM VÀO GIỎ</button>
                            }
                        </div>
                    </Cell>
                </div>

                <hr style={{ size: "30px" }}></hr>

                <div style={{marginTop: "50px"}}>
                    <strong>ĐÁNH GIÁ CỦA KHÁNH HÀNG</strong>
                    <CommentForm 
                    VapeProducts={VapeProducts}
                    id={id}
                    />
                </div>

            </div>
        )
    }
}


const Store = ({ VapeProducts }) => ({ VapeProducts });
const action = {
    actSearchProductId
}


export default withStyles(styles)(connect(Store, action)(Detail_Vape))