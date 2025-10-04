import styles from './Feedback.module.css'
import { MapPin, Package } from 'lucide-react'
export default function Feedback() {
    return (
        <section>
            <h1>Com seu feedback podemos planejar uma cidade melhor!</h1>
            <div>
                <MapPin/>
                <h2>Converse conosco pelo WhatsApp</h2>
                <p>Qual problema ela resolve? Descreva aqui e tente provar o seu ponto.</p>
            </div>
            <div>
                <Package/>
                <h2>Os gestores da cidade</h2>
                <p>Com base em suas informações, nossa IA encontra a melhor região que atenda sua necessidades</p>
            </div>
            <div>
                <Package/>
                <h2>Beneficio 3</h2>
                <p>Qual problema ela resolve? Descreva aqui e tente provar o seu ponto.</p>
            </div>
        </section>
    )
}