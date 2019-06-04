import React, { Component } from 'react'
import { actSearchProductCaterory }from "../../actions/vapeActions"
import { withStyles } from "@material-ui/core/styles";
import Body from "../../component/Body";
import { connect } from "react-redux";
import VapeImage from "../../component/VapeImage"
import ReactLoading from "react-loading";


class CateroryVapePod extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { VapeProducts } = this.props
        this.props.actSearchProductCaterory(VapeProducts, 'pods')
    }
    render() {
        let { VapeProducts } = this.props;

        if(VapeProducts.length === 0) {
            console.log("hiiiiii")
            return <ReactLoading style={{ margin:"300px 750px",width: "100px", height: "100px"}}  color="#000000" />
        }

        console.log(VapeProducts)
        
        return (
            <Body>
                {this.showProducts(VapeProducts)}
            </Body>
        )
    }

    
    showProducts(VapeProducts) {
        let result = null;
        if (VapeProducts.length > 0) {
            result = VapeProducts.map((product, index) => {
                console.log(product)
                return <VapeImage {...this.props} key={index} product={product} />
            })
        }
        return result
    }
}

const Store = (state) => state;
const action = {
    actSearchProductCaterory
}

export default (connect(Store, action)(CateroryVapePod));
