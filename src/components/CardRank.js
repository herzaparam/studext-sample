import React from 'react'
import styles from "../../styles/CardRank.module.css"

function CardRank({className}) {
    return (
        <div className={styles[`${className}`]}>
            <div className={styles["number"]}>
                <p>1</p>
            </div>
            <img className={styles["img-profile"]} src="/ceb.jpg" alt="" />
            <div className={styles["name"]}>
                <p>Herza Paramayudhanto</p>
            </div>
            <div className={styles["score"]}>
            <p className={styles["score-1"]}>10</p>
            <p className={styles["score-2"]}>20</p>
            <p className={styles["score-3"]}>30</p>
            </div>
            <div className={styles["final-score"]}>
                <p className={styles["fscore"]}>100</p>
            </div>
        </div>
    )
}

export default CardRank
