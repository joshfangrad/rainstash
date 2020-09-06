import React from 'react';
import styles from './InfoPanel.module.css';

function InfoPanel(props) {
    const content = () => {
        if (props.item !== null) {
            return ([
                <div className={styles.infoTitle}>{props.item.name}</div>,
                <img 
                    className={styles.infoImage} 
                    alt={props.item.name} 
                    src={process.env.PUBLIC_URL + `/items/vanilla_items/itemIcons/${props.item.imgName}`}
                />,
                <div className={styles.infoSubtitle}>Description:</div>,
                
                <div>{props.item.description}</div>,
                
                <div className={styles.infoSubtitle}>Stacking Effect:</div>,

                <div>{props.item.stack}</div>
            ]);
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