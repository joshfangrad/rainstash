import React, { useCallback, useState } from 'react';
import { getOrCreateEnabledItems, setCookie } from '../../../misc/cookie';
import Tooltip from './../Tooltip.jsx';

import styles from './ToggleMod.module.css';

const ToggleMod = ({ name, settingName, description, defaultState }) => {
    const [checked, setChecked] = useState( defaultState );

    const changeHandler = useCallback((e) => {
        setChecked(e.target.checked);
        const enabledItems = getOrCreateEnabledItems(name);
        if (e.target.checked) {
            if (enabledItems.includes(settingName) === false) {
                //add mod name to list of enabled mods
                setCookie(`${name}enabledItems`, JSON.stringify(enabledItems.concat(settingName)));
            }
        } else {
            if (enabledItems.includes(settingName) === true) {
                //remove the mod from enabled items
                setCookie(`${name}enabledItems`, JSON.stringify(enabledItems.filter(mod => mod !== settingName)));
            }
        }
    }, [settingName, name, setChecked]);

    return (
        <div className={styles.toggleMod} key={name}>
            <label htmlFor={`check_${name}_${settingName}`} className={styles.toggleLabel}>{settingName}</label>
            <Tooltip description={description} />
            <label htmlFor={`check_${name}_${settingName}`} className={styles.horizontalLine}></label>
            <input
                id={`check_${name}_${settingName}`}
                type="checkbox"
                checked={checked}
                className={styles.toggleSwitch}
                onChange={(e) => changeHandler(e)}    
            ></input>
        </div>        
    );
}

export default ToggleMod;