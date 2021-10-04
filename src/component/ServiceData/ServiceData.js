import React from 'react';
import './ServiceData.css'


const ServiceData = (props) => {
    const {img,titel}=props.service
   
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h4 className='icon'>  {props.icon}     {titel}</h4>
            
        </div>
    );
};

export default ServiceData;