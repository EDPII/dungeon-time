import styles from '../styles/components/LevelProgress.module.css';
import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';

export function LevelProgress() {

    const { currentLevel, experienceToNextLevel } = useContext(ChallengeContext);
    
    const percentToNextLevel = Math.round(currentLevel * 100) / experienceToNextLevel;
    
    return (
      
        <header className={styles.levelProgress}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />

                <span className={styles.currentPosition} style={{ left: `${percentToNextLevel}%` }}>
                    {currentLevel} xp
                </span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
        
    );
}