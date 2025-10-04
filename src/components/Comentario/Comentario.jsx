import styles from './Comentario.module.css'

export default function Comentario({ depoimento, nome, profissao, empresa, foto }) {
    return (
        <div className={styles.comentarioCard}>
            <div className={styles.stars}>
                ★★★★★
            </div>
            <p className={styles.depoimento}>
                {depoimento}
            </p>
            <div className={styles.autorSection}>
                <img 
                    src={foto} 
                    alt={`Foto de ${nome}`} 
                    className={styles.foto}
                />
                <div className={styles.infoAutor}>
                    <p className={styles.nome}>{nome}</p>
                    <p className={styles.profissaoEmpresa}>
                        {profissao}, {empresa}
                    </p>
                </div>
            </div>
        </div>
    )
}