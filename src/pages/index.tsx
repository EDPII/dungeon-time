import  Head from 'next/head';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { useRouter } from 'next/router';
import  React, { useEffect }  from 'react';

import Link from 'next/link';
import { signIn, useSession } from 'next-auth/client';


import styles from '../styles/pages/Home.module.css';
import { FaDungeon, FaPlay, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';




const Login: React.FC<AppProps> = ({ ...pageProps }) => {
    const userSession = pageProps.session;
    const [loading] = useSession();
    const router = useRouter();
    useEffect(() => {
        if (!(pageProps.session || loading)) {
        router.replace('/')
        } else {
        router.replace('/timer')
        }
  }, [userSession, loading])
   
    return (
        <>
            <Head>
                <title>Início | Dungeon Time</title>
            </Head>
            

            <section className={styles.sectionContainer}>
                <div>
                    <img src="icons/wood-door.png" alt="wood-door"></img>
                </div>
                <div className={styles.container}>
                    <header>Bem-Vindo</header>
                    <main>
                        <p>
                            Faça login e começe a sua jornada.
                        </p>
                        <div className={styles.buttonsContainer}>
                            <button className={styles.git} type="button" 
                            onClick={() => signIn('github')}>
                            <FaGithub /> Conectar com o GitHub
                            </button>
                            <button className={styles.gg} type="button" 
                            onClick={() => signIn('google')}>
                            <FaGoogle /> Conectar com o Google
                            </button>
                            <button className={styles.tt} type="button" 
                            onClick={() => signIn('twitter')}>
                            <FaTwitter /> Conectar com o Twitter
                            </button>
                        </div>    
                    </main>
                    <footer>
                        <small>
                            <strong>Dungeon Time</strong> é um timer baseado
                            na técnica Pomodoro, com ele você foca mais e ganha um 
                            auxílio na saúde e postura.
                        </small>
                    </footer>
                </div>
           </section>
          
           
        </>
    );
    
}

export default Login;