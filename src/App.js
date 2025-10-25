import React from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import './styles/empire.css';

function App() {
  return (
    <div className="empire-app">
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
