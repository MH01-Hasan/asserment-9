import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Header.css'
const Header = () => {

        const style={
            textDecoration: 'none',
            padding:'10px 24px',
            color: '#1E2845',
            marginLeft:'27px',
            backgroundColor: '#1DD0D9',
            borderRadius: '10px',
            fontSize: '24px',
            fontWeight: '400',
            fontFamily: 'none'

        };


    return (
        <div className=' bgsecondary p-5'>
            <div className='row container'>
                <div className='col-4'> 
                <h1 className='zoomy'>ZooMy Education</h1>
                

                </div>
                <div className='col-8 d-flex justify-content-end'>
                    <NavLink to ='/home'style={style}>Home</NavLink>
                    <NavLink to ='/service'style={style}>Service</NavLink>
                    <NavLink to ='/about'style={style}>About</NavLink>
                    <NavLink to ='/contact'style={style}>Contact</NavLink>
                </div>

            </div>
            
        </div>
    );
};

export default Header;