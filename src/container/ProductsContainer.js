import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Body from "../component/Body";
import VapeImage from "../component/VapeImage";
import { actAddToCart, actFetchProducts } from "../actions/vapeActions"
import callApi from "../utils/ApiCaller";
import _ from "lodash";
import ReactLoading from "react-loading";

const styles = () => {
    return {
        containerVape: {
            display: "flex",
            flexWrap: "wrap",
            padding: "0 100px",
        }
    }
}

class ProductsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            VapeSeller: []
        })
    }

    //Get all images
    componentDidMount() {
        callApi("api/products/bestSeller", "GET", null).then(res => {
            this.setState({
                VapeSeller: res.data
            })
        });
        this.props.actFetchProducts();
    }

    showProducts(VapeProducts, VapeSeller) {
        let result = null;

        if (_.isArray(VapeProducts)) {
            console.log(VapeProducts)
            result = VapeProducts.map((product, index) => {
                // console.log(product)
                return <VapeImage {...this.props} key={index} product={product} />
            })
        } else {
            return <ReactLoading style={{ margin: "300px 750px", width: "100px", height: "100px" }} color="#000000" />
        }
        return result

    }

    showBestSeller(VapeSeller) {
        let result = null;

        if (VapeSeller) {
            return (
                result = VapeSeller.VapeSeller.map((product, index) => {
                    // console.log(product)
                    return <VapeImage {...this.props} key={index} product={product} />
                })
            )

        }
        return result

    }

    render() {
        const { classes, VapeProducts } = this.props;
        const VapeSeller = this.state;
        // console.log(VapeSeller.VapeSeller)

        // console.log(VapeProducts)


        // let { VapeProducts } = this.state
        // console.log(VapeProducts

        if (VapeSeller.VapeSeller.length === 0) {
            return <ReactLoading style={{ margin: "300px 750px", width: "100px", height: "100px" }} color="#000000" />
        }

        return (
            <div>
                <h3 style={{ textAlign: "center", fontFamily: "Montserrat, sans-serif", marginTop: "5%" }}>Sản phẩm bán chạy nhất của chúng tôi</h3>
                <div className={classes.containerVape}>
                    {this.showBestSeller(VapeSeller)}
                </div>

                <h3 style={{ textAlign: "center", fontFamily: "Montserrat, sans-serif", marginTop: "5%" }}>Sản phẩm của chúng tôi</h3>
                <div className={classes.containerVape}>
                    {this.showProducts(VapeProducts, VapeSeller)}
                </div>
            </div>
        )
    }

}


const Store = (state) => state;
const action = {
    actFetchProducts
}



const mapStateToProps = state => {
    return {
        VapeProducts: state.VapeProducts
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        // onAddToCart: (product) => {
        //     dispatch(actAddToCart(product, 1))
        // }
        fetchAllProducts: (VapeProducts) => {
            dispatch(actFetchProducts(VapeProducts))
        }
    }
}

export default withStyles(styles)(connect(Store, action)(ProductsContainer));