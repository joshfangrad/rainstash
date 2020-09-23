import React from 'react';
import styles from './Item.module.css';

function Item(props) {
    //if the item is selected, highlight it
    const imgClass = [styles.item];
    
    if (props.isSelected) { imgClass.push(styles.selected) }

    if (props.isHidden) { imgClass.push(styles.hidden) }

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