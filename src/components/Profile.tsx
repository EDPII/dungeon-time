import styles from '../styles/components/Profile.module.css'
import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import { signOut, useSession } from 'next-auth/client';
import { FaSignOutAlt } from 'react-icons/fa'
 

export function Profile(props): JSX.Element {
    
    const { level } = useContext(ChallengeContext);
    const [session, loading] = useSession();
    return (
        <div className={styles.profileContainer}>
            <img src={`${session.user.image}`} alt={`${session.user.name}`} />
            <div>
                <strong>{session.user.name}</strong>
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