import React from 'react';
import './home.css';
import Switch from '../../Images/switch.png'

function Home() {
  return (
    <div className="App">
      <div className='home-image'>
      <img src={Switch} alt=''/>
      </div>

      <div className="text">
      Coming soon
      </div>
    </div>
    
  );
}

export default Home;
