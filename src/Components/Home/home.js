import React from 'react';
import './home.css';
import Switch from '../../Images/switch.png'

function Home() {
  return (
    <div className="App">
      <div className="middle-section">
        <div className='home-image'>
        <img src={Switch} alt=''/>
      </div>

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
