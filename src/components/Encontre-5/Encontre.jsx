import styles from "./Encontre.module.css";
import whats from "../../assets/whats.png";

export default function Encontre() {
  return (
    <section className={styles.section}>
      <div className={styles.texts}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Encontre seu "cantinho"</h1>
          <p className={styles.description}>
            Um espaço criado para que você possa realizar uma pesquisa ampla
            sobre os locais disponíveis na nossa cidade. Com o auxílio de uma
            IA, encontre seu lar com poucos cliques!
          </p>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Fale-nos sobre seu bairro</h1>
          <h3 className={styles.description}>
            Sua opinião impactuará diretamente na criação de novas políticas
            públicas para o sua região
          </h3>
        </div>
      </div>
      <button className={styles.whatsappButton}>
        <span>
          <img src={whats} alt="" className={styles.whatsappIcon} />
        </span>
        WhatsApp
      </button>
    </section>
  );
}
