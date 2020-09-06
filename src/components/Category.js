import React from 'react';
import styles from './Category.module.css';
import Item from './Item';

function Category(props) {
    //go through the items and add them to the category
    const items = props.items.map((item) => {
        return (
            <Item 
                key={item.name}
                alt={item.name}
                name={item.name}
                // className={props.selected && props.selected.name === item.name ? styles.selected : null}
                selected={props.selected}
                src={process.env.PUBLIC_URL + `/items/vanilla_items/itemIcons/${item.imgName}`}
                onMouseOut={() => props.handlers.onOut()}
                onMouseOver={() => props.handlers.onOver(item)}
                onClick={() => props.handlers.onClick(item)}
            />
        );
    });

    return (
        <div className={styles.category} key={props.name} style={{borderColor: props.color}}>
            <div className={styles.categoryTitle} style={{color: props.color, borderColor: props.color}} key={`title_${props.name}`}>
                {props.name}
            </div>
            {items}
        </div>
    );
}

export default Category;