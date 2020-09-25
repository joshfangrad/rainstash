import React from 'react';
import { Link, navigate } from "@reach/router";
import styles from './TitleBar.module.css';
 
import SearchBar from './SearchBar';

function TitleBar({ onSearchChange, searchString }) {
    //method for changing styling if the link button is active
    const isActive = ({ isCurrent }) => {
        return {
          className: `${styles.linkTab} ${isCurrent ? styles.active : styles.inactive}`  
        };
    };

    return (
        <div className={styles.titleBar}>
            <img src='/static/Golden_Chest.png' className={styles.titleIcon} alt=''/>
            
            <Link to='ror1' getProps={isActive} >
                <img src='static/ror1Icon.png' alt='ror1Icon' className={styles.linkIcon}/>
                ror 1
            </Link>
            <Link to='ror2' getProps={isActive} >
                <img src='static/ror2Icon.png' alt='ror2Icon' className={styles.linkIcon}/>
                ror 2
            </Link>

            <span className={styles.spacer}></span>

            <SearchBar onSearchChange={onSearchChange} searchString={searchString} />
            <img className={styles.gearButton} 
                alt="settings button" 
                src='static/gear2.png'
                onClick={() => navigate('/settings')}
            />
        </div>
    );
}

export default TitleBar;
