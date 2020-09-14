import React from 'react';
import styles from './InfoPanel.module.css';
import InfoVideo from './InfoVideo';

function InfoPanel(props) {
    const content = () => {
        if (props.item !== null) {
            const info = [
                <div key='title' className={styles.infoTitle}>{props.item.name}</div>,
                <img key='image'
                    className={styles.infoImage} 
                    alt={props.item.name} 
                    src={process.env.PUBLIC_URL + `/items/vanilla_items/itemIcons/${props.item.imgName}`}
                />,
                <div key='descTag' className={styles.infoSubtitle}>Description:</div>,
                
                <div key='desc'>{props.item.description}</div>,
                
                <div key='stackTag' className={styles.infoSubtitle}>Stacking Effect:</div>,

                <div key='stack'>{props.item.stack}</div>

            ];

            if (props.item.hasVideo && props.item.hasVideo === true) {
                info.push(<InfoVideo key='video' item={props.item} />);
            }
            return (info);
        } else {
            return (<div>Empty</div>);
        }
    }

    return (
        <div className={styles.infoPanel}>
            {content()}
        </div>
    );
}

export default InfoPanel;