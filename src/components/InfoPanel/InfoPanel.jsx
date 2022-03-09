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
                info.push(<div key='description'>{GenerateDescription([ ...item.color ], item.description)}</div>);
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
const GenerateDescription = (colorList, description, constructedDescription = []) => {
    
    //if we've used up all our color modifiers supplied, tack on the last bit of the description and finish
    if (colorList.length === 0) { 
        constructedDescription.push(
            <div key={description + Math.random()} className={styles.description}>{description}</div>
        );
        return constructedDescription;
    }

    //get the first item from the color list and search for matches in the description
    const [word, color] = Object.entries(colorList[0])[0];

    if (word.length === 0 || color.length === 0) {
        console.log(`malformed color entry: ${word} : ${color}`);
    } else {
        const index = description.indexOf(word);
        if (index !== -1) {
            // if there's text before the match, make sure it gets added to the constructed description
            if (index > 0) {

                const textBeforeMatch = description.slice(0, index);
                constructedDescription.push(
                    <div key={textBeforeMatch + Math.random()} className={styles.description}>{textBeforeMatch}</div>
                );
            }

            // add the match to the constructed description
            const matchText = description.slice(index, index + word.length);
            constructedDescription.push(
                <div key={matchText + Math.random()} style={{color: color}} className={styles.description}>{matchText}</div>
            );

            //remove the description chunks we've processed
            description = description.slice(index + word.length);
        }
    }

    // remove color we just searched for
    colorList.shift();
    return GenerateDescription(colorList, description, constructedDescription);
}

export default InfoPanel;