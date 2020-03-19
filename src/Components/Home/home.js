import React from 'react';
import './home.css';
import Photo from '../../Images/photo.png'

function Home() {
  return (
    <div className="Home">

      <div className="middle-section">
        <img src={Photo} alt=''/>
      </div>
      
      <div className='product-section'>
      <p>Products</p>

      <div className='home-products'>
        <div className='home-product'/>
        <div className='home-product'/>
        <div className='home-product'/>
        <div className='home-product'/>

      </div>
      </div>
      

      <div className="text">
        Coming soon
      </div>
    </div>
    
  );
}

export default Home;
