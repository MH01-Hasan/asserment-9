import React from 'react';
import './Error.css'
import error from '../../picture/error.png';
import { NavLink } from 'react-router-dom';


const Error = () => {
    const style={
        textDecoration: 'none',
        padding:'10px 24px',
        color: '#1E2845',
        marginLeft:'27px',
        backgroundColor: '#1DD0D9',
        borderRadius: '10px',
        fontSize: '24px',
        fontWeight: '400',
        fontFamily: 'none',
        marginTop:'10px',
        
        

    };
    return (
        <div className='container mt-5 '>
            <div className='error-style'>
                <img src={error} alt="" />
                
            </div>

            <div className='text-center'>
            <h2 className='opps'>Oops,Page Not Found</h2>
            <NavLink to ='/home'style={style} >Go to Home</NavLink>
            
            
            </div>
        </div>
    );
};

export default Error;