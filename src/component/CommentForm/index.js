import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import DeataiImage from '../../views/DetailScreen';
import { withStyles } from '@material-ui/core/styles';
import * as Config from "../../constants/Config"
import callApi from '../../utils/ApiCaller';
import { connect } from "react-redux"
import { actCommentUser } from "../../actions/userActions"
import Modal from 'react-modal';

const styles = () => {
    return {
        containerForm: {

        }
    }
}


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentString: '',
            modalIsOpen: false,
            commentUserList: []
        }
        this.handleChanged = this.handleChanged.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    // componentDidMount() {
    //     const { VapeProducts, id , authReducer } = this.props;
    //     const { commentString } = this.state.commentString
    //     this.props.actCommentUser(VapeProducts, commentString )
    // }

    handleChanged(e) {
        // console.log(e);
        this.setState({ commentString: e.target.value })
    }

    handleSubmit(e) {
        const { VapeProducts, authReducer } = this.props
        e.preventDefault();
        // console.log(this.state.commentString)
        // console.log(authReducer)

        callApi('api/products/review', "POST", {
            idProduct: VapeProducts._id,
            username: authReducer.userLocal,
            idUser: authReducer._id,
            comment: this.state.commentString
        }).then(res => {
            console.log(res)
            this.setState({
                commentUserList: res.data.message.review
            })
            console.log(this.state.commentUserList)
            this.props.actCommentUser(this.state.commentUserList)
        })

        this.props.actCommentUser(authReducer, this.state.commentString)

        const Token = localStorage.getItem("USER");
        // console.log(Token)
        if (!Token) {
            this.setState({ modalIsOpen: true });
            console.log("hi")
        }

    }

    // showCommentUser(listComment) {
    //     const orderUsername = localStorage.getItem("ORDER-USERNAME");
    //     let result = null;
    //     if (listComment.length > 0) {
    //         result = listComment.map((comment) => {
    //             return (
    //                 <div>
    //                     <p>{orderUsername}</p>
    //                     <p>{comment.comment}</p>
    //                 </div>
    //             )
    //         })
    //     }
    //     return result
    // }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    renderForm() {
        const { authReducer, commentUser, VapeProducts } = this.props
        // const { commentUser } = this.this.state
        console.log(authReducer)
        console.log(commentUser)
        console.log(VapeProducts)

        return (
            <div>
                {/* { this.showCommentUser()} */}
                <form style={{ marginTop: "20px" }}>
                    <div style={{ width: "50%", }}>
                        <p style={{}}>Tên</p>
                        <input style={{ marginBottom: "30px", width: "100%" }} type="text" value={authReducer.userLocal} />
                    </div>
                    <div>
                        <p>Bình luận</p>
                        <textarea style={{ width: "50%" }} type="text" onChange={this.handleChanged} />
                    </div>

                    <button style={{ backgroundColor: "black", color: "white", borderRadius: "99px", width: "141px", height: "30px", marginTop: "15px" }} type="submit" onClick={this.handleSubmit}>Gửi</button>
                    <Modal
                        onRequestClose={() => this.setState({ modalIsOpen: false })}
                        shouldCloseOnOverlayClick
                        isOpen={this.state.modalIsOpen}
                        style={customStyles}
                    >
                        <div>Bình luận thành công</div>
                        <button onClick={() => this.setState({ modalIsOpen: false })}>OK</button>
                    </Modal>
                </form>
            </div>

        )
    }

    renderButton() {
        return <h3> Bạn cần phải đăng nhập. Làm hơi sâu chứ ? :3 </h3>
    }

    render() {
        const { authReducer, VapeProducts, id, classes } = this.props
        // console.log(VapeProducts)
        // console.log(authReducer)
        // console.log(this.state.commentString)
        return (
            <div className={classes.containerForm} >
                {!authReducer ? this.renderButton() : this.renderForm()}
            </div>
        )
    }

}

const Store = state => state
const action = {
    actCommentUser
}

export default withStyles(styles)(connect(Store, action)(CommentForm))