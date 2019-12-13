import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import InversionsTable from './Components/InversionsTable/InversionsTable';
import AmountDisplay from './Components/AmountDisplay/AmountDisplay';
import NewInversionModal from './Components/NewInversionModal/NewInversionModal';
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
