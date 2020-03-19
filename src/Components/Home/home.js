import React from 'react';
import './home.css';
import Photo from '../../Images/photo.png'
import Switch from '../../Images/switch.png'

function Home() {
  return (
    <div className="Home">

      <div className="middle-section">
        <img src={Photo} alt=''/>
      </div>
      
      <div className='product-section'>
      <h1>Products</h1>

      <div className='home-products'>
        <div className='home-product'/>
        <div className='home-product'/>
        <div className='home-product'/>
        <div className='home-product'/>

      </div>
      </div>
      

      <div className="text">
        <p>Coming Soon</p>
        {/* <img src={Switch} alt=''/> */}
      </div>
    </div>
    
  );
}

export default Home;
