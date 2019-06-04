import React from 'react';
import SearchField from './component/navbar/searchField';
import HomeScreen from './views/HomeScreen';
// import Dropdown from './component/navbar/dropdown_menu';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import { withStyles } from '@material-ui/core/styles';
import Login from "./views/Login";
import Register from './views/register';
import NavBar from './component/navbar/navbar';
import Footer from './component/Footer';
import DeataiImage from './views/DetailScreen';
import CartContainer from './container/CartContainer';
import FAQ from "./component/FAQ"
import CateroryVape from './views/Caterory/CateroryVape';
import CateroryTinhDauVape from "./views/Caterory/CateroryTinhDauVape"
import CateroryPod from "./views/Caterory/CateroryPod"
import CateroryTankVape from "./views/Caterory/CateroryTankVape"
import CateroryPhuKien from "./views/Caterory/CateroryPhuKien"
import BrandJoyetech from "./views/Brand/BrandJoyetech"
import BrandEleaf from "./views/Brand/BrandEleaf"
import BrandWidmec from "./views/Brand/BrandWidmec"
import BrandSmoant from "./views/Brand/BrandSmoant";
import _ from "lodash";
import { connect } from "react-redux"
import { checkUserTokenStorage } from "./actions/vapeActions"



const styles = () => ({
  wrapper: { 
    minHeight: "100vh",
    position: "relative",
    fontFamily : "Montserrat,sans-serif"
  },
  body: {
    paddingBottom: "20%",
    paddingTop: 50,
  }
})

class App extends React.Component {
  constructor(props) {
    super(props);
    const { checkUserTokenStorage } = props;
    const currentUserLocal = localStorage.getItem("USERLOCAL");
    const tokenLocal = localStorage.getItem("TOKENLOCAL");
    if (!_.isEmpty(currentUserLocal) && !_.isEmpty(tokenLocal)) {
      checkUserTokenStorage(currentUserLocal, tokenLocal);
    }
  }

  render() {
    const { classes } = this.props;
    
    return (
      <Router>
        <div style={{fontFamily: "Montserrat,sans-serif"}} className={classes.wrapper}>
          <NavBar />
          <div className={classes.body}>
            <Switch>
              <Route exact path='/' component={propsRoute => <HomeScreen {...propsRoute}/>} />
              <Route path='/login' component={propsRoute => <Login {...propsRoute}/>} />
              <Route path='/register' component={propsRoute => <Register {...propsRoute}/>} />
              <Route path='/shopping_cart' component={CartContainer}/>
              <Route path='/detal-products/:productid' component={propsRoute => <DeataiImage {...propsRoute}/>}/>
              <Route path='/faq' component={FAQ}/>
              <Route path={`/caterory/vape`} component={CateroryVape} />
              <Route path={'/caterory/tinhdau'} component={CateroryTinhDauVape}/>
              <Route path={'/caterory/pods'} component={CateroryPod}/>
              <Route path={'/caterory/tankVape'} component={CateroryTankVape}/>
              <Route path={'/caterory/phuKien'} component={CateroryPhuKien}/>
              <Route path={'/brand/Joyetech'} component={BrandJoyetech}/>
              <Route path={'/brand/Eleaf'} component={BrandEleaf}/>
              <Route path={'/brand/Widmec'} component={BrandWidmec}/>
              <Route path={'/brand/Smoant'} component={BrandSmoant}/>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}
library.add(faStroopwafel)

const Store = state => state
const action = {
  checkUserTokenStorage
}

export default withStyles(styles)(connect(Store, action)(App));
