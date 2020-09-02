import React from 'react';
import styles from './Item.module.css';

function Item(props) {
    return (
        <img className={styles.item} 
            src={props.src}
            alt={props.name} 
            id={props.keyId}
            // onClick={props.onClick} 
        />
    );
}

export default Item;