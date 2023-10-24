import React from 'react';
import styles from './footer.module.css'; // Asegúrate de que el nombre del archivo CSS sea el correcto

const Footer = () => {
  return (
    <footer className={styles.footer}>
      
      <p className={styles.devs}>
        <span>Lucas Peláez - Github</span>
        <span>Lourdes Dols - GitHub</span>
        <span>Carolina Romero - GitHub</span>
      </p>
     
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id in, omnis natus voluptate pariatur, 
          dolorem assumenda eum provident esse nam impedit fuga temporibus? Dolores, assumenda natus!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id in, omnis natus voluptate pariatur, 
          dolorem assumenda eum provident
        </p>
      
    </footer>
  );
};

export default Footer;