import styles from '../styles/components/Countdown.module.css';
import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';


export function Countdown() {
    const { minutes, 
            seconds, 
            hasFinished, 
            resetCountdown, 
            startCountdown, 
            isActive 
          } = useContext(CountdownContext);
    

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

   

    return (
        <div>
              <div className={styles.CountdownContainer}>
                  <div>
                      <span>{minuteLeft}</span>
                      <span>{minuteRight}</span>
                 </div>
                 <span>:</span>
                  <div>
                        <span>{secondLeft}</span>
                        <span>{secondRight}</span>
                 </div>
             </div>


            { hasFinished ? (
              <button 
                disabled
                className={styles.CountdownButton}
                >         
                    Ciclo Encerrado
                    <img src="icons/check.png" alt="Check" />
              </button>
            ) : (
                <>
                    {isActive ? (
                    <button 
                    type="button" 
                    className={`${styles.CountdownButton} ${styles.CountdownButtonActive}`}
                    onClick={resetCountdown}
                    >         
                        Abandonar Ciclo
                    </button>
                ) : (

                    <button 
                    type="button" 
                    className={styles.CountdownButton}
                    onClick={startCountdown}
                    >
                        Iniciar um Ciclo
                    </button>
                )}
                    </>
            ) }
                 
           

             

        </div>

    );
}