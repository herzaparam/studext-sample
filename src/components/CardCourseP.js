import React from 'react'
import styles from '../../styles/CardCourseP.module.css'

function CardCourseP() {
    return (
        <div className={styles["container"]}>
            <div className={styles["top"]}>
                <img src="/Rectangle 356.png" alt="" />
                <div className={styles["top-right"]}>
                <div className={styles["top-right-ele"]}>
                    <p className={styles["txt-bl"]}>TOEFL</p>
                    <p>{">"}</p>
                </div>
                <div className={styles["top-right-el"]}>
                <img src="Rectangle 367.png" alt="" />
                <p className={styles["txt-grey2"]}>By Course Hero</p>
                </div>
                <div className={styles["top-right-el"]}>
                    <img src="Profile.png" alt="" />
                    <p className={styles["txt-grey3"]}>203 Pelajar, 4 Guru</p>
                </div>
                </div>
            </div>
            <div className={styles["bot"]}>
                <h5>Mulai: <span className={styles["bold"]}>17 Agustus 2021</span></h5>
                <div className={styles["bot-right"]}>
                    <h4 className={styles["txt-grey"]}>Rp 2.000.000</h4>
                    <h4 className={styles["txt-blue"]}>Rp 1.500.000</h4>
                </div>
            </div>
        </div>
    )
}

export default CardCourseP
