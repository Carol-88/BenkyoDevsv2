import React from 'react';
import Game from './Game';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { AuthContext } from './AuthContext'; // Asegúrate de importar AuthContext desde la ubicación correcta

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Header/>
      <Game/>          
      <Footer/>
    </AuthContext.Provider>
  )
}

export default App;
