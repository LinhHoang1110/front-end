import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Body from "../component/Body";
import VapeImage from "../component/VapeImage";
import { actAddToCart, actFetchProducts } from "../actions/vapeActions"
import callApi from "../utils/ApiCaller";
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
    }

    //Get all images
    componentDidMount() {
        this.props.actFetchProducts()
    }


    render() {
        const { classes, VapeProducts } = this.props;
        // const { VapeProducts } = this.props
        if(VapeProducts.length === 0) {
            // console.log('hiiiii')
            return <ReactLoading style={{ margin:"300px 750px",width: "100px", height: "100px"}}  color="#000000" /> 
        }
        // console.log(VapeProducts)


        // let { VapeProducts } = this.state
        // console.log(VapeProducts
        return (
            <Body>
                {this.showProducts(VapeProducts)}
            </Body>
        )
    }

    showProducts(VapeProducts) {
        let result = null;
        // let { onAddToCart } = this.props
        if (VapeProducts.length > 0) {
            result = VapeProducts.map((product, index) => {
                // console.log(product)
                return <VapeImage {...this.props} key={index} product={product} />
            })
        }
        return result
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