import React, { useCallback, useState } from 'react'
import { getBoolCookie, setCookie } from '../../../misc/cookie';

import styles from './ToggleSetting.module.css'


const ToggleSetting = (props) => {
    const [checked, setChecked] = useState( getBoolCookie(props.settingName, props.defaultState) );

    //update state and cookie on click
    const changeHandler = useCallback((e) => {
        setChecked(e.target.checked);
        setCookie(props.settingName, e.target.checked ? 'true' : 'false');
        if (props.onChange) {
            props.onChange(e.target.checked);
        }
    }, [props]);

    return (
        <label htmlFor={`check_${props.settingName}`} className={styles.toggleSetting}>
            <label className={styles.toggleLabel}>{props.label}</label>
            <div className={styles.horizontalLine}></div>
            <input 
                id={`check_${props.settingName}`}
                type="checkbox"
                checked={checked}
                className={styles.toggleSwitch}
                onChange={(e) => changeHandler(e)}
            />
        </label>
    );
}

export default ToggleSetting;