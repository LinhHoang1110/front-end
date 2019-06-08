import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withStyles } from '@material-ui/core/styles'
import { actSearchProductKey } from "../../actions/vapeActions"
import { connect } from "react-redux";
import classNames from "classnames";
import ReactLoading from "react-loading";



const styles = () => {
    return {
        form: {
            display: "flex",
            justifyContent: "center",
            alignItem : "center",
            opacity: "0.5",
            position: "absolute",
            top: "12%",
            right: "30%",
            transition: "all 0.8s",
            width: "46px",
            height: "46px",
            background: "white",
            boxSizing: "border-box",
            borderRadius: "25px",
            border: "2px solid black",
            padding: "4px",
            "&:hover": {
                width: "200px",
                cursor: "pointer"
            },
            "&:hover input": {
                display: "block",
            },
            "&:hover .fa": {
                
                color: "black"
            }
        },
        search: {
            // position: "absolute",
            // top: "-50",
            // right: "0",
            width: "60%",
            height: "35px",
            lineHeight: "30px",
            outline: "0",
            border: "0",
            display: "none",
            fontSize: "1em",
            borderRadius: "20px",
            padding: "0 20px",
        },
        fa: {

            padding: "10px",
            width: "38.5px",
            height: "37.5px",
            position: "absolute",
            top: "-10",
            right: "0",
            borderRadius: "50%",
            color: "black",
            textAlign: "center",
            fontSize: "1.2em",
            transition: "all 1s"
        },
    }
}

class SearchField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: ''
        }
    }
    
    onSearchChanged = text => this.setState({searchString: text})
    handleTextChange = event => {
        const { VapeProducts } = this.props;
        const { searchString } = this.state
        this.onSearchChanged(event.target.value)
        this.props.actSearchProductKey(VapeProducts, event.target.value)
    }

    render() {
        const { classes, VapeProducts } = this.props;
        console.log(VapeProducts)
        const { searchString } = this.state
        console.log(searchString)
        // const { VapeProducts } = this.props
        if (!VapeProducts) {
            return <ReactLoading style={{ margin:"300px 750px",width: "100px", height: "100px"}}  color="#000000" />
        }

        // VapeProducts.filter(
        //     img => 
        //         img.category.includes(this.state.searchString) || 
        //         img.name.includes(this.state.searchString)
        // )

        // console.log(searchString)

        return (
            <form className={classNames(classes.form, "col-3")}>
                <input className={classes.search} type="text" placeholder="Search" onChange={this.handleTextChange} />
                {/* <button onClick={() => } >Search</button> */}
                <i  className={classNames("fa", "fa-search", classes.icon, classes.fa, )}></i>
            </form>

        )
    }

}

const Store = (state) => state;
const action = {
    actSearchProductKey
}


export default withStyles(styles)(connect(Store, action)(SearchField));
