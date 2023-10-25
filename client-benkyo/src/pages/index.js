import React from 'react';
import Game from './Game';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { AuthProvider } from '@/authcontext/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Header/>
      <Game/>          
      <Footer/>
    </AuthProvider>
  )
}

export default App;
