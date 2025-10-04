import styles from './LoginTela.module.css'

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
                <button className={styles.loginButton}>login</button>
                <a href="#" className={styles.cadastroLink}>
                    Não tem login, cadastre-se!!!
                </a>
            </div>
        </div>
    )
}