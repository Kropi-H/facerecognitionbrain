import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css';
import brain from './brain.png'

const Logo = () => {
    return (
        <Tilt className="mh5 Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner pa3">
                <img style={{paddingTop:'5px', width:'90%'}} alt='logo' src={brain}/>
            </div>
        </Tilt>
    )
}

export default Logo;