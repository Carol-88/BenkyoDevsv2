
import Link from 'next/link'
import User from './User';
import Language from './Language';
import Counter from './Counter';
import Difficults from './Difficults';
import styles from './header.module.css'

const Header = () => {

  return (
    <div className={styles.header}>
      <div>
      <Link href="/loginpage">Login</Link>
      <br/>
      <Link href="/register">Registro</Link> 
      </div>
      
      <User/>
      <Language/>
      <Counter/>
      <Difficults/>
    </div>
  );
  };

export default Header;
