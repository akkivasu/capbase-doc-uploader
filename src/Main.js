import React from 'react';
import { ProgressBar, Button, Container, Row, Col } from 'react-bootstrap';
import Navigation from './components/Navigation'
import TypingText from './components/TypingText';
import docsimg from './assets/right-image.png';
import Footer from './components/Footer';
import { NavLink} from 'react-router-dom';
import Navset from './Navset';
const Main = () => {
    return (
        <div>
        <Navigation />
        <div className = 'sliding-image'>
            <img src = {docsimg} style = {{width:'70%'}}/>
        </div>
        <TypingText />
        <div className = 'appearing-pb' style={{fontFamily: "'Open Sans Condensed', sans-serif"}}>
            <br/><br/>
            <h4>Document Upload Status</h4>
            <span style = {{color: '#059eda', fontSize: '5em'}}>42% <span style={{fontSize: 'smaller', color: 'black'}}> completed!</span></span>
            <br/><br/>
            <div>
                <NavLink to='/uploader' className='btn btn-primary'> Continue Uploading </NavLink> {'  '}
                <div className='btn btn-outline-primary'> Dashboard </div>
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default Main;