import styles from './LoginTela.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
function isMobile() {
    return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

export default function LoginTela() {
    const [isError, setIsError] = useState(false)
    function erro(){
        setIsError(true)
    }

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginBox}>
                {isError&&<p className={styles.erro}>CPF ou Senha inválidos</p>}
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
                    {
                        isMobile()?
                        <button className={styles.loginButton}>
                        <p className={styles.loginLink} onClick={erro}>
                            Login
                        </p>
                        </button>
                        :
                        <Link to="/dashboard1" className={styles.loginLink}>
                            <button className={styles.loginButton}>
                                Login
                            </button>
                        </Link>
                    }
                <a href="#" className={styles.cadastroLink}>
                    Não tem login, cadastre-se!!!
                </a>
            </div>
        </div>
    )
}