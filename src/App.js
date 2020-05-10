import React from 'react';
import MainPage from './MainPage/MainPage';
import 'rbx/index.css';
//import './HeaderBar.css';
import { Navbar, Container } from 'rbx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import './App.css';
import HeaderBar from './HeaderBar/HeaderBar'

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <HeaderBar />
        <Switch>
          <Route path='/projects'>
          </Route>
          <Route path='/'>
            <MainPage />
          </Route>
        </Switch>
      </Router>
    </ React.Fragment>
  )
}





export default App;
