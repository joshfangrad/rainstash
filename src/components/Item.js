import React from 'react';
import styles from './Item.module.css';

function Item(props) {
    //if the item is selected, highlight it
    const classes = [styles.item];
    if (props.selected && props.selected.name === props.name) { 
        classes.push(styles.selected)
    }

    return (
        <img className={classes.join(' ')}
        // + (props.selected && props.selected.name === props.name ? styles.selected : null)
            src={props.src}
            alt={props.name} 
            id={props.name}
            onMouseOut={props.onMouseOut}
            onMouseOver={props.onMouseOver}
            onClick={props.onClick}
        />
    );
}

export default Item;