import React from 'react';
import 'rbx/index.css';
import './HeaderBar.css';
import { Navbar, Container } from 'rbx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";


const HeaderBar = () => (
    <React.Fragment>
      <Navbar fixed='top' className='header' >
        <Navbar.Brand >
          <Navbar.Item className='title'>
            <NavLink to='/' className='wLink'>J Brain</NavLink>
          </Navbar.Item>
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Segment align='end'>
            <Navbar.Item className='tab'>
              <NavLink to='/' className='wLink'>About Me</NavLink>
            </Navbar.Item>
            <Navbar.Item className='tab'>
              <NavLink to='projects' className='wLink'>Projects</NavLink>
            </Navbar.Item>
          </Navbar.Segment>
        </Navbar.Menu>
      </Navbar>
      <Container className='spacing' />
    </React.Fragment>
  )

export default HeaderBar