
import Link from 'next/link'
import User from './User';
import Language from './Language';
import Counter from './Counter';
import Difficults from './Difficults';

const Header = () => {

  return (
    <div>
      <Link href="/loginpage">Login</Link>
      <Link href="/register">Registro</Link> 
      <User/>
      <Language/>
      <Counter/>
      <Difficults/>
    </div>
  );
  };

export default Header;
