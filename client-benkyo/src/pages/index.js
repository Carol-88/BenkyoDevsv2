// Archivo pages/index.js

import React from 'react';
import App from './App';
import styles from './global.module.css'

const Home = () => {
  return (
    <div className={styles.globalreset}>
        <App/>
    </div>
  );
};

export default Home;
