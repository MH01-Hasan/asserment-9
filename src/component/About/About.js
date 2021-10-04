import React from 'react';
import './About.css'
import logo from '../../picture/bg.jpg'
import Header from './../Header/Header';
import Footer from '../Footer/Footer';

const About = () => {
    return (
        <div>
           <Header></Header>
            <div className='container mt-5'>
            <h1 className='name'>We create artworks, concepts, interiors & brand design</h1>
            <img src={logo} alt="" />

            <div className='content mt-5'>
            <h2>Our Services</h2>
            <h5>It was a big, round room with a high arched roof, and the walls and ceiling and floor were this is a covered with large emeralds set closely together.</h5>
            <p>In a word, the whale was seized and sold, and his Grace the Duke of Wellington received the money. Thinking that viewed in some particular lights, the case might by a bare possibility in some small degree be deemed, under the circumstances,  name rather hard one, an honest clergyman of the town addressed a note to his Grace and almighty thing happen in life.</p>
            </div>
            <div>
                <h2>Design & Craft</h2>
                <p>Graphic Design</p>
               <p>Photography</p>
                <p>Interaction</p>
                <p>Design</p>
                
            </div>
        </div>
       <Footer></Footer>
        </div>
    );
};

export default About;