import styles from './LoginTela.module.css'

export default function LoginTela() {
    return (
        <div className={styles.loginContainer}>
            <label className={styles.label}>Email</label>
            <input type="text" className={styles.input} />
            <label className={styles.label}>Senha</label>
            <input type="password" className={styles.input} />
            <button className={styles.button}>Logar</button>
        </div>
    )
}