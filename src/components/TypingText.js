import React from 'react';
import Typical from 'react-typical';

const TypingText = () => {
    return (
        <div style={{fontFamily: "'Open Sans Condensed', sans-serif", paddingLeft: '5%'}}>
        <Typical steps={['Welcome back', 1000, 'Welcome back, innovator.', 1000, 'Welcome back, entrepreneur.', 1000, 'Welcome back, founder.', 1000, 'Welcome back, Kevin.', 1000]}
        wrapper="h1" 
        loop={Infinity}/>
        </div>
    )
}

export default TypingText;
