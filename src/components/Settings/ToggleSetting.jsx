import React, { useState } from 'react'

import styles from './ToggleSetting.module.css'

import { getBoolCookie, setCookie } from '../../misc/cookie';

const ToggleSetting = (props) => {
    const [checked, setChecked] = useState( getBoolCookie(props.settingName, props.startingState) );

    //update state and cookie on click
    const changeHandler = (e) => {
        setChecked(e.target.checked);
        setCookie(props.settingName, e.target.checked ? 'true' : 'false');
    };

    return (
        <div className={styles.toggleWrap}>
            <label>{props.label}</label>
            <input 
                type="checkbox"
                checked={checked}
                onChange={(e) => changeHandler(e)}
            />
            <label>{checked}</label>
        </div>
    );
}

export default ToggleSetting;