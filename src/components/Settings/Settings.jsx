import React, { useState } from 'react';
import { getBoolCookie } from '../../misc/cookie';
import ModMenu from './ModMenu';
import ToggleSetting from './switches/ToggleSetting';

import styles from './Settings.module.css';

const Settings = ({ setPerformanceMode, setUseRorFont }) => {
    const [modsEnabled, setModsEnabled] = useState( getBoolCookie('mods', false) );
    
    return (
        <div className={styles.settingsWrap}>
            <div className={styles.settingsTitle}>S e t t i n g s</div>
            <div className={styles.switchesWrap}>
                <ToggleSetting 
                    label={'Display Item Caps'} 
                    settingName={'displayCap'} 
                    defaultState={true}
                />
                <ToggleSetting 
                    label={'Load Videos'} 
                    settingName={'loadVideos'} 
                    defaultState={true}
                />
                <ToggleSetting 
                    label={'Performance Mode'} 
                    settingName={'performanceMode'} 
                    defaultState={false} 
                    onChange={(value) => setPerformanceMode(value)}
                />
                <ToggleSetting 
                    label={'Risk of Rain Font'} 
                    settingName={'useRorFont'} 
                    defaultState={true} 
                    onChange={(value) => setUseRorFont(value)}
                />
                <ToggleSetting 
                    label={'Mods'} 
                    settingName={'mods'} 
                    defaultState={false} 
                    onChange={(value) => setModsEnabled(value)}
                />
            </div>
            {modsEnabled === true && <>
                <div className={styles.modWrap}>
                    <ModMenu name={'ror1'} />
                    <div className={styles.verticalLine}></div>
                    <ModMenu name={'ror2'} />
                </div>
            </>}
            <div className={styles.dividerLine}></div>
            <div className={styles.infoWrap}>
                <a 
                    href={'https://github.com/joshfangrad/rainstash'}  
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.repoLink}
                >
                    Rainstash Repository
                </a>
                <div className={styles.dividerLine}></div>
                <div className={styles.greyText}>
                    Found a bug? Have an idea for the site?
                    <br></br>
                    I'd really appreciate an email! You can catch me at:
                </div>
                <a 
                    href={'mailto:support@rainstash.com'}  
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.emailLink}
                >
                    support@rainstash.com
                </a>
                <div className={styles.dividerLine}></div>
                <div className={`${styles.greyText} ${styles.smallerFont}`}>
                    Big thanks to Saturnyoshi (Saturnyoshi#5861 on discord) for providing me with correct ror1 item effects from the source code! 
                </div>
            </div>
        </div>
    );
}

export default Settings;