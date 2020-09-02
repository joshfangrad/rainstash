import React from 'react';
import styles from './TitleBar.module.css';

function TitleBar() {
    return (
        <div className={styles.titleBar}>
            <img src='/static/Golden_Chest.png' className={styles.titleIcon} alt=''/>
            <div className={styles.titleText}>Rainstash</div>
            <span className={styles.spacer}></span>
        </div>
    );
}

export default TitleBar;