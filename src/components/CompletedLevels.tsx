import styles from '../styles/components/CompletedLevels.module.css';
import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';

export function CompletedLevels() {

    const { challengeCompleted } = useContext(ChallengeContext)

    return (
        <div className={styles.completedLevelsContainer}>
            <span>Desafios Completados</span>
            <span> {challengeCompleted} </span>
        </div>
    );
}