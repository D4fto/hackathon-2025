import styles from "./NavBar.module.css";
import imagem from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu} from 'lucide-react'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <nav className={styles.navbar}>
        <a href="/#home" className={styles.logo}>
          <img src={imagem} alt="LOGO" className={styles.imagem} />
        </a>
        <div className={styles.menu}>
          <a href="/#home" className={styles.menuItem}>
            Home
          </a>
          <a href="/#encontre" className={styles.menuItem}>
            Sobre
          </a>
          <a href="/#ia" className={styles.menuItem}>
            Serviços
          </a>
          <a href="/#footer" className={styles.menuItem}>
            Contatos
          </a>
          <button className={styles.loginButton}>
            <Link to="/login" className={styles.loginLink}>
              Sou um Gestor
            </Link>
          </button>
        </div>
        <button className={styles.menuButton} style={{transform: `translateX(${isOpen?'-17rem':'0'})`}} onClick={e => setIsOpen(!isOpen)}>
        <Menu size={28} />
          </button>
      </nav>
      <nav className={styles.verticalMenu} style={{transform: `translateX(${isOpen?'0%':'100%'})`}}>
        <div className={styles.menu}>
          <button className={styles.loginButton}>
            <Link to="/login" className={styles.loginLink}>
              Sou um Gestor
            </Link>
          </button>
          <a href="/#home" className={styles.menuItem}>
            Home
          </a>
          <a href="/#encontre" className={styles.menuItem}>
            Sobre
          </a>
          <a href="/#ia" className={styles.menuItem}>
            Serviços
          </a>
          <a href="/#footer" className={styles.menuItem}>
            Contatos
          </a>
        </div>
      </nav>
    </div>
  );
}
