// Aquí importar el resto de componentes de la carpeta header y linkear css, dejo ejemplo:

import User from "./User"
import Language from "./Language"
import Counter from "./Counter"
import Difficults from "./Difficults"

<link rel="stylesheet" href="" />

function Header() {
  return (
    <>
        <User/>
        <Language/>
        <Counter/>
        <Difficults/>
    </>
  )
}

export default Header