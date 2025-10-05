import styles from "./Footer.module.css";
import { Instagram, Github } from "lucide-react";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer id="footer" className={styles.footerContainer}>
      <div className={styles.devsSection}>
        <h1 className={styles.devsTitle}>Desenvolvedores:</h1>
        <div className={styles.devsList}>

          <div className={styles.devItem}>
            <p className={styles.devName}>Andrei Abner</p>
            <div className={styles.links}>
              <a
                href="https://www.instagram.com/andrei.abner/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.iconLink} ${styles.instagram}`}
                title="Instagram"
                aria-label="Instagram"
              >
                <Instagram className={styles.icon} />
              </a>
              <a
                href="https://github.com/Dedei-AB"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.iconLink} ${styles.github}`}
                title="GitHub"
                aria-label="GitHub"
              >
                <Github className={styles.icon} />
              </a>
            </div>
          </div>

          <div className={styles.devItem}>
            <p className={styles.devName}>Eduardo Cheliga</p>
            <div className={styles.links}>
              <a
                href="https://www.instagram.com/e_cheliga/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.iconLink} ${styles.instagram}`}
                title="Instagram"
                aria-label="Instagram"
              >
                <Instagram className={styles.icon} />
              </a>
              <a
                href="https://github.com/zezin68"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.iconLink} ${styles.github}`}
                title="GitHub"
                aria-label="GitHub"
              >
                <Github className={styles.icon} />
              </a>
            </div>
          </div>

          <div className={styles.devItem}>
            <p className={styles.devName}>Hiago Gimenez</p>
            <div className={styles.links}>
              <a
                href="https://www.instagram.com/gimenez_hiago/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.iconLink} ${styles.instagram}`}
                title="Instagram"
                aria-label="Instagram"
              >
                <Instagram className={styles.icon} />
              </a>
              <a
                href="https://github.com/gimenezhiago"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.iconLink} ${styles.github}`}
                title="GitHub"
                aria-label="GitHub"
              >
                <Github className={styles.icon} />
              </a>
            </div>
          </div>

          <div className={styles.devItem}>
            <p className={styles.devName}>Marlon Sidnei</p>
            <div className={styles.links}>
              <a
                href="https://www.instagram.com/marlonsid_/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.iconLink} ${styles.instagram}`}
                title="Instagram"
                aria-label="Instagram"
              >
                <Instagram className={styles.icon} />
              </a>
              <a
                href="https://github.com/MarlonUTF"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.iconLink} ${styles.github}`}
                title="GitHub"
                aria-label="GitHub"
              >
                <Github className={styles.icon} />
              </a>
            </div>
          </div>

          <div className={styles.devItem}>
            <p className={styles.devName}>Pedro Tunes</p>
            <div className={styles.links}>
              <a
                href="https://www.instagram.com/pedrotuness/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.iconLink} ${styles.instagram}`}
                title="Instagram"
                aria-label="Instagram"
              >
                <Instagram className={styles.icon} />
              </a>
              <a
                href="https://github.com/D4fto"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.iconLink} ${styles.github}`}
                title="GitHub"
                aria-label="GitHub"
              >
                <Github className={styles.icon} />
              </a>
            </div>
          </div>

          <div className={styles.devItem}>
            <p className={styles.devName}>Talisson Sidnei</p>
            <div className={styles.links}>
              <a
                href="https://www.instagram.com/talissonsidnei/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.iconLink} ${styles.instagram}`}
                title="Instagram"
                aria-label="Instagram"
              >
                <Instagram className={styles.icon} />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.iconLink} ${styles.github}`}
                title="GitHub"
                aria-label="GitHub"
              >
                <Github className={styles.icon} />
              </a>
            </div>
          </div>

        </div>
      </div>

      <div className={styles.fontesSection}>
        <p className={styles.fontesTitle}>
          Fontes da Nasa, para aprendizado da IA:
        </p>
        <div className={styles.fontesLinks}>
          <a href="https://www.earthdata.nasa.gov/worldview">Nasa World View</a>
          <a href="http://earthobservatory.nasa.gov/">Earth Observatory</a>
          <a href="http://eotoolkit.unhabitat.org/">Eo Toolkit</a>
          <a href="https://www.worldpop.org/">World Pop</a>
          <a href="https://visualizador.inde.gov.br/">Visualizador</a>
          <a href="https://www.dgi.inpe.br/catalogo/explore">Inpe</a>
        </div>
        <div className={styles.logoContainer}>
          <img src={logo} alt="" className={styles.logo} />
        </div>
      </div>
    </footer>
  );
}
