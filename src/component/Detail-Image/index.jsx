import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { withStyles } from '@material-ui/core/styles'
import CommentBox from '../../views/UserComment';
import { actSearchProductId } from "../../actions/vapeActions"
import _ from "lodash";
import { connect } from "react-redux";
import CommentForm from "../CommentForm"

const styles = () => {
    return {
        detailItem: {
            display: "flex"
        },
        addCartContainer: {
            display: "flex",
            paddingRight: "10px",
        },
        detailInfor: {
            margin: "0"
        },
        btnPlus: {
            margin: "0 10px 0 0",
            width: "39.11px",
            height: "54px"
        },
        number: {
            margin: "15px 10px 0 12px",
            textAlign: "center",
            fontSize: "24px"
        },
        btnMinus: {
            margin: "0 10px",
            width: "39.11px",
        },
        addItem: {
            margin: "0 10px",
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

    render() {
        const { classes, img, id, VapeProducts } = this.props;
        // const { detailData } = this.state
        // console.log(detailData)
        console.log(id)
        console.log(VapeProducts)
        console.log(this.props)
        if (_.isArray(VapeProducts)) {
            return <div>Loading...</div>
        }
        

        return (
            <div>
                <div className={classes.detailItem}>
                    <Cell col={6}>

                        <div className={classes.detailImg}>
                            <img src={VapeProducts.imgUrl} />
                        </div>
                    </Cell>
                    <Cell col={6}>
                        <div className='detail-infor'>
                            <p>{VapeProducts.name}</p>
                            <p>{VapeProducts.price}$</p>
                            <ul>
                                <li>{VapeProducts.description}</li>

                            </ul>
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

                <div>
                    <strong>ĐÁNH GIÁ CỦA KHÁNH HÀNG</strong>
                    <CommentForm 
                    VapeProducts={VapeProducts}
                    id={id}
                    />
                </div>

                {/* <CommentBox /> */}
            </div>
        )
    }
}


const Store = (state) => state;
const action = {
    actSearchProductId
}


export default withStyles(styles)(connect(Store, action)(Detail_Vape))