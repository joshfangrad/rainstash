import React from 'react';
import styles from './InfoVideo.module.css';

function InfoVideo({ item, folderName }) {
    return(
        <video id="infoVideo" className={styles.infoVideo} preload="auto" autoPlay muted loop>
            <source src={process.env.PUBLIC_URL + `items/${folderName}/${item.manifestName}/usageMP4s/${item.vidName}`}></source>
        </video>
    );
}

export default InfoVideo;