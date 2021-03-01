import Head from 'next/head';
import  React  from 'react';
import { Login } from '../components/LoginBox';

import styles from '../styles/pages/Home.module.css';
import { FaGithub } from 'react-icons/fa';
import { SectionBar } from '../components/SectionBar';

export default function Home() {
    return (
        <>
        <header className={styles.sectionBarContainers}>
            <SectionBar />
        </header>
            <div className={styles.container}>
                <Head>
                    <title>Início | Dungeon Time</title>
                </Head>
               <section>
                   <div>
                   
                   </div>
                   <div>
                        <Login />
                   </div>
               </section>
            </div>
        </>
    );
}