import React, { useState } from 'react';
import PercentageBar from './Components/PercentageBar.js';
import './HomePage.css';
import InstructionsPage from './InstructionsPage.js';
import TestPage from './TestPage.js';
import logo from './logo.png'; // Update the path as necessary


const HomePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showInstructions, setShowInstructions] = useState(false);
  const [showTestPage, setShowTestPage] = useState(false); // New state for showing the test page

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowInstructions(true); // Change state to show instructions
  };

  const handleStartTest = () => {
    setShowTestPage(true); // Change state to show the test page
  };

  // If the test page state is true, render the TestPage component
  if (showTestPage) {
    return <TestPage />;
  }

  return (
    <div className="container">
      <main className="main-content">
        {/* Conditional rendering within the form based on the showInstructions state */}
        {!showInstructions ? (
          <form onSubmit={handleSubmit} className="form">
            <div className="logo-container" style={{ textAlign: 'center' }}>
              <img src={logo} alt="Logo" className="logo" /> {/* Replace with your logo path */}
              <h2>QA Assessment</h2>
            </div>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <PercentageBar />
            <button type="submit">Get Started</button>
          </form>
        ) : (
          <InstructionsPage onStartTest={handleStartTest} />
        )}
      </main>
      {/* Footer can be uncommented and used if needed */}
      {/* <footer className="footer">
        <span>Footer Details</span>
      </footer> */}
    </div>
  );
};

export default HomePage;
