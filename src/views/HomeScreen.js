import React, { Component, Fragment } from 'react';
import NavBar from '../component/navbar/navbar';
import { Grid, Cell } from 'react-mdl'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LinkInfo from '../component/navbar/link';
import Login from './Login';
import Body from '../component/Body';
import ImageBody from '../component/ImageBody';
import { connect } from "react-redux";
import { getVapeList, deteleVapeList, addVapelist } from "../actions/vapeActions";
import { addUserList } from "../actions/userActions";
import ProductsContainer from "../container/ProductsContainer";
import MessageContainer from '../container/MessageContainer';

class HomeScreen extends Component {
    // constructor(props) {
    //     super(props);
    // }

    // componentDidMount() {
    //     this.props.getVapeList();
    // }

    render() {
        // const { vapeReducer } = this.props;
        // if (!vapeReducer) {
        //     return "Loading..."
        // }
        // console.log(this.props);
        return (
            <Fragment>
                <ImageBody />
                <ProductsContainer {...this.props}/>
                {/* {
                    vapeReducer.slice(0, 50).map(el => (
                        <div>
                         <div>{el.userId}</div>
                         <div>{el.title}</div>
                         <button onClick={() => { this.props.deteleVapeList(el.id) }}>Delete</button>
                        </div>
                    ))
                }
                <div>
 
                    <button onClick={() => { this.props.addVapelist() }}>AddvapeList</button>
                    <button onClick={() => { this.props.addUserList() }}>AddUserList</button>
                </div> */}
                <MessageContainer/>
                {/* <CartContainer/> */}
            </Fragment>
        )
    }
}

// const Store = (state) => state;
// const action = {
//     getVapeList,
//     deteleVapeList,
//     addVapelist,
//     addUserList
// }

// export default connect(Store, action)(HomeScreen);
export default HomeScreen