import Head from 'next/head';
import  React  from 'react';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>Início | Dungeon Time</title>
                </Head>
               <section>
                    <strong>Esse é o bem vindo</strong>
                    <div>
                        <div>Essa é a home page</div>
                        <a href="/timer">Ir para o timer</a>
                    </div>
               </section>
            </div>
        </>
    );
}