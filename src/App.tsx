import React from 'react';
import './App.css';
import { PopularFrameworks } from './PopularFrameworks';

const App: React.FC = () => {
  return (
    <div style={{ padding: '3rem' }}>
      <h1>JS Frameworks</h1>
      <PopularFrameworks />
    </div>
  );
}


export default App;
