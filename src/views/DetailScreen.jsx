import React, { Component } from 'react'
import Detail_Vape from '../component/Detail-Image';


class DeataiImage extends Component {
    constructor(props) {
        super(props)
    }

    // componentDidMount() {
    //     this.props.actFetchProducts()
    // }

    render() {
        return (
            <Detail_Vape {...this.props} id={this.props.match.params.productid}/>
        )
    }
}

export default DeataiImage