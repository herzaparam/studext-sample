import React from 'react'
import styles from '../../styles/Navbar.module.css'

function Navbar() {
    return (
        <nav className={styles.cont}>
            <img src="/logo studext 1.png" alt="logo studext" />
            <div className={styles["search-bar"]}>
                <img src="/icon search.png" alt="" />
                <input type="text" placeholder="Search .." />
            </div>
            <button className={styles["btn-nav"]}><img className={styles["icon-img"]} src="/icon home.png" alt="" />Home</button>
            <button className={styles["btn-nav"]}><img className={styles["icon-img"]} src="/icon my course.png" alt="" />My Course</button>
            <button className={styles["btn-nav"]}><img className={styles["icon-img"]} src="/icon dashboard.png" alt="" />Dashboard</button>
            <button className={styles["btn-nav"]}><img className={styles["icon-img"]} src="/icon chat.png" alt="" />Chat</button>
            <button className={styles["btn-nav"]}><img className={styles["icon-img"]} src="/icon notification.png" alt="" />Notification</button>
            <button className={styles["btn-nav"]}><img className={styles["icon-img"]} src="/icon smile.png" alt="" />Profile</button>
            <button className={styles["toggle"]}></button>
        </nav>
    )
}

export default Navbar
