import { createContext, useState, ReactNode, useEffect } from 'react';
import Cookies from 'js-cookie'
import challenges from '../../challenges.json';
import { LevelUpModal } from '../components/LevelUpModal';



interface Challenge {
    type: 'body' | 'eye'
    description: string;
    amount: number;
}

interface ChallengeContextData {
    level: number;
    currentLevel: number; 
    challengeCompleted: number;
    experienceToNextLevel: number;
    activeChallenge: Challenge;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completedChallenge: () => void;
    closeLevelUpModal: () => void;

}

interface ChallengeProviderProp {
    children: ReactNode;
    level: number;
    currentLevel: number;
    challengeCompleted:number;
}


export const ChallengeContext = createContext({} as ChallengeContextData);

export function ChallengeProvider({
     children,
     ...rest
     }: ChallengeProviderProp) {
    const [level, setLevel] = useState(rest.level ?? 1);
    const [currentLevel, setCurrentLevel] = useState(rest.currentLevel ?? 0);
    const [challengeCompleted, setChallengeCompleted] = useState(rest.challengeCompleted ?? 0);

    const [activeChallenge, setActiveChallenge] = useState(null);
    const [isLevelUpModelOpen, setLevelUpModelOpen] = useState(false);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)
    
    useEffect(() => {
        Notification.requestPermission();
    }, []);


    useEffect(() => {
        Cookies.set('level' , String(level));
        Cookies.set('currentLevel' , String(currentLevel));
        Cookies.set('challengeCompleted' , String(challengeCompleted));
    }, [level, currentLevel, challengeCompleted]);

    function levelUp() {
      setLevel(level + 1);
      setLevelUpModelOpen(true);
    } 

    function closeLevelUpModal() {
        setLevelUpModelOpen(false);
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);

    

        if (Notification.permission === 'granted') {
            new Audio('/notification.mp3').play();
            new Notification('Novo Desafio 🎉', {
                body: `Valendo ${challenge.amount} xp`
            })
        }
    }

    function resetChallenge() {
        setActiveChallenge(null);
    }

    function completedChallenge() {
        if (!activeChallenge) {
            return;
        }

        const { amount } = activeChallenge;

        let finalExperience = currentLevel + amount;

        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrentLevel(finalExperience);
        setActiveChallenge(null);
        setChallengeCompleted(challengeCompleted + 1);
    }

    return (
        <ChallengeContext.Provider 
         value={{ 
            level, 
            currentLevel, 
            challengeCompleted, 
            levelUp, 
            startNewChallenge,
            resetChallenge,
            completedChallenge,
            activeChallenge,
            experienceToNextLevel,
            closeLevelUpModal,
            }}
        >
            {children}

           { isLevelUpModelOpen && <LevelUpModal />}
        </ChallengeContext.Provider>
    );
}
