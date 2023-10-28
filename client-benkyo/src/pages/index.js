// Archivo pages/index.js

import React from 'react';
import App from './App';
import styles from './global.module.css'

const Home = () => {
  return (
    <html className={styles.globalreset}>
        <App/>
    </html>
  );
};

export default Home;
