import Head from 'next/head';
import { GetServerSideProps } from 'next'
 
import React, { useEffect  } from 'react';
import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedLevels } from '../components/CompletedLevels';
import { Countdown } from '../components/Countdown';
import { LevelProgress } from '../components/LevelProgress';
import { Profile } from '../components/Profile';



import styles from '../styles/pages/Timer.module.css';

import { CountdownContext, CountdownProvide } from '../contexts/CountdownContext';
import { ChallengeProvider } from '../contexts/ChallengeContext';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';

interface TimePage {
  level: number;
  currentLevel: number;
  challengeCompleted:number;
}


export default function Time(props:TimePage) {

  const [session, loading] = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!(session || loading)) {
      router.push('/login')
    } else {
      router.push('/')
    }
  }, [session, loading]);

  if (typeof window !== 'undefined' && loading) {
    return (
      <div className="loading">
        Carregando. . .
      </div>
    )
  }

    return (
      <ChallengeProvider
        level = {props.level}
        currentLevel = {props.currentLevel}
        challengeCompleted = {props.challengeCompleted}
      >
        <div className={styles.timeContainer}>
          <Head>
            <title>Timer | Dungeon Time</title>
          </Head>

          <LevelProgress />
         

          <CountdownProvide>
            <section> 
              <div>
                <Profile />
                <CompletedLevels />     
                <Countdown />  
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvide>
    </div>
    </ChallengeProvider>
    )
}  

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  
  const {level, currentLevel, challengeCompleted} = ctx.req.cookies;


  return {
    props: {
      level: Number(level),
      currentLevel: Number(currentLevel),
      challengeCompleted: Number(challengeCompleted)
    }
  }
}

