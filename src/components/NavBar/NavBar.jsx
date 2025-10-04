import styles from './NavBar.module.css'

export default function NavBar() {
    return (
        <div>
            <nav className={styles.navbar}>
                <a href="" className={styles.logo}>LOGO</a>
                <div className={styles.menu}>
                    <a href="" className={styles.menuItem}>Home</a>
                    <a href="" className={styles.menuItem}>Sobre</a>
                    <a href="" className={styles.menuItem}>Serviços</a>
                    <a href="" className={styles.menuItem}>Contatos</a>
                    <button className={styles.loginButton}>
                        <a href="" className={styles.loginLink}>Sou um Gestor</a>
                    </button>
                </div>
            </nav>
        </div>
    )
}

