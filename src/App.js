import React from 'react';
import SearchField from './component/navbar/searchField';
import HomeScreen from './views/HomeScreen';
// import Dropdown from './component/navbar/dropdown_menu';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import { withStyles } from '@material-ui/core/styles';
import Login from "./views/Login";
import Register from './views/register';
import NavBar from './component/navbar/navbar';
import Footer from './component/Footer';
import DeataiImage from './views/DetailScreen';
import CartContainer from './container/CartContainer';
import CateroryVape from './views/Caterory/CateroryVape';
import CateroryTinhDauVape from "./views/Caterory/CateroryTinhDauVape"
import CateroryPod from "./views/Caterory/CateroryPod"
import CateroryTankVape from "./views/Caterory/CateroryTankVape"
import CateroryPhuKien from "./views/Caterory/CateroryPhuKien"
import BrandJoyetech from "./views/Brand/BrandJoyetech"
import BrandEleaf from "./views/Brand/BrandEleaf"
import BrandWidmec from "./views/Brand/BrandWidmec"
import BrandSmoant from "./views/Brand/BrandSmoant"

// const ProtectedRoute = (props) => {
//   const Token = localStorage.get("USER");
//   if (!Token) {
//     return <Redirect to="/login" />
//   }
//   return <Route {...props} />
// }


const styles = () => ({
  wrapper: { 
    minHeight: "100vh",
    position: "relative"
  },
  body: {
    paddingBottom: 400
  }
})

function App(props) {
  const { classes } = props;
  return (
    <Router>
      <div className={classes.wrapper}>
        <NavBar />
        <div className={classes.body}>
          <Switch>
            <Route exact path='/' component={propsRoute => <HomeScreen {...propsRoute}/>} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/shopping_cart' component={CartContainer}/>
            <Route path='/detal-products/:productid' component={propsRoute => <DeataiImage {...propsRoute}/>}/>
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
library.add(faStroopwafel)

export default withStyles(styles)(App);
