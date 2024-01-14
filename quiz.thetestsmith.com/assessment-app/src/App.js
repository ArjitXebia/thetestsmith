import React from 'react';
import HomePage from './HomePage'; // Importing the HomePage component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Assessment Platform</h1>
      </header>
      <main>
        <HomePage /> {/* Rendering the HomePage component */}
      </main>
    </div>
  );
}

export default App;
