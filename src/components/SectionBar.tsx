import { FaGithub } from "react-icons/fa"
import styles from '../styles/components/SectionBar.module.css';

export function SectionBar() {
    return (
        <header className={styles.SectionBarContainer}>
            <div className={styles.LogoContainer}>
                <img src="favicon.png" alt="logo"/>
                <p>Dungeon Time</p>
            </div>
            <nav className={styles.NavContainer}>
                <ul>
                    <li>Início</li>
                    <li>Timer</li>
                    <li>Sobre</li>
                </ul>
            </nav>
            <div>
                <FaGithub />
                <a href="https://github.com/EDPII"target="_blank">GitHub</a>
            </div>
        </header>
    );
}