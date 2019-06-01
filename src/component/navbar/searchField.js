import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withStyles } from '@material-ui/core/styles'
import { actSearchProductKey } from "../../actions/vapeActions"
import { connect } from "react-redux"


const styles = () => {
    return {
        search: {
            position: "absolute",
            width: "454.32px",
            height: "32.13px",
            top: "0",
            borderRadius: "9999px",
            paddingLeft: "10px",
            marginTop: "30px",
            fontFamily: "Consolas"
        }
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
        const { classes, VapeProducts } = this.props ;
        const { searchString } = this.state
        // const { VapeProducts } = this.props
        if(!VapeProducts) {
            return <div>...Loading</div>
        }

        // VapeProducts.filter(
        //     img => 
        //         img.category.includes(this.state.searchString) || 
        //         img.name.includes(this.state.searchString)
        // )

        console.log(searchString)
        
        return (
            <form className='col-3'>
                <input className={classes.search} type="text" placeholder="Search" onChange={this.handleTextChange}/>
                {/* <button onClick={() => } >Search</button> */}
            </form>

        )
    }
    
}

const Store = (state) => state;
const action = {
    actSearchProductKey
}


export default withStyles(styles)(connect(Store, action)(SearchField));
