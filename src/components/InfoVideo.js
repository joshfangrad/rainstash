import React from 'react';
import styles from './InfoVideo.module.css';

function InfoVideo(props) {
    return(
        <video id="infoVideo" className={styles.infoVideo} preload="auto" autoPlay muted loop>
            <source src={process.env.PUBLIC_URL + `/items/vanilla_items/usageMP4s/${props.item.vidName}`}></source>
        </video>
    );
}

export default InfoVideo;