
import { useEffect, useState } from 'react';
import ServiceData from '../ServiceData/ServiceData';
import './Service.css'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Service = () => {
    
    const element = <FontAwesomeIcon icon={faArrowRight} />

    const[service,setService]=useState([])
        useEffect(()=>{
            fetch('./servicedata.json')
            .then(res => res.json())
            .then(data => setService(data))
        },[])



    return (<div>
         <Header></Header>
        <div className='service-contant'>
            {
            service.map(data =><ServiceData service={data}
            icon={element}></ServiceData>) 
            }
            
        </div>
        <Footer></Footer>
   
    </div>
     );
       
};

export default Service;