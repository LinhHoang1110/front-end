import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Body from "../component/Body";
import VapeImage from "../component/VapeImage";
import { actAddToCart, actFetchProducts } from "../actions/vapeActions"
import callApi from "../utils/ApiCaller";

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
        this.state = {
            VapeProducts: []
        }
    }


    componentDidMount() {
        callApi("api/images", "GET", null).then(res => {
            this.setState({
                VapeProducts: res.data
            })

            // this.props.fetchAllProducts(res.data);
        })
    }

    render() {
        const { classes } = this.props;
        // const { VapeProducts } = this.props
        // if(!VapeProducts) {
        //     return <div>...Loading</div>
        // }

        let { VapeProducts } = this.state
        console.log(VapeProducts)

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
                console.log(product)
                return <VapeImage {...this.props} key={index} product={product} />
            })
        }
        return result
    }

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

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ProductsContainer));