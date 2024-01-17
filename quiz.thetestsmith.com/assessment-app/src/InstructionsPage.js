// InstructionsPage.js
import React from 'react';
import './InstructionsPage.css';

const InstructionsPage = ({ onStartTest }) => {
    return (
        <div className="instructions">
            <h2>Things to Remember Before the Test</h2>
            <ul>
                <li>Ensure you have a stable internet connection.</li>
                <li>Find a quiet room and avoid interruptions during the test.</li>
                <li>Have a piece of photo ID ready for identity verification if required.</li>
                <li>Close all unnecessary tabs and applications to help your computer run smoothly.</li>
                <li>Read each question carefully before answering.</li>
                <li>Keep track of time, and don't spend too long on any one question.</li>
                <li>Remember to save your answers as you go along.</li>
                <li>No external help is allowed during the test.</li>
            </ul>
            <button onClick={onStartTest} className="start-test-btn">Start Test</button>
        </div>
    );
};

export default InstructionsPage;