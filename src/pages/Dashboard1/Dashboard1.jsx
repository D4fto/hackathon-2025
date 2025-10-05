import styles from './Dashboard1.module.css'
import { Link } from 'react-router-dom'

export default function Dashboard1() {
    return (
        <div className={styles.dashboard}>
            <div className={styles.div1}>
                <Link to="/dashboard2">
                    <div className={styles.link}></div>
                </Link>
            </div>
        </div>
    )
}