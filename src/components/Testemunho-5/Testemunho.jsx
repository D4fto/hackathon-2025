import styles from './Testemunho.module.css'
import Comentario from '../Comentario/Comentario'

export default function Testemunho() {
    return (
        <div className={styles.testemunhoContainer}>
            <div className={styles.headerSection}>
                <h1 className={styles.title}>Testemunhos</h1>
                <h3 className={styles.subtitle}>
                    O que nossos usuários dizem sobre a nossa plataforma e como ela impactou suas vidas.
                </h3>
            </div>
            <div className={styles.comentariosSection}>
                <Comentario
                    depoimento="“Com essa plataforma, finalmente consegui ser ouvido pela gestão do meu bairro. As melhorias aconteceram muito mais rápido!”"
                    nome="João Silva"
                    profissao="Engenheiro Civil"
                    empresa="Morador"
                    foto="https://randomuser.me/api/portraits/men/1.jpg"
                />
                <Comentario
                    depoimento="“A ferramenta facilitou o envio de sugestões e reclamações. Sinto que minha opinião faz diferença na cidade!”"
                    nome="Maria Souza"
                    profissao="Designer Gráfica"
                    empresa="Pare Azul"
                    foto="https://randomuser.me/api/portraits/women/2.jpg"
                />
                <Comentario
                    depoimento="“A análise dos dados feita pela IA ajudou a prefeitura a priorizar as demandas do bairro. Recomendo para todos!”"
                    nome="Carlos Lima"
                    profissao="Analista"
                    empresa="Preifeitura"
                    foto="https://randomuser.me/api/portraits/men/3.jpg"
                />
            </div>
        </div>
    )
}