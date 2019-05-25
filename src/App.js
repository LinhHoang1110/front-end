import React from 'react';
import SearchField from './component/navbar/searchField';
import HomeScreen from './views/HomeScreen';
// import Dropdown from './component/navbar/dropdown_menu';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import { withStyles } from '@material-ui/core/styles';
import Login from "./views/Login";
import Register from './views/register';
import NavBar from './component/navbar/navbar';
import Footer from './component/Footer';
import DeataiImage from './views/DetailScreen';

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
            <Route exact path='/' component={HomeScreen} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/shopping_cart' />
            <Route path='/detal-products' component={DeataiImage}/>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
library.add(faStroopwafel)

export default withStyles(styles)(App);
