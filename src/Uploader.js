import React from 'react';
import Fixedsidenav from './components/Fixedsidenav';
import Navigation from './components/Navigation';
import Doclist from './components/Doclist'
const Uploader = () => {
    return (
        <>
            <Navigation />
            <Fixedsidenav />
            <Doclist />
        </>
    )
}

export default Uploader;