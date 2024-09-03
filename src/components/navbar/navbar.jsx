import { useContext, useState } from 'react'
import styles from './navbar.module.scss'
import imgNavbar from '@/assets/images/Logo_barra_navegación.png'
import { AuthContext } from '../../contexts/AuthContext'
export const Navbar = () =>{
  const [openMenu, setOpenMenu] = useState(false)
  const {logout} = useContext(AuthContext)
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }
  const handleLogout = () => {
    logout()
  }
  return (
    <div className={styles.container}>
      <img src={imgNavbar} alt="LogoNavbar" />
      <div className={
        styles.containerUser
      }>
        <button onClick={handleOpenMenu}>Usuario</button>
        <div className={
          `${styles.containerMenu} ${
            openMenu ? styles.active : ''
          }`
        }>
          <button onClick={handleLogout}>
            Cerrar Sesión
            </button>
        </div>
      </div>
    </div>
  )
}
