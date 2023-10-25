// Aquí importar el resto de componentes de la carpeta header y linkear css, dejo ejemplo:

import { Link } from 'next/link';
import User from "./User";
import Language from "./Language";
import Counter from "./Counter";
import Difficults from "./Difficults";

<link rel="stylesheet" href="" />

function Header() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <>
      {isLoggedIn ? (
        <User/>
      ) : (
        <>
          <Link href="/login">Login</Link> || <Link href="/registro">Registro</Link>
        </>
      )}
      <Language/>
      <Counter/>
      <Difficults/>
    </>
  )
}

export default Header;
