import React from 'react';
import './App.css';
import SearchField from './component/navbar/searchField';
import HomeScreen from './views/HomeScreen';
// import Dropdown from './component/navbar/dropdown_menu';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import Login from "./views/Login";
import Register from './views/register';
import NavBar from './component/navbar/navbar';


function App() {
  return (
    <Router>
      <div style={{ height: "100% "}}>
        <NavBar />
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/shopping_cart' />
        </Switch>
      </div>
    </Router>
  );
}
library.add(faStroopwafel)

export default App;
