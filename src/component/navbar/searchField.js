import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withStyles } from '@material-ui/core/styles'
import { actSearchProductKey } from "../../actions/vapeActions"
import { connect } from "react-redux";
import classNames from "classnames";


const styles = () => {
    return {
        form: {
            opacity: "0.6",
            position: "absolute",
            top: "30%",
            right: 0,
            transition: "all 1s",
            width: "50px",
            height: "50px",
            background: "white",
            boxSizing: "border-box",
            borderRadius: "25px",
            border: "2px solid black",
            padding: "5px",
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
            position: "absolute",
            top: "-50",
            left: "0",
            width: "80%",
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
            boxSizing: "border-box",
            padding: "10px",
            width: "42.5px",
            height: "42.5px",
            position: "absolute",
            top: "-10",
            right: "0",
            borderRadius: "50 %",
            color: "#07051a",
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
        this.props.actSearchProductKey(VapeProducts, event.target.value )
    }

    render() {
        const { classes, VapeProducts } = this.props;
        const { searchString } = this.state
        // const { VapeProducts } = this.props
        if (!VapeProducts) {
            return <div>...Loading</div>
        }

        // VapeProducts.filter(
        //     img => 
        //         img.category.includes(this.state.searchString) || 
        //         img.name.includes(this.state.searchString)
        // )

        console.log(searchString)

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
