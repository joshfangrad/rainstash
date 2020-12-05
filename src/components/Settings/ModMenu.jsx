import React, { useEffect, useState } from 'react';
import { getOrCreateEnabledItems } from '../../misc/cookie';
import availableMods from '../../misc/availableMods';
import ToggleMod from './switches/ToggleMod';

import styles from './ModMenu.module.css';
import Tooltip from './Tooltip';

const ModMenu = ({ name }) => {
    const [ mods, setMods ] = useState(null);

    useEffect(() => {
        const modList = availableMods[name].items;
        const enabledItems = getOrCreateEnabledItems(name);
        setMods(Object.keys(modList).map((listName) => {
            return (<ToggleMod 
                key={listName}
                name={name}
                settingName={listName}
                description={modList[listName].description}
                defaultState={enabledItems.includes(listName)}
            />);
        }));
    }, [name, setMods]);
    
    return (
        <div className={styles.modsList}>
            <div className={styles.nameWrap}>
                <div className={styles.modsListTitle}>{name}</div>
                <Tooltip description={availableMods[name].description} />
            </div>
            {mods}
        </div>
    );  
}

export default ModMenu;