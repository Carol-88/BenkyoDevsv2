import {Link} from 'next/link'
import Language from "./Language";
import Counter from "./Counter";
import Difficults from "./Difficults";
import User from './User';

const Header = () => {
  // const isLoggedIn = typeof window !== 'undefined' && localStorage.getItem('isLoggedIn') === 'true';

  return (
    <>
      {/* {isLoggedIn ? (
        <User/>
      ) : (
        <>
          <Link href="/loginpage">Login</Link>
          <Link href="/newuser">Registro</Link>
        </>
      )} */}
      <Language/>
      <Counter/>
      <Difficults/>
    </>
  )
}

export default Header;

