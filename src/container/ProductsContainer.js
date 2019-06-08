import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Body from "../component/Body";
import VapeImage from "../component/VapeImage";
import { actAddToCart, actFetchProducts } from "../actions/vapeActions"
import callApi from "../utils/ApiCaller";
import _ from "lodash";
import queryString from 'query-string';
import ReactLoading from "react-loading";
import { Link } from 'react-router-dom';


const styles = () => {
    return {
        containerVape: {
            display: "flex",
            flexWrap: "wrap",
            padding: "0 100px",
        },
        btnChangePageActive: {
            backgroundColor: 'blue',
        },
        btnChangePage: {
            backgroundColor: ""
        }
    }
}

class ProductsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            VapeSeller: [],
            pageNumber: 1,
        })
    }

    //Get all images
    componentDidMount() {
        // const { history:  { location: { search } } } = this.props;
        
        const values = queryString.parse(this.props.location.search);
        // console.log(this.props.location)
        const { page } = values;
        console.log(page);
        callApi("api/products/bestSeller", "GET", null).then(res => {
            console.log(res)
            this.setState({
                VapeSeller: res.data
            })
        });

        this.props.actFetchProducts(page ? parseInt(page) - 1 : '');
    }

    showProducts(VapeProducts) {
        let result = null;
        console.log(VapeProducts)

        if (_.isArray(VapeProducts.docs)) {
            result = VapeProducts.docs.map((product, index) => {
                // console.log(product)
                return <VapeImage {...this.props} key={index} product={product} />
            })
        } 
        else if(_.isArray(VapeProducts.message)) {
            result = VapeProducts.message.map((product, index) => {
                // console.log(product)
                return <VapeImage {...this.props} key={index} product={product} />
            })
        }
        else {
            return <ReactLoading style={{ margin: "300px 750px", width: "100px", height: "100px" }} color="#000000" />
        }
        return result
    }

    componentDidUpdate(prevProps) {
        if (!_.isEqual(this.props.location.search, prevProps.location.search)) {
            const values = queryString.parse(this.props.location.search);
            const { page } = values;
            const pageNumber = parseInt(page);
            this.setState({
                pageNumber
            });
            this.props.actFetchProducts(pageNumber);
        }
    }

    showBestSeller(VapeSeller) {
        let result = null;
        console.log(VapeSeller)

        if (_.isArray(VapeSeller)) {
            return (
                result = VapeSeller.map((product, index) => {
                    console.log(index)
                    return <VapeImage {...this.props} key={index} product={product} />
                })
            )

        }
        return result

    }

    changePage(pageNumber) {
        const { history } = this.props;
        history.push(`?page=${pageNumber + 1}`);
    }

    // showPage(totalProduct) {
    //     const listPageNumber = (parseInt(totalProduct) % 8) + 1;
    //     const listPage = Array.from(" ".repeat(listPageNumber))
    //     console.log(listPage)
    //     let result = null
    //     if(listPage.length > 0) {
    //         return (
    //             result = listPage.map(index => {
    //                 return <button onClick={() => this.changePage(index + 1)}>page {index + 1}</button>
    //             })
    //         )
    //     }
    //     return result

    //     // for ( let i = 0; i < listPageNumber; i ++) {

    //     //         // <button onClick={() => this.changePage(index + 1)}>page {index + 1}</button>

    //     // }
    // }

    showPage(totalProduct, currentPage) {
        const { classes } = this.props;
        const totalPage = Math.ceil(Number(totalProduct) / 8);
        const pages = _.range(1, totalPage + 1);
        return pages.map( page =>
            <Link to={`/?page=${page}`}>
                <button className={`${classes.btnChangePage} ${currentPage === page ? classes.btnChangePageActive : ''}`}>
                    {page}
                </button>
            </Link>
        )
        // let listEmpty = [];
        // for (let i = 0; i < totalPage; i++) {
        //     console.log(listEmpty)
        //     listEmpty = [...listEmpty, <button  onClick={() => this.changePage(i)}>page {i + 1}</button>]
        // }
        // return listEmpty;
    }



    render() {
        const { classes, VapeProducts } = this.props;
        const { VapeSeller, pageNumber } = this.state;
        // console.log(VapeSeller.VapeSeller)
        console.log('pageNumber');
        console.log(pageNumber)


        // let { VapeProducts } = this.state
        console.log(VapeProducts)

        if (VapeSeller.length === 0) {
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
                    {this.showProducts(VapeProducts)}
                </div>
                <div>
                    {this.showPage(VapeProducts.total, pageNumber)}
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