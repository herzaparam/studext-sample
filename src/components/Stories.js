import React from 'react'
import styles from '../../styles/Stories.module.css'

function Stories({name}) {
    return (
        <div className={styles["container"]}>
        <div className={styles["stories"]}>
            <img src="/Rectangle 356.png" alt="" />
        </div>
        <p>{name ? name : "Username"}</p>
        </div>
    )
}

export default Stories
