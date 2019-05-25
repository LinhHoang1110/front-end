import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withStyles } from '@material-ui/core/styles'

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
        super(props)
    }
    render() {
        const { classes } = this.props 
        return (
            <form className='col-3'>
                <input className={classes.search} type="text" placeholder="Search" />
            </form>

        )
    }
}

export default withStyles(styles)(SearchField);
