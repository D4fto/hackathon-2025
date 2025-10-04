import styles from "./Home.module.css";
import whats from "../../assets/whats.png";
import imagemCM from "/src/assets/campo-mourao.png"

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.contentSection}>
        <div className={styles.headerSection}>
          <h1 className={styles.title}>Meu Bairro Meu Mourão</h1>
          <h3 className={styles.subtitle}>
            Meu Bairro Meu Mourão é um espaço digital voltado para dar voz aos
            moradores, e tornar a cidade um lugar melhor para se viver! Dê um
            feedback sobre seu bairro para facilitar novas mudanças!
          </h3>
        </div>
        <div className={styles.whatsappSection}>
            <button className={styles.whatsappButton}>
                <img src={whats} alt="" className={styles.whatsappIcon} />
                WhatsApp
            </button>
            <p className={styles.shareText}>Compartilhe sua opinião conosco!</p>
        </div>
      </div>
      
      <div className={styles.imageSection}>
        <img src={imagemCM} alt="" className={styles.mainImage} />
      </div>
    </div>
  );
}
