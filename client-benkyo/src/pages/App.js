import React from 'react'
import Game from '@/components/game/Game'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import styles from './global.module.css'
import Head from 'next/head'

const App = () => { 
  return (
    <div>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href='/icons/favicon' />
      </Head>
      <main className={styles.globalreset}>       
        <Header/>
        <Game/>          
        <Footer/>
      </main>
    </div>
  )
}

export default App 