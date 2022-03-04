import React, { useContext } from 'react';
import InfoVideo from './InfoVideo';
import { getBoolCookie } from '../../misc/cookie';

import styles from './InfoPanel.module.css';
import mobileContext from '../mobileContext';

function InfoPanel({ item, folderName, clearSelectedItem }) {
    const isMobile = useContext(mobileContext);
    const closePanelHandler = () => {
        clearSelectedItem();
    }

    const content = () => {
        if (item === null) { return null; }

        const info = []

        // mobile compatibility close button
        if (isMobile === true) { info.push(
            <img 
                alt={'close button'}
                src={'static/close3.png'}
                className={styles.closeButton}
                onClick={() => closePanelHandler()}
                key={'mobileClose'}
            />
        );}

        // title bar
        info.push(<div key='title' className={styles.infoTitle}>{item.name}</div>);

        // item image
        info.push(<img key='image'
            className={styles.infoImage} 
            alt={item.name} 
            src={process.env.PUBLIC_URL + `/items/${folderName}/${item.manifestName}/itemIcons/${item.imgName}`}
        />);

        // extra information
        if (item.extraInfo) { info.push(
            <div key='extra' className={styles.infoSubtitle}>{item.extraInfo}</div>
        );}

        if (item.description) {
            if (item.color) {
                info.push(<div key='description'>{GenerateDescription({ ...item.color }, item.description)}</div>);
            } else {
                info.push(<div key='description'>{item.description}</div>);
            }
        }

        //beating embryo effect
        if (item.embryo) {
            info.push(<div key='embryoTag' className={styles.infoSubtitle}>Beating Embryo Effect:</div>);
            info.push(<div key='embryo'>{item.embryo}</div>);
        }

        //use item cooldown
        if (item.cooldown) {
            info.push(<div key='cooldownTag' className={styles.infoSubtitle}>Cooldown:</div>);
            info.push(<div key='cooldown'>{item.cooldown} seconds.</div>);
        }

        //what the item drops from
        if (item.drop) {
            info.push(<div key='dropTag' className={styles.infoSubtitle}>Dropped By:</div>);
            info.push(<div key='drop'>{item.drop}</div>);
        }

        //actions required to unlock
        if (item.unlock) {
            info.push(<div key='unlockTag' className={styles.infoSubtitle}>Unlock:</div>);
            info.push(<div key='unlock'>{item.unlock}</div>);
        }

        //usage video
        if (getBoolCookie('LoadVideos', true) === true && (item.hasVideo === null || item.hasVideo !== false)) {
            info.push(<span key='spacer' className={styles.spacer}></span>);
            info.push(<InfoVideo key='video' folderName={folderName} item={item} />);
        }

        return info;
    }

    return (
        <div className={styles.infoPanel}>
            {content()}
        </div>
    );
}

//method to go though the description text, and re-color stack components by seperating the text into divs
const GenerateDescription = (color, description, constructedDescription = []) => {
    console.log(color);
    let lowestIndex;
    let lowestWord;
    for (const word of Object.keys(color)) {
        if (word.length !== 0) {
            const index = description.indexOf(word);
            if (index !== -1 && (lowestIndex === undefined || index < lowestIndex)) {
                lowestIndex = index;
                lowestWord = word;
            }
        }
    }

    if (lowestIndex !== undefined) {
        constructedDescription.push(
            <div key={description.slice(0, lowestIndex) + Math.random()} className={styles.description} >{description.slice(0, lowestIndex)}</div>
        ); 
        constructedDescription.push(
            <div key={lowestWord + Math.random()} className={styles.description} style={{color: color[lowestWord]}} >{lowestWord}</div>
        );

        //remove the entry before we run another iteration
        delete color[lowestWord];
        return GenerateDescription(color, description.slice(lowestIndex + lowestWord.length), constructedDescription);
    }
    constructedDescription.push(<div key='end' className={styles.description}>{description}</div>);
    return constructedDescription;
}

export default InfoPanel;