import styles from './Encontre.module.css'
import whats from '../../assets/whats.png'

export default function Encontre() {
    return (
        <section className={styles.section}>
            <h1 className={styles.title}>Encontre seu "cantinho"</h1>
            <p className={styles.description}>
                Um espaço criado para que você possa realizar uma pesquisa ampla sobre 
                os locais disponíveis na nossa cidade. Com o auxílio de uma IA, encontre 
                seu lar com poucos cliques!
            </p>
            <button className={styles.whatsappButton}>
                <span>
                    <img src={whats} alt="" className={styles.whatsappIcon}/>
                </span>
                WhatsApp
            </button>
        </section>
    )
}