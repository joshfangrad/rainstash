import React, { useState, useCallback, useEffect } from 'react';
import { getBoolCookie } from '../misc/cookie';
import { Router } from '@reach/router';
import ItemPage from './ItemPage';
import Settings from './Settings/Settings';
import TitleBar from './TitleBar/TitleBar';
import mobileContext from './mobileContext';

import styles from './Main.module.css';

function Main() {
    const [searchString, setSearchString] = useState('');
    const [isMobile, setIsMobile] = useState(false);
    const [performanceMode, setPerformanceMode] = useState( getBoolCookie('performanceMode', false) );
    const [useRorFont, setUseRorFont] = useState( getBoolCookie('useRorFont', true) );

    //handler for the searchbar, called by input.onChange
    const searchBarHandler = useCallback((e) => {
        setSearchString(e.target.value);
    }, [setSearchString]);

    //handler for resizing based on media queries
    const resizeHandler = useCallback((e) => {
        setIsMobile(e.matches);
    }, [setIsMobile])
    
    //establish an event listener for resizing
    useEffect(() => {
        //first check if we started in mobile mode
        const match = window.matchMedia('(max-width: 600px)');
        setIsMobile(match.matches);
        //set listener
        match.addEventListener('change', (e) => resizeHandler(e));

        return () => {
            match.removeEventListener(resizeHandler);
        }
        
    }, [setIsMobile, resizeHandler]);

    //determine if performance mode is running or not
    const performanceModeClass = performanceMode === true ? styles.noFlair : ''; 
    const useRorFontClass = useRorFont === false ? styles.noRorFont : '';

    return (
        <mobileContext.Provider value={isMobile}>
            <div className={`${styles.mainFlex} ${performanceModeClass} ${useRorFontClass}`}>
                <TitleBar 
                    onSearchChange={(e) => searchBarHandler(e)}
                    searchString={searchString}
                />
                <Router className={styles.panelsFlex}>
                    <ItemPage
                        path='ror1'
                        folderName='ror1'
                        searchString={searchString}
                    />
                    <ItemPage
                        path='ror2' default
                        folderName='ror2'
                        searchString={searchString}
                    />
                    <Settings path='settings'
                        setPerformanceMode={(value) => setPerformanceMode(value)}
                        setUseRorFont={(value) => setUseRorFont(value)}
                    />
                </Router>
            </div>
        </mobileContext.Provider>
    );
}

export default Main;