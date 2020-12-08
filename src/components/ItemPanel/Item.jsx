import React from 'react';
import styles from './Item.module.css';

function Item(props) {
    //doing some conditional styling for items here
    const imgClass = [styles.item];
    //if the item is selected, highlight it
    if (props.isSelected) { imgClass.push(styles.selected) }
    //if it's hidden, hide it 
    if (props.isHidden) { imgClass.push(styles.hidden) }
    //if it's from ror1, apply some styling for preserving the pixel art when upscaled
    if (props.folderName === 'ror1') { imgClass.push(styles.ror1Items) }

    return (
        <div id={props.item.name} className={imgClass.join(' ')}
            onMouseOut={props.onMouseOut}
            onMouseOver={props.onMouseOver}
            onClick={props.onMouseClick}
        >
            <img className={styles.itemImg}
                src={props.src}
                alt={props.item.name} 
                id={`${props.item.name}_image`}
            />

            {props.item.maxStacks && props.displayCap === true &&
                <div className={styles.itemCap}>
                    {props.item.maxStacks}
                </div>
            }
        </div>
    );

}

export default Item;