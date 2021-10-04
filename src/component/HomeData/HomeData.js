import React from 'react';
import { Card } from 'react-bootstrap';
import './HomeData.css'


const HomeData = (props) => {
    const{titel,discretion,img}=props.data
    
    return (
        <div className='col-6 p-2 '>
            <Card className='card' >
            <Card.Img  variant="top" className='card-image' src={img} />
             <Card.Body>
             <Card.Title>{titel}</Card.Title>
             <Card.Text>
            {discretion}
             </Card.Text>
                            
            </Card.Body>
         </Card>
        </div>
    );
};

export default HomeData;