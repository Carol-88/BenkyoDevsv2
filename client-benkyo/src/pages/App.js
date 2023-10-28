import React from 'react'
import Game from '@/components/game/Game'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import styles from './global.module.css'
import Head from 'next/head'

const App = () => { 
  return (
    <>
      <Head>
      <link rel="icon" href='./public/img/favicon' />
      </Head>
      <body className={styles.globalreset}>       
        <Header/>
        <Game/>          
        <Footer/>
      </body>
    </>
  )
}

export default App 