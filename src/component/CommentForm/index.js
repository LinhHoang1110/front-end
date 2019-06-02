import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import DeataiImage from '../../views/DetailScreen';
import { withStyles } from '@material-ui/core/styles';
import * as Config from "../../constants/Config"
import callApi from '../../utils/ApiCaller';
import { connect } from "react-redux"
import { actSearchProductId } from "../../actions/vapeActions"

const styles = () => {
    return {
        containerForm: {

        }
}
}

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentString: ''
        }
        this.handleChanged = this.handleChanged.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const { VapeProducts, id } = this.props
        this.props.actSearchProductId(VapeProducts, id)
    }

    handleChanged(e) {
        console.log(e);
        this.setState({ commentString: e.target.value})
    }

    handleSubmit(e) {
        const { VapeProducts, authReducer } = this.props
        e.preventDefault();
        console.log(this.state.commentString)

        callApi('api/products/review', "POST", {
            idProduct: VapeProducts._id,
            username: authReducer.current.username,
            idUser: authReducer._id,
            comment: this.state.commentString
        }).then( res => {
            console.log(VapeProducts)
        })
    }

    renderForm() {
        const { authReducer } = this.props
        return (
            <form>
                <input type="text" value={authReducer.currentUser.username}/>
                <input type="text" onChange={this.handleChanged} />
                <button type="submit" onClick= {this.handleSubmit}>Comment</button>
            </form>

        )
    }

    renderButton() {
        return <h3> Bạn cần phải đăng nhập. Làm hơi sâu chứ ? :3 </h3>
    }

    render() {
        const { authReducer, VapeProducts, id, classes} = this.props
        console.log(VapeProducts)
        console.log(authReducer)
        console.log(this.state.commentString)
        return (
            <div className = {classes.containerForm} >
                <h3>Add a comment</h3>
                { !authReducer ? this.renderButton() : this.renderForm()}
            </div>
        )
    }

}

const Store = state => state
const action = {
    actSearchProductId
}

export default withStyles(styles)(connect(Store, action)(CommentForm))