import React from 'react';
import './team_detail.css';
import Map from './images/map.png'; 
const App = () => {
  return (
    <div className="container" style={{ backgroundColor: 'black' }}>
      <div className="details">
      <div className='noice'>
        <div className="team-details">
          <h2>TEAM DETAILS:</h2>
          <p><strong>Email:</strong> teamvyadh33@gmail.com</p>
          <p><strong>Instagram:</strong> @teamvyadh</p>
          <p><strong>LinkedIn:</strong> Team Vyadh</p>
        </div>
        <div className="team-lead-details">
          <h2>TEAM LEAD DETAILS:</h2>
          <p><strong>Email:</strong></p>
          <p><strong>Phone:</strong></p>
        </div>
        </div>
        <div className="location">
          <h2>LOCATION:</h2>
          <img src={Map} alt="Map" className="map-image" />
          <p>VIT, Vellore Campus,</p>
          <p>Tiruvalam Rd,</p>
          <p>Katpadi, Vellore,</p>
          <p>Tamil Nadu 632014</p>
        </div>
      </div>
    </div>
  );
}

export default App;

