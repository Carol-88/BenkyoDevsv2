import React from 'react'
import Game from '@/components/game/Game'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import styles from './global.module.css'

const App = () => { 
  return (
    <div className={styles.globalreset}>       
      <Header/>
      <Game/>          
      <Footer/>
    </div>
  )
}

export default App