import styles from './Footer.module.css'
import insta from '../../assets/instagram.png'
import github from '../../assets/github.png'

export default function Footer() {
    return (
        <footer id="footer" className={styles.footerContainer}>
            <h1 className={styles.title}>Footer</h1>
            <div className={styles.devsSection}>
                <p className={styles.devsTitle}>Desenvolvedores:</p>
                <div className={styles.devsList}>
                    <div className={styles.devItem}>
                        <p className={styles.devName}>Andrei Abner</p>
                        <a href="https://www.instagram.com/andrei.abner/" target="_blank" rel="noopener noreferrer">
                            <img src={insta} alt="Instagram Andrei" className={styles.icon} />
                        </a>
                        <a href="https://github.com/Dedei-AB" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="GitHub Andrei" className={styles.icon} />
                        </a>
                    </div>
                    <div className={styles.devItem}>
                        <p className={styles.devName}>Eduardo Cheliga</p>
                        <a href="https://www.instagram.com/e_cheliga/" target="_blank" rel="noopener noreferrer">
                            <img src={insta} alt="Instagram Eduardo" className={styles.icon} />
                        </a>
                        <a href="https://github.com/zezin68" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="GitHub Eduardo" className={styles.icon} />
                        </a>
                    </div>
                    <div className={styles.devItem}>
                        <p className={styles.devName}>Hiago Gimenez</p>
                        <a href="https://www.instagram.com/gimenez_hiago/" target="_blank" rel="noopener noreferrer">
                            <img src={insta} alt="Instagram Hiago" className={styles.icon} />
                        </a>
                        <a href="https://github.com/gimenezhiago" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="GitHub Hiago" className={styles.icon} />
                        </a>
                    </div>
                    <div className={styles.devItem}>
                        <p className={styles.devName}>Marlon Sidnei</p>
                        <a href="https://www.instagram.com/marlonsid_/" target="_blank" rel="noopener noreferrer">
                            <img src={insta} alt="Instagram Marlon" className={styles.icon} />
                        </a>
                        <a href="https://github.com/MarlonUTF" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="GitHub Marlon" className={styles.icon} />
                        </a>
                    </div>
                    <div className={styles.devItem}>
                        <p className={styles.devName}>Pedro Tunes</p>
                        <a href="https://www.instagram.com/pedrotuness/" target="_blank" rel="noopener noreferrer">
                            <img src={insta} alt="Instagram Pedro" className={styles.icon} />
                        </a>
                        <a href="https://github.com/D4fto" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="GitHub Pedro" className={styles.icon} />
                        </a>
                    </div>
                    <div className={styles.devItem}>
                        <p className={styles.devName}>Talisson Sidnei</p>
                        <a href="https://www.instagram.com/talissonsidnei/" target="_blank" rel="noopener noreferrer">
                            <img src={insta} alt="Instagram Talisson" className={styles.icon} />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="GitHub Talisson" className={styles.icon} />
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.fontesSection}>
                <p className={styles.fontesTitle}>Fontes da Nasa, para aprendizado da IA:</p>
                <div className={styles.fontesLinks}>
                    <a href="https://www.earthdata.nasa.gov/worldview">Nasa World View</a>
                    <a href="http://earthobservatory.nasa.gov/">Earth Observatory</a>
                    <a href="http://eotoolkit.unhabitat.org/">Eo Toolkit</a>
                    <a href="https://www.worldpop.org/">World Pop</a>
                    <a href="https://visualizador.inde.gov.br/">Visualizador</a>
                    <a href="https://www.dgi.inpe.br/catalogo/explore">Inpe</a>
                </div>
            </div>
        </footer>
    )
}