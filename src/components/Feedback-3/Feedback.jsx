import styles from './Feedback.module.css'

export default function Feedback() {
    return (
        <section className={styles.section}>
            <h1 className={styles.title}>
                Com seu feedback podemos planejar uma cidade melhor!
            </h1>
            
            <div className={styles.cardsContainer}>
                <div className={`${styles.card} ${styles.cardYellow}`}>
                    <div className={styles.cardIcon}>📍</div>
                    <h3 className={styles.cardTitle}>Converse conosco pelo WhatsApp</h3>
                    <p className={styles.cardDescription}>
                        Qual problema da revisão? Descreva aqui e vamos tentar ajudar juntos!
                    </p>
                </div>

                <div className={`${styles.card} ${styles.cardBlue}`}>
                    <div className={styles.cardIcon}>🎯</div>
                    <h3 className={styles.cardTitle}>Os gestores da cidade</h3>
                    <p className={styles.cardDescription}>
                        Com base em suas informações, os gestores podem planejar melhorias para a cidade. 
                    </p>   
                </div>

                <div className={`${styles.card} ${styles.cardGreen}`}>
                    <div className={styles.cardIcon}>🏠</div>
                    <h3 className={styles.cardTitle}>Treinamento de IA</h3>
                    <p className={styles.cardDescription}>
                        A Inteligência Artificial aprende com os dados disponibilizados pela Nasa, para aprimorar suas respostas e moradores da cidade 
                    </p>
                </div>
            </div>
        </section>
    )
}