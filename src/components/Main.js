import React from 'react';
import styles from './Main.module.css';

import TitleBar from './TitleBar';
import InfoPanel from './InfoPanel';
import ItemPanel from './ItemPanel';

function Main() {
    return (
        <div className={styles.mainFlex}>
            <TitleBar />
            <div className={styles.panelsFlex}>
                <InfoPanel />
                <ItemPanel />
            </div>
        </div>
    );
}

export default Main;