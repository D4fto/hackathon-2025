import styles from './IA.module.css'

export default function IA() {
    return (
        <div id="ia" className={styles.IASection}>
            <div>
                <h1>Uso da Inteligência Artificial</h1>
                <h3>A Inteligência artificial será treinada com dados tanto disponibilizados da Nasa, quanto com imagens de satélites fornecidas pelo município por meio do geoportal. <br />
                A aplicação da IA se dará por meio de um chat no WhatsApp, onde o usuário terá o auxilio da IA para procurar locais de interesse, e se for o caso, dar um feedback sobre o bairro. Ademais, a IA se expande também para a análise, validação e quantificação de dados para o gestor</h3>
            </div>
            <div>
                <img src="" alt="imagem do chatbot ou do dashboard" />
            </div>
        </div>
    )
}