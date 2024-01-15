import React, { useState } from 'react';
import PercentageBar from './Components/PercentageBar.js';
import './HomePage.css';

const HomePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [manualTesting, setManualTesting] = useState(50);
  const [automationTesting, setAutomationTesting] = useState(50);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({ name, email });
  };

  const handleSliderChange = (e) => {
    setManualTesting(e.target.value);
    setAutomationTesting(100 - e.target.value);
  };


  return (
    <div className="container">
      <main className="main-content">
        <form onSubmit={handleSubmit} className="form">
          <div className="logo-container" style={{ textAlign: 'center' }}>
            <img src="" className="logo" /> {/* Replace with your logo path */}
            <h2>QA Assessment</h2>
          </div>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <PercentageBar />
          <button type="submit">Get Started</button>
        </form>
      </main>
      {/* <footer className="footer">
            <span>Footer Details</span>
          </footer> */}
    </div>
  );
};

export default HomePage;
