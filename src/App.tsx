import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import { AuthContextProvider } from './context/AuthContext';
import Navbar from './component/Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Navbar />
        <Outlet />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
