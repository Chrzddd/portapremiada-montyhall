import styles from "../styles/Presente.module.css"
export default function Presente(){
    return (
        <div className={styles.presente}> 
              <div className={styles.tampa}></div>
              <div className={styles.corpo}></div>
              <div className={styles.vertical}></div>
              <div className={styles.horizontal}></div>
        </div>
    )
}