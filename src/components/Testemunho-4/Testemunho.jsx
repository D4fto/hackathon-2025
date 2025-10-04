import styles from './Testemunho.module.css'
import Comentario from '../Comentario/Comentario'

export default function Testemunho() {
    return (
        <div className={styles.testemunhoContainer}>
            <div className={styles.headerSection}>
                <h1 className={styles.title}>Testemunhos</h1>
                <h3 className={styles.subtitle}>
                    Mais social proof com testemunhos de clientes ou reviews do produto/serviços prestados
                </h3>
            </div>
            <div className={styles.comentariosSection}>
                <Comentario
                    depoimento="“Depoimento que alguém escreveu destacando os benefícios ou ganhos que teve ao usar o seu produto/serviço.”"
                    nome="João Silva"
                    profissao="Desenvolvedor Web"
                    empresa="Tech Solutions"
                    foto="https://randomuser.me/api/portraits/men/1.jpg"
                />
                <Comentario
                    depoimento="“Depoimento que alguém escreveu destacando os benefícios ou ganhos que teve ao usar o seu produto/serviço.”"
                    nome="Maria Souza"
                    profissao="Designer Gráfica"
                    empresa="Design Pro"
                    foto="https://randomuser.me/api/portraits/women/2.jpg"
                />
                <Comentario
                    depoimento="“Depoimento que alguém escreveu destacando os benefícios ou ganhos que teve ao usar o seu produto/serviço.”"
                    nome="Carlos Lima"
                    profissao="Analista de Dados"
                    empresa="Data Insights"
                    foto="https://randomuser.me/api/portraits/men/3.jpg"
                />
            </div>
        </div>
    )
}