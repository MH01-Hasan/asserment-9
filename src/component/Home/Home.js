import React, { useEffect, useState } from 'react';
import './Home.css'
import HomeData from '../HomeData/HomeData';
import Header from './../Header/Header';
import Footer from '../Footer/Footer';




const Home = () => {
    const [homedata,setHomedata]=useState([])
    useEffect(()=>{
        fetch('./homedata.json')
        .then(res => res.json())
        .then(data => setHomedata(data))
    },[])

       
    return (
        <div>
            <Header></Header>

            
            <div className='row m-5'>
                        {
                            homedata.map(home => <HomeData
                            data={home}
                            key={home.id}>
                            </HomeData> )
                    
                        }

                        
            </div>
            <Footer></Footer>
    </div> 
        
    );
};

export default Home;