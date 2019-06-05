import React, { Component } from 'react'
import { actSearchProductBrand }from "../../actions/vapeActions"
import { withStyles } from "@material-ui/core/styles";
import Body from "../../component/Body";
import { connect } from "react-redux";
import VapeImage from "../../component/VapeImage"
import ReactLoading from "react-loading";


class BrandJoyetech extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { VapeProducts } = this.props
        this.props.actSearchProductBrand(VapeProducts, 'joyetech')
    }
    render() {
        let { VapeProducts } = this.props;

        if (VapeProducts.length === 0) {
            return <div>Úi ko có sản phẩm này r :( </div>
        }
        
        console.log(this.showProducts(VapeProducts))
        
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
                return <VapeImage {...this.props} key={index} product={product} />
            })
            console.log(result)
        }
        return result
    }
}

const Store = (state) => state;
const action = {
    actSearchProductBrand
}

export default (connect(Store, action)(BrandJoyetech));
