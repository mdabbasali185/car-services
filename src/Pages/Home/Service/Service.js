import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const { name,img,description,price}=service
    return (
        <div className='service'>
          <h1>{name}</h1>  
          <h2><img src={img} alt="img" /></h2>
          <p>Price: {price}</p>
          <p><small>{description}</small></p>
          <button>Book:{name}</button>
        </div>
    );
};

export default Service;