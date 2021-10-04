import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt,faPhoneAlt,faMailBulk} from '@fortawesome/free-solid-svg-icons'



const Footer = () => {
    const element = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const contact = <FontAwesomeIcon icon={faPhoneAlt} />
    const mail = <FontAwesomeIcon icon={faMailBulk} />
    

    return (
        <div>
            <div className='row footer-style mt-5'>
                <div className='col-4  mt-5 '>
                    <h1>Useful links</h1>
                    <div className='p'>
                    <p>About Us</p>
                    <p> Privacy Policy</p>
                    <p>Terms & condition</p>
                    <p>Student spotlight</p> 
                    </div>

                </div>

                <div className='col-4  mt-5'>
                    <h1>Learning</h1>
                    <div className='p'>
                    <p>Project Management</p>
                   <p> WordPress Development</p>
                    <p>Business Strategy</p>
                    <p>Software Development</p>
                    </div>

                </div>

           
                <div className='col-4  mt-5 mb-5'>
                    <h1>Contact Us</h1>   
                   <div className='p'>
                   <p>{element} PO Box 16122 Collins  Victoria Australia</p>
                   <p>{contact} +91 458 654 528</p>
                   <p>{mail} gostudy@gmail.com</p>
                   </div>

                </div>

            </div>
            
        </div>
    );
};

export default Footer;