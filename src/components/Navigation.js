import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import Home from '../Home';
import AboutUs from '../AboutUs';
import ContactUs from '../ContactUs';
import caplogo from '../assets/newcaplogo.svg';

const Navigation = () => {
    return (
        <div className='sticky-nav' style={{overflowX: 'hidden'}}>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar expand="lg" sticky="top">
                                <Navbar.Brand href="#home">
                                    <img
                                        alt=""
                                        src={caplogo}
                                        width="130"
                                        className="d-inline-block align-top"
                                    />{' '}
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Nav className="justify-content-end" style={{ width: "100%", color: '#059eda', fontSize: 'larger' }}>
                                    Hi, Kevin!
                                </Nav>
                            </Navbar>
                            <br />
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route path="/about-us">
                                    <AboutUs />
                                </Route>
                                <Route path="/contact-us">
                                    <ContactUs />
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
        </div>
    )    
}

export default Navigation;