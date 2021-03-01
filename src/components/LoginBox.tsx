import styles from '../styles/components/Login.module.css';
import { FaChevronRight, FaGithub } from "react-icons/fa";


export function Login() {
    return (
        <div className={styles.loginContainer}>
            <header>Bem Vindo!</header>
            <p>Esse é o Dungeon Time</p>
            <div>Essa é a home page</div>
               
                <input></input>
                <a href="/timer">
                <FaChevronRight />
                    
                </a>
        </div>
    );
}