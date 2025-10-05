import styles from './LoginTela.module.css'
import { Link } from 'react-router-dom'

export default function LoginTela() {
    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginBox}>
                <h1 className={styles.title}>Login</h1>
                <input 
                    type="text" 
                    placeholder='CPF' 
                    className={styles.inputField}
                />
                <input 
                    type="password" 
                    placeholder='Senha' 
                    className={styles.inputField}
                />
                <button className={styles.loginButton}>
                    <Link to="/dashboard1" className={styles.loginLink}>
                        Login
                    </Link>
                </button>
                <a href="#" className={styles.cadastroLink}>
                    Não tem login, cadastre-se!!!
                </a>
            </div>
        </div>
    )
}