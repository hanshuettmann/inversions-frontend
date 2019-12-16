import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Filters from './Components/Filters/Filters';
import Inversions from './Components/Inversions/Inversions';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Inversions />
    </div>
  );
}

export default App;
