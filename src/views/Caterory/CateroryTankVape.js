import React, { Component } from 'react'
import { actSearchProductCaterory }from "../../actions/vapeActions"
import { withStyles } from "@material-ui/core/styles";
import Body from "../../component/Body";
import { connect } from "react-redux";
import VapeImage from "../../component/VapeImage"

class CateroryTankVape extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { VapeProducts } = this.props
        this.props.actSearchProductCaterory(VapeProducts, 'tankVape')
    }
    render() {
        let { VapeProducts } = this.props;

        if(VapeProducts.length === 0) {
            console.log("hiiiiii")
            return <div>Loading....</div>
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

export default (connect(Store, action)(CateroryTankVape));
