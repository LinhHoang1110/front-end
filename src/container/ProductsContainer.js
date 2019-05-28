import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Body from "../component/Body";
import VapeImage from "../component/VapeImage";
import { actAddToCart } from "../actions/vapeActions"


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
    render() {
        const { classes } = this.props;
        const { VapeProducts } = this.props

        return (
           <Body>
               { this.showProducts(VapeProducts) }
           </Body>
        )
    }

    showProducts(VapeProducts) {
        let result = null;
        let { onAddToCart } = this.props
        if(VapeProducts.length > 0) {
            result = VapeProducts.map((product, index ) => {
                return <VapeImage key={index} product={product} onAddToCart={ onAddToCart }/>
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

const mapDispatchToProps = (dispatch,props) => {
    return {
        onAddToCart: (product) => { 
            dispatch(actAddToCart(product, 1))
        }
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ProductsContainer));