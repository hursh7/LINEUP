import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import { AuthContextProvider } from './component/context/AuthContext';
import Navbar from './component/Navbar';

function App() {
  return (
    <AuthContextProvider>
      <Navbar />
      <Outlet />
    </AuthContextProvider>
  );
}

export default App;
