import React, { useState } from 'react';
import HomePage from './HomePage'; // Importing the HomePage component
import TestPage from './TestPage';

function App() {

  const [currentPage, setCurrentPage] = useState('login');

  const navigateToHomePage = () => {
    setCurrentPage('home');
  };

  const navigateToTestPage = () => {
    setCurrentPage('test');
  };

  switch (currentPage) {
    case 'test':
      return <TestPage onTestFinish={navigateToHomePage} />;
    // ... similarly for other cases ...
    default:
      return <HomePage onStartTest={navigateToTestPage} />;
  }


  // return (
  //   <div className="App">
  //     {/* <header className="App-header">
  //       <h1>Assessment Platform</h1>
  //     </header> */}
  //     <main>
  //       <HomePage /> {/* Rendering the HomePage component */}
  //     </main>
  //   </div>
  // );
}

export default App;
