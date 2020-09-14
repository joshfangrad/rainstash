import React from 'react';
import { Link, navigate } from "@reach/router"
import styles from './TitleBar.module.css';

function TitleBar() {
    return (
        <div className={styles.titleBar}>
            <img src='/static/Golden_Chest.png' className={styles.titleIcon} alt=''/>
            <div className={styles.titleText}>Rainstash</div>
            <nav>
                <Link to='ror1'>ror1</Link>
                <Link to='ror2'>ror2</Link>
            </nav>
            <span className={styles.spacer}></span>
            <img className={styles.gearButton} 
                alt="settings button" 
                src='static/gear2.png'
                onClick={() => navigate('/settings')}
            />
        </div>
    );
}

export default TitleBar;