import styles from './Comentario.module.css'

export default function Comentario({ depoimento, nome, profissao, empresa, foto }) {
    return (
        <div className={styles.comentarioContainer}>
            <img src="" alt="" className={styles.estrelas} />
            <p className={styles.depoimento}>{depoimento}</p>
            <div className={styles.usuarioSection}>
                <img src={foto} alt={nome} className={styles.fotoUsuario} />
                <p className={styles.nome}>{nome}</p>
                <div className={styles.infoProfissional}>
                    <p className={styles.profissao}>{profissao}</p>
                    <p className={styles.empresa}>{empresa}</p>
                </div>
            </div>
        </div>
    )
}