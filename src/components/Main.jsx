import React, { useState, useCallback } from 'react';
import { Router } from "@reach/router";
// import TransitionRouter from './TransitionRouter';
import ItemPage from './ItemPage';
import Settings from './Settings/Settings';
import TitleBar from './TitleBar/TitleBar';

import styles from './Main.module.css';

function Main() {
    const [searchString, setSearchString] = useState('');

    //handler for the searchbar, called by input.onChange
    const searchBarHandler = useCallback((e) => {
        setSearchString(e.target.value);
    }, [setSearchString]);

    return (
        <div className={styles.mainFlex}>
            <TitleBar 
                onSearchChange={(e) => searchBarHandler(e)}
                searchString={searchString}
            />
            <Router className={styles.panelsFlex}>
                <ItemPage
                    path='ror1' default
                    folderName='ror1'
                    searchString={searchString}
                />
                <ItemPage
                    path='ror2'
                    folderName='ror2'
                    searchString={searchString}
                />
                <Settings path='settings' />
            </Router>
        </div>
    );
}

export default Main;