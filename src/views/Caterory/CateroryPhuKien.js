import React, { Component } from 'react'
import { actSearchProductCaterory } from "../../actions/vapeActions"
import { withStyles } from "@material-ui/core/styles";
import Body from "../../component/Body";
import { connect } from "react-redux";
import VapeImage from "../../component/VapeImage"
import ReactLoading from "react-loading";
import _ from "lodash"

class CateroryPhuKien extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { VapeProducts } = this.props
        this.props.actSearchProductCaterory(VapeProducts, 'phuKien')
    }
    render() {
        let { VapeProducts } = this.props;

        if (_.isObject(VapeProducts)) {
            if (_.isArray(VapeProducts.message)) {
                if (VapeProducts.message.length === 0) {
                    console.log("haahahah")
                    return <div>Úi ko có sản phẩm này r :( </div>
                }
            }
        }

        console.log(VapeProducts)

        return (
            <Body>
                {this.showProducts(VapeProducts.message)}
            </Body>
        )
    }


    showProducts(VapeProducts) {
        let result = null;
        if (_.isArray(VapeProducts)) {
            if (VapeProducts.length > 0) {
                console.log('asdadsasd')
                result = VapeProducts.map((product, index) => {
                    console.log(product)
                    return <VapeImage {...this.props} key={index} product={product} />
                })
            }
            return result
        }
    }
}

const Store = (state) => state;
const action = {
    actSearchProductCaterory
}

export default (connect(Store, action)(CateroryPhuKien));
