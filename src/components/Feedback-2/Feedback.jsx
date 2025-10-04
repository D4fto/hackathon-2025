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
                        Com base em suas informações, nossos os assuntos e outras regiões que exigem grande prioridade
                    </p>
                </div>

                <div className={`${styles.card} ${styles.cardGreen}`}>
                    <div className={styles.cardIcon}>🏠</div>
                    <h3 className={styles.cardTitle}>Encontre seu lugar</h3>
                    <p className={styles.cardDescription}>
                        Qual problema do setor? Descreva aqui e senta próxi e tão perto quanto você precisa
                    </p>
                </div>
            </div>
        </section>
    )
}