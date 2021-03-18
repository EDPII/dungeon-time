import styles from '../styles/components/Profile.module.css'
import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import { signOut, useSession } from 'next-auth/client';
import { FaSignOutAlt } from 'react-icons/fa'
 

export function Profile(props): JSX.Element {
    
    const { level } = useContext(ChallengeContext);

    

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/edpii.png" alt="Eduardo" />
            <div>
                <strong>Eduardo</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
            <div>
                <div className={styles.signOutContainer}>
                    <a type="button" 
                    onClick={() => signOut()}>
                            <FaSignOutAlt size="2rem" color="white"/>
                    </a>
                </div>
            </div>
        </div>
    );

}