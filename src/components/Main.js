import React, { useState } from 'react';
import { Router } from "@reach/router"
import styles from './Main.module.css';

import TitleBar from './TitleBar';
import InfoPanel from './InfoPanel';
import ItemPanel from './ItemPanel';

function Main() {
    const [hovered, setHovered] = useState(null);
    const [selected, setSelected] = useState(null);

    const mouseOverHandler = (item) => { 
        setHovered(item); 
    }

    const mouseOutHandler = () => { 
        setHovered(null);
    }

    //selection
    const clickHandler = (item) => {
        if (selected === null) {
            setSelected(item);
        } else {
            if (selected !== item) {
                setSelected(item);
            } else {
                setSelected(null);
            }
        }
    }

    const infoItem = () => {
        if (hovered) {
            return hovered;
        } else if (selected) {
            return selected;
        } else {
            return null;
        }
    }

    const Ror1 = () => {
        return (
            <div className={styles.panelsFlex}>
                <InfoPanel item={infoItem()} />
                <ItemPanel selected={selected} handlers={{
                    onOut: () => mouseOutHandler(), 
                    onOver: (name) => mouseOverHandler(name),
                    onClick: (name) => clickHandler(name)
                }} />
            </div>
        );
        
    }

    const Ror2 = () => {
        return (
            <div>:)</div>
        );
    }

    return (
        <div className={styles.mainFlex}>
            <TitleBar />
            <Router>
                <Ror1 path='ror1' default />
                <Ror2 path='ror2' />
            </Router>
            
        </div>
    );
}

export default Main;