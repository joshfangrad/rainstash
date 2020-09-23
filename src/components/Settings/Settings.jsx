import React from 'react';
import ToggleSetting from './ToggleSetting';

import styles from './Settings.module.css';

const Settings = () => {
    return (
        <div className={styles.settingsWrap}>
            <ToggleSetting label={'display Cap'} settingName={'displayCap'} defaultState={true}/>
        </div>
    );
}

export default Settings;