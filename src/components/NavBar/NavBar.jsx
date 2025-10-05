import styles from "./NavBar.module.css";
import imagem from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function NavBar() {
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
      </nav>
    </div>
  );
}
