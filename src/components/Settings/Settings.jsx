import React from 'react';
import ToggleSetting from './ToggleSetting';

import styles from './Settings.module.css';

const Settings = () => {
    return (
        <div className={styles.settingsWrap}>
            <div className={styles.switchesWrap}>
                <ToggleSetting label={'Display Caps'} settingName={'displayCap'} defaultState={true}/>
                <ToggleSetting label={'Load Videos'} settingName={'loadVideos'} defaultState={true}/>
                <ToggleSetting label={'Performance Mode'} settingName={'performanceMode'} defaultState={false}/>
            </div>
        </div>
    );
}

export default Settings;